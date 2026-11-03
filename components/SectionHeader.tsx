import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  number: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
  light?: boolean;
};

export function SectionHeader({ number, title, eyebrow, children, light = false }: SectionHeaderProps) {
  return (
    <div className={`section-head ${light ? "section-head--light" : ""}`}>
      <Reveal className="section-kicker">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.04}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      <Reveal className="section-intro" delay={0.08}>
        {children}
      </Reveal>
    </div>
  );
}
