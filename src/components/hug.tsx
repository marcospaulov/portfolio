import type { LucideIcon } from "lucide-react";

interface HugProps {
  name: string;
  Icon: LucideIcon;
}

function Hug(props: HugProps) {
  const { Icon, name } = props;
  return (
    <div className="flex items-center justify-center gap-2">
      <Icon />
      <span>{name}</span>
    </div>
  );
}

export default Hug;
