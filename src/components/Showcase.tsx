import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Reveal, Magnetic } from './Motion';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  client: string;
  tags: string[];
  accentColor: string;
  features: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 'authority-website',
    title: 'Authority Website',
    subtitle: 'Conversion-Focused B2B Web Presence',
    description:
      'A polished homepage and service-page system for a UK-based consultancy. Built to look established, explain value fast and turn visitors into booked calls — with technical SEO and schema baked in from day one.',
    url: 'https://www.theomedia.co.uk',
    client: 'UK Consultancy',
    tags: ['Next.js', 'Technical SEO', 'Schema Markup', 'Conversion Design'],
    accentColor: '#4F46E5',
    features: [
      'Responsive across all devices',
      'Technical SEO with schema.org markup',
      'Enquiry capture & contact flows',
      'Google Analytics & Search Console setup',
    ],
    image: '/assets/authority-website-mockup.png',
  },
  {
    id: 'crm-portal',
    title: 'CRM & Operations Portal',
    subtitle: 'All-in-One Business Management Dashboard',
    description:
      'A private CRM and reporting dashboard for a European service business. Gives owners one place to manage leads, orders, stock, invoices and team activity — replacing scattered spreadsheets and manual follow-ups.',
    url: 'https://www.theomedia.co.uk',
    client: 'European Service Business',
    tags: ['React', 'Real-time Data', 'Role-based Access', 'WhatsApp Integration'],
    accentColor: '#7C3AED',
    features: [
      'Live multi-branch inventory sync',
      'Automated WhatsApp receipts & billing',
      'Multi-currency invoicing (GBP, EUR, CHF)',
      'Role-based staff access control',
    ],
    image: '/assets/crm-proof.png',
  },
  {
    id: 'pos-system',
    title: 'POS & Retail System',
    subtitle: 'Point of Sale & Workflow Automation',
    description:
      'A unified retail and hospitality POS system built for an Irish business. Combines billing, kitchen display, inventory tracking, customer loyalty, and WhatsApp receipts into one seamless and reliable platform.',
    url: 'https://www.theomedia.co.uk',
    client: 'Irish Retail & Hospitality',
    tags: ['Vanilla JS', 'Real-time KDS', 'WhatsApp API', 'Loyalty System'],
    accentColor: '#06B6D4',
    features: [
      'Instant POS billing & receipt generation',
      'Live kitchen order display & tickets',
      'Inventory tracking with low-stock alerts',
      'Customer loyalty & WhatsApp receipts',
    ],
    image: '/assets/pos-proof.png',
  },
];

export default function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'end start'],
  });
  const mockupY = useSpring(useTransform(scrollYProgress, [0, 1], [36, -36]), {
    stiffness: 60,
    damping: 20,
  });

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 100 : -100, opacity: 0 }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[currentIndex];

  return (
    <section id="work" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-[-5%] w-96 h-96 rounded-full bg-[#4F46E5]/8 blur-3xl pointer-events-none animate-drift-a" />
      <div className="absolute bottom-1/4 right-[-5%] w-96 h-96 rounded-full bg-[#06B6D4]/8 blur-3xl pointer-events-none animate-drift-b" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs uppercase tracking-widest font-bold mb-5">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Real systems,{' '}
              <span className="font-accent text-gradient">real results.</span>
            </h2>
            <p className="text-lg text-[#475569] mt-4 leading-relaxed">
              Explore some of our active builds — each one designed to automate work,
              capture enquiries and grow a European business.
            </p>
          </Reveal>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-8 md:mt-0">
            <Magnetic strength={0.4}>
              <button
                onClick={handlePrev}
                className="p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#4F46E5]/40 hover:bg-[#EEF2FF]/50 active:scale-95 transition-all text-[#0F172A]"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </Magnetic>
            <Magnetic strength={0.4}>
              <button
                onClick={handleNext}
                className="p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#4F46E5]/40 hover:bg-[#EEF2FF]/50 active:scale-95 transition-all text-[#0F172A]"
                aria-label="Next project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Showcase Stage */}
        <div ref={stageRef} className="relative min-h-[580px] lg:min-h-[520px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Info Column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                  {activeProject.title}
                </h3>
                <h4
                  className="text-sm font-bold uppercase tracking-wider mb-2"
                  style={{ color: activeProject.accentColor }}
                >
                  {activeProject.subtitle}
                </h4>
                <p className="text-xs font-semibold text-[#94A3B8] mb-6">
                  Built by TheoMedia for {activeProject.client}
                </p>
                <p className="text-base text-[#475569] leading-relaxed mb-8">
                  {activeProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-white border border-[#E2E8F0] text-[#64748B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {activeProject.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0"
                        style={{ color: activeProject.accentColor }}
                      />
                      <span className="text-sm font-medium text-[#475569]">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Magnetic strength={0.2}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white text-sm font-bold transition-shadow hover:shadow-[0_16px_40px_-12px_rgba(79,70,229,0.5)]"
                    style={{
                      background: `linear-gradient(135deg, ${activeProject.accentColor}, #7C3AED)`,
                    }}
                  >
                    Request a Similar Build
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Magnetic>

                {/* Pagination dots */}
                <div className="flex items-center gap-2 mt-8">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > currentIndex ? 1 : -1);
                        setCurrentIndex(i);
                      }}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? 'w-6 h-2 bg-[#4F46E5]'
                          : 'w-2 h-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                      }`}
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Preview Column */}
              <motion.div
                style={{ y: mockupY }}
                className="lg:col-span-7 relative"
              >
                <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] shadow-[0_40px_80px_-30px_rgba(15,23,42,0.2)]">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-5 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                    <div className="w-3 h-3 rounded-full bg-[#FCA5A5]" />
                    <div className="w-3 h-3 rounded-full bg-[#FDE68A]" />
                    <div className="w-3 h-3 rounded-full bg-[#A7F3D0]" />
                    <div className="ml-4 flex-1 bg-[#E2E8F0] rounded-full px-4 py-1 text-xs font-medium text-[#94A3B8]">
                      theomedia.co.uk
                    </div>
                  </div>
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full object-cover object-top max-h-[420px]"
                  />
                  {/* Accent overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${activeProject.accentColor}, transparent 70%)` }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
