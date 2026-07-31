import { MessageCircle, Phone } from 'lucide-react';

const PHONE_NUMBER = '+353852258004';
const WHATSAPP_MESSAGE =
  'Hi TheoMedia, I would like to discuss a website, app or business software project.';

export default function FloatingContact() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <aside className="floating-contact" aria-label="Quick contact">
      <a
        className="floating-contact-action floating-contact-call"
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call TheoMedia"
      >
        <span className="floating-contact-icon" aria-hidden="true">
          <Phone size={17} strokeWidth={2.2} />
        </span>
        <span>Call now</span>
      </a>
      <a
        className="floating-contact-action floating-contact-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TheoMedia on WhatsApp"
      >
        <span className="floating-contact-icon" aria-hidden="true">
          <MessageCircle size={18} strokeWidth={2.2} />
        </span>
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
