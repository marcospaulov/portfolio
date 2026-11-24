import { Button } from "@ui/button";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="p-4 flex items-center justify-around gap-3 bg-black">
      <div>
        <Link href={"/"}>
          <Image src="/logo.svg" alt="Logo" width={24} height={24} />
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-4">
        <Link href={"/"}>Sobre mim</Link>
        <Link href={"/"}>Especialidades</Link>
        <Link href={"/"}>Linha do tempo</Link>
        <Link href={"/"}>
          <Button className="cursor-pointer">Download Currículo</Button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
