import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, AppWindow, Smartphone, Check } from 'lucide-react';
import { TiltCard, Reveal } from './Motion';

interface ServiceItem {
  title: string;
  badge: string;
  description: string;
  purpose: string;
  features: string[];
  icon: React.ElementType;
  accent: string;
  accentSoft: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: 'Websites & E-Commerce',
      badge: 'Your Online Front Door',
      description:
        'Responsive, conversion-focused websites built to explain your offer quickly, earn trust, capture enquiries and give Google a clean technical foundation.',
      purpose:
        'Best for: service businesses, consultants, local companies, ecommerce brands and B2B teams that need better enquiries.',
      features: [
        'Fully responsive on phones & tablets',
        'Clear service pages and calls to action',
        'Technical SEO, schema & analytics setup',
        'Fast-loading with easy content handover',
      ],
      icon: Monitor,
      accent: '#4F46E5',
      accentSoft: '#EEF2FF',
    },
    {
      title: 'Web Applications',
      badge: 'Your Custom Business Tools',
      description:
        'Browser-based systems for enquiries, customers, stock, staff, invoicing and reporting when off-the-shelf tools no longer fit.',
      purpose:
        'Best for: replacing spreadsheets, scattered notes, manual follow-ups and disconnected invoicing or stock records.',
      features: [
        'Real-time live multi-branch inventory sync',
        'Automated WhatsApp bill & receipt dispatch',
        'Multiple currency invoicing (GBP, EUR, CHF)',
        'Secure admin authorisation modules',
      ],
      icon: AppWindow,
      accent: '#7C3AED',
      accentSoft: '#F5F3FF',
    },
    {
      title: 'Mobile Applications',
      badge: 'Your App in Pockets',
      description:
        'Android apps and mobile-first portals for customers, field teams, loyalty flows and internal tools that need to work away from a desk.',
      purpose:
        'Best for: client loyalty programs, field team utilities, custom ordering platforms and smart push notification campaigns.',
      features: [
        'Smooth native hardware performance',
        'Smart targeted push notifications',
        'Full offline database operations cache',
        'Hassle-free Play Store submission support',
      ],
      icon: Smartphone,
      accent: '#06B6D4',
      accentSoft: '#ECFEFF',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <Reveal className="max-w-3xl mb-14 md:mb-20">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs uppercase tracking-widest font-bold mb-5">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Commercial websites and software{' '}
            <span className="font-accent text-gradient">that do the job.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#475569] mt-6 leading-relaxed">
            Strategy, interface design, development, launch support and handover — for teams that
            need a polished public site and dependable internal tools.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard
                  max={4}
                  className="card-lift group relative flex h-full flex-col bg-white rounded-3xl p-8 md:p-9 border border-[#E2E8F0] overflow-hidden"
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-80"
                    style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: service.accentSoft }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.accent }} />
                  </div>

                  {/* Badge & Title */}
                  <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: service.accent }}>
                    {service.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#0F172A] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-[#475569] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Purpose */}
                  <p
                    className="text-sm font-semibold text-[#0F172A] px-4 py-3 rounded-xl mb-7 leading-relaxed"
                    style={{ backgroundColor: service.accentSoft }}
                  >
                    {service.purpose}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mt-auto pt-6 border-t border-[#E2E8F0]">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: service.accentSoft }}
                        >
                          <Check className="w-3 h-3" style={{ color: service.accent }} />
                        </span>
                        <span className="text-sm text-[#475569] font-medium leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
