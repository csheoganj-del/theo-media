import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'default' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-near-black text-bone hover:bg-charcoal active:scale-[0.98] transition-all duration-200',
  secondary:
    'bg-transparent text-near-black border border-near-black/20 hover:border-near-black/40 active:scale-[0.98] transition-all duration-200',
  outline:
    'bg-transparent text-bone border border-bone/30 hover:border-bone/60 active:scale-[0.98] transition-all duration-200',
  text: 'bg-transparent text-near-black hover:text-stone transition-colors duration-200 !px-0 !py-0',
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'px-6 py-3 text-[13px]',
  large: 'px-8 py-4 text-[14px]',
};

export function Button({
  variant = 'primary',
  size = 'default',
  href,
  external,
  children,
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.08em] uppercase cursor-pointer select-none';
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
