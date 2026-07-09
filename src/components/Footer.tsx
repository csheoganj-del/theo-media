import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'What We Build', href: '#services' },
    { name: 'Our Promise', href: '#why-us' },
    { name: 'How It Works', href: '#process' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Website Design', href: '#services' },
    { name: 'Web Applications', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'CRM & ERP Systems', href: '#services' },
    { name: 'POS Systems', href: '#services' },
    { name: 'Business Automation', href: '#services' },
    { name: 'EU Compliance Ready', href: '#services' },
  ];

  return (
    <footer className="py-16 border-t border-[#E2E8F0] bg-white z-10 relative overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

        {/* Brand Column */}
        <div className="text-center md:text-left space-y-4 max-w-sm">
          <a href="/" className="flex items-center justify-center md:justify-start space-x-2.5 group select-none">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-extrabold text-base leading-none">T</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
              Theo<span className="text-[#4F46E5]">Media</span>
            </span>
          </a>
          <p className="text-sm leading-relaxed text-[#64748B] font-medium">
            We build websites and software for UK, Irish and European businesses. We talk in
            plain English and design tools that anyone can use from day one.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
            <span className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold">UK</span>
            <span className="px-3 py-1 rounded-full bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold">Ireland</span>
            <span className="px-3 py-1 rounded-full bg-[#ECFEFF] text-[#06B6D4] text-xs font-bold">Europe</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-xs font-extrabold tracking-widest uppercase text-[#0F172A]">
            Navigation
          </h4>
          <div className="flex flex-col items-center md:items-start space-y-3">
            {links.map((lnk) => (
              <a
                key={lnk.name}
                href={lnk.href}
                className="text-sm font-semibold text-[#64748B] hover:text-[#4F46E5] transition-colors"
              >
                {lnk.name}
              </a>
            ))}
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-xs font-extrabold tracking-widest uppercase text-[#0F172A]">
            Our Services
          </h4>
          <div className="flex flex-col items-center md:items-start space-y-3">
            {services.map((svc) => (
              <a
                key={svc.name}
                href={svc.href}
                className="text-sm font-semibold text-[#64748B] hover:text-[#4F46E5] transition-colors"
              >
                {svc.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-xs font-extrabold tracking-widest uppercase text-[#0F172A]">
            Say Hello
          </h4>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <a
              href="mailto:hello@theomedia.co.uk"
              className="text-sm font-semibold flex items-center gap-2 text-[#64748B] hover:text-[#4F46E5] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#4F46E5]" />
              hello@theomedia.co.uk
            </a>
            <a
              href="tel:+353852258004"
              className="text-sm font-semibold flex items-center gap-2 text-[#64748B] hover:text-[#4F46E5] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#4F46E5]" />
              +353 85 225 8004
            </a>
            <a
              href="https://wa.me/353852258004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold flex items-center gap-2 text-[#64748B] hover:text-[#16A34A] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#16A34A]" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp us directly
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold flex items-center gap-2 text-[#64748B] hover:text-[#4F46E5] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#4F46E5]" />
              Send a simple message
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-[#64748B]">
        <span>&copy; {currentYear} TheoMedia. Built for growing European businesses.</span>
        <div className="flex gap-6">
          <a href="/terms.html" className="hover:text-[#4F46E5] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
