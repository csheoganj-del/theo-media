interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function SectionLabel({ children, dark = false, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`text-[11px] md:text-[12px] font-sans font-medium tracking-[0.2em] uppercase ${
        dark ? 'text-bone/50' : 'text-stone'
      } ${className}`}
    >
      {children}
    </span>
  );
}

export default SectionLabel;
