import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  href?: string;
  variant?: 'light' | 'dark';
  showWordmark?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Logo({
  href = '/',
  variant = 'light',
  showWordmark = true,
  className = '',
  onClick,
}: LogoProps) {
  const isLight = variant === 'light';

  // Same lockup as CodeArc: mark left, wordmark right ("Theo" + accent "Media")
  const inner = (
    <span className={`theomedia-logo ${isLight ? 'is-light' : 'is-dark'} ${className}`.trim()}>
      <Image
        className="theomedia-mark"
        src="/brand/theomedia-mark.svg"
        alt=""
        width={34}
        height={34}
        priority
        aria-hidden="true"
      />
      {showWordmark ? (
        <span className="theomedia-wordmark">
          <span className="theomedia-word-code">Theo</span>
          <span className="theomedia-word-arc">Media</span>
        </span>
      ) : null}
    </span>
  );

  if (!href) {
    return (
      <span className="theomedia-logo-link" aria-label="TheoMedia">
        {inner}
      </span>
    );
  }

  return (
    <Link href={href} className="theomedia-logo-link" aria-label="TheoMedia home" onClick={onClick}>
      {inner}
    </Link>
  );
}
