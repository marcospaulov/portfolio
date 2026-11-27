"use client";

import {
  FormField,
  FormFieldError,
  FormFieldLabel,
} from "@components/form-field";
import {
  InfoRow,
  InfoRowBody,
  InfoRowIcon,
  InfoRowLabel,
  InfoRowValue,
} from "@components/info-row";
import { useLocale } from "@components/layout";
import { Section, SectionGlow } from "@components/section";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { Textarea } from "@ui/textarea";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import * as React from "react";

type ContactChannel = "whatsapp" | "email";

interface FormErrors {
  name?: string;
  contact?: string;
  message?: string;
}

function ContactSection() {
  const { content } = useLocale();
  const { contact } = content;

  const [channel, setChannel] = React.useState<ContactChannel>("whatsapp");
  const [name, setName] = React.useState("");
  const [userContact, setUserContact] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitted, setSubmitted] = React.useState(false);

  const nameId = React.useId();
  const contactId = React.useId();
  const messageId = React.useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = contact.form.errors.name;
    }
    if (!userContact.trim()) {
      nextErrors.contact = contact.form.errors.contact;
    }
    if (!message.trim()) {
      nextErrors.message = contact.form.errors.message;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const trimmedName = name.trim();
    const trimmedContact = userContact.trim();
    const trimmedMessage = message.trim();

    if (channel === "whatsapp") {
      const text = `Olá Marcos! Me chamo ${trimmedName} (${trimmedContact}).\n\n${trimmedMessage}`;
      const url = `${contact.whatsappInfo.directHref}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      const subject = `Contato pelo Portfólio — ${trimmedName}`;
      const body = `Nome: ${trimmedName}\nContato: ${trimmedContact}\n\n${trimmedMessage}`;
      window.location.href = `${contact.emailInfo.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    setSubmitted(true);
    setName("");
    setUserContact("");
    setMessage("");
  }

  return (
    <Section id="contato" variant="surface">
      <SectionGlow position="bottom-right" />

      <div className="relative z-10 grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <Tabs
            value={channel}
            onValueChange={(nextValue) => {
              if (nextValue === "whatsapp" || nextValue === "email") {
                setChannel(nextValue);
              }
            }}
            className="gap-6"
          >
            <TabsList variant="ember" className="h-auto p-1 font-mono text-xs">
              <TabsTrigger
                value="whatsapp"
                className="rounded-sm px-3 py-1.5 font-mono text-xs"
              >
                <MessageCircle className="size-3.5" />
                {contact.channels.whatsapp}
              </TabsTrigger>
              <TabsTrigger
                value="email"
                className="rounded-sm px-3 py-1.5 font-mono text-xs"
              >
                <Mail className="size-3.5" />
                {contact.channels.email}
              </TabsTrigger>
            </TabsList>

            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {contact.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {contact.description}
              </p>
            </div>

            <TabsContent value="whatsapp" className="space-y-3 pt-1">
              <InfoRow
                render={(props) => (
                  <a
                    {...props}
                    href={contact.whatsappInfo.directHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.children}
                  </a>
                )}
              >
                <InfoRowIcon tone="emerald">
                  <Phone />
                </InfoRowIcon>
                <InfoRowBody>
                  <InfoRowLabel>
                    {contact.whatsappInfo.directLabel}
                  </InfoRowLabel>
                  <InfoRowValue>
                    {contact.whatsappInfo.directValue}
                  </InfoRowValue>
                </InfoRowBody>
              </InfoRow>

              <InfoRow>
                <InfoRowIcon tone="orange">
                  <Clock />
                </InfoRowIcon>
                <InfoRowBody>
                  <InfoRowLabel>
                    {contact.whatsappInfo.responseLabel}
                  </InfoRowLabel>
                  <InfoRowValue>
                    {contact.whatsappInfo.responseValue}
                  </InfoRowValue>
                </InfoRowBody>
              </InfoRow>
            </TabsContent>

            <TabsContent value="email" className="space-y-3 pt-1">
              <InfoRow
                render={(props) => (
                  <a {...props} href={contact.emailInfo.emailHref}>
                    {props.children}
                  </a>
                )}
              >
                <InfoRowIcon tone="orange">
                  <Mail />
                </InfoRowIcon>
                <InfoRowBody>
                  <InfoRowLabel>{contact.emailInfo.emailLabel}</InfoRowLabel>
                  <InfoRowValue>{contact.emailInfo.emailValue}</InfoRowValue>
                </InfoRowBody>
              </InfoRow>

              <InfoRow>
                <InfoRowIcon tone="muted">
                  <MapPin />
                </InfoRowIcon>
                <InfoRowBody>
                  <InfoRowLabel>{contact.emailInfo.locationLabel}</InfoRowLabel>
                  <InfoRowValue>{contact.emailInfo.locationValue}</InfoRowValue>
                </InfoRowBody>
              </InfoRow>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-7">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-border bg-muted/50 p-6"
          >
            <FormField invalid={Boolean(errors.name)}>
              <FormFieldLabel htmlFor={nameId}>
                {contact.form.nameLabel}
              </FormFieldLabel>
              <Input
                id={nameId}
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  if (errors.name) {
                    setErrors((prev) => ({ ...prev, name: undefined }));
                  }
                }}
                placeholder={contact.form.namePlaceholder}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <FormFieldError>{errors.name}</FormFieldError>}
            </FormField>

            <FormField invalid={Boolean(errors.contact)}>
              <FormFieldLabel htmlFor={contactId}>
                {contact.form.contactLabel}
              </FormFieldLabel>
              <Input
                id={contactId}
                type="text"
                value={userContact}
                onChange={(event) => {
                  setUserContact(event.target.value);
                  if (errors.contact) {
                    setErrors((prev) => ({ ...prev, contact: undefined }));
                  }
                }}
                placeholder={contact.form.contactPlaceholder}
                aria-invalid={Boolean(errors.contact)}
              />
              {errors.contact && (
                <FormFieldError>{errors.contact}</FormFieldError>
              )}
            </FormField>

            <FormField invalid={Boolean(errors.message)}>
              <FormFieldLabel htmlFor={messageId}>
                {contact.form.messageLabel}
              </FormFieldLabel>
              <Textarea
                id={messageId}
                rows={4}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  if (errors.message) {
                    setErrors((prev) => ({ ...prev, message: undefined }));
                  }
                }}
                placeholder={contact.form.messagePlaceholder}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <FormFieldError>{errors.message}</FormFieldError>
              )}
            </FormField>

            <Button
              type="submit"
              size="lg"
              className="h-11 w-full font-semibold"
            >
              <span>{contact.form.submit}</span>
              <Send />
            </Button>

            {submitted && (
              <output className="flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 font-mono text-xs text-emerald-400">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>{contact.form.submitted}</span>
              </output>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

export { ContactSection };
