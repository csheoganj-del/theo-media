import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Promise from './components/Promise';
import Process from './components/Process';
import Showcase from './components/Showcase';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const marqueeItems = [
  'Websites',
  'Web Applications',
  'Android Apps',
  'POS Systems',
  'CRM Portals',
  'Business Automation',
  'E-Commerce',
  'Dashboards',
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#0F172A] overflow-x-hidden font-sans relative">

      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Capability marquee — a breath between hero and content */}
      <div className="relative py-8 border-y border-[#E2E8F0]/80 bg-white/60 backdrop-blur-sm overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee gap-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 px-8 text-sm font-bold uppercase tracking-[0.2em] text-[#94A3B8] whitespace-nowrap"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]/40" />
            </span>
          ))}
        </div>
      </div>

      {/* Main content sections */}
      <main className="relative z-20">
        <Services />
        <Promise />
        <Process />
        <Showcase />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
