interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function SectionLabel({ children, dark = false, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase font-medium ${
        dark ? 'text-[#A98864]' : 'text-oxidised-bronze'
      } ${className}`}
    >
      {children}
    </span>
  );
}

export default SectionLabel;
