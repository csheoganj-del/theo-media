export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'How long does a website project take?',
    answer: 'Starter website projects are typically completed in 10–14 days. Professional and Bespoke website projects or Specialist systems with custom workflows or booking engines usually take 3–5 weeks from initial kickoff.',
  },
  {
    question: 'Do I own the website and source code after launch?',
    answer: 'Yes, 100%. You own your domain, design, code, and content. We never hold your website hostage or lock you into mandatory recurring agency retainers.',
  },
  {
    question: 'Can I update text, prices, and images myself?',
    answer: 'Yes. On our Professional and Bespoke plans, as well as Specialist Projects, we set up an intuitive content management interface so your team can easily modify text, blog posts, menus, and media without touching code.',
  },
  {
    question: 'Are there any hidden monthly costs?',
    answer: 'Your project quote covers the agreed design and build. Domain, hosting, paid software, and payment-provider fees are separate where applicable. Costs depend on your chosen services and usage; we agree the scope and ongoing costs before work begins.',
  },
  {
    question: 'What if I need custom booking, payments, or third-party integrations?',
    answer: 'We integrate payment gateways (Stripe, PayPal, Apple Pay), booking calendars (Calendly, OpenTable), WhatsApp enquiry triggers, POS/PMS systems, and custom APIs seamlessly.',
  },
];
