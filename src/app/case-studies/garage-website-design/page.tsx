import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Garage Website Design That Makes Booking Simple | TheoMedia Case Study',
  description: 'How to design an independent garage, MOT centre, or vehicle workshop website that builds trust and makes booking easy.',
  openGraph: {
    title: 'Garage Website Design That Makes Booking Simple | TheoMedia',
    description: 'How to design an independent garage, MOT centre, or vehicle workshop website that builds trust and makes booking easy.',
    url: 'https://www.theomedia.co.uk/case-studies/garage-website-design',
  }
};

export default function GarageCaseStudy() {
  const demoUrl = "https://hartwell-motorworks.theomedia.co.uk";

  return (
    <main className="bg-bone min-h-screen text-near-black selection:bg-near-black selection:text-bone">
      {/* ── A. HERO ── */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <FadeIn className="max-w-4xl">
          <SectionLabel>CASE STUDY</SectionLabel>
          <div className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-stone mb-6 mt-4">
            Garage & MOT Website Design
          </div>
          
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-8 text-near-black">
            Garage Website Design That Makes Booking Simple
          </h1>
          
          <div className="font-sans text-[17px] md:text-[20px] leading-relaxed text-stone max-w-2xl space-y-6 mb-12">
            <p>Most people do not visit a garage website because they want to read about garages.</p>
            <p>Usually, something has happened.</p>
            <p>The MOT is due. A warning light has appeared. The brakes do not feel right. The car needs a service. Or they simply need someone reliable to look at a problem.</p>
            <p>That means a garage website has a fairly simple job.</p>
            <p>Help the customer understand whether you can help them, give them a reason to trust you, and make it easy to book or call.</p>
            <p>That is the thinking behind <strong>Hartwell Motorworks</strong>.</p>
            <p>Hartwell Motorworks was created by TheoMedia as a modern website for an independent garage, MOT centre or vehicle workshop.</p>
            <p>It is not a commissioned client project and we do not use made-up results or statistics. Instead, we built it around the real problems garage customers face when they are looking for help online.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-sans font-semibold tracking-[0.15em] uppercase text-near-black border-b border-near-black/30 pb-1 hover:border-near-black transition-colors inline-flex items-center"
            >
              VIEW LIVE EXPERIENCE ↗
            </Link>
            <Link 
              href="/contact?project=theo-garage"
              className="text-[12px] font-sans font-medium tracking-[0.15em] uppercase text-stone border-b border-stone/30 pb-1 hover:text-near-black hover:border-near-black transition-colors inline-flex items-center"
            >
              START A PROJECT →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Demo Visual Hero */}
      <section className="px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto mb-20 md:mb-32">
        <FadeIn delay={0.2}>
          <div className="w-full aspect-[16/10] bg-charcoal relative overflow-hidden shadow-2xl border border-near-black/5">
            <ProjectPreview url={demoUrl} title="Hartwell Motorworks Demo" />
          </div>
        </FadeIn>
      </section>

      {/* ── B. PROJECT INFORMATION STRIP ── */}
      <section className="border-y border-near-black/10 py-10 mb-20 md:mb-32 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <FadeIn className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Project</div>
              <div className="text-[14px] font-medium text-near-black">Hartwell Motorworks</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Industry</div>
              <div className="text-[14px] font-medium text-near-black">Independent Garage / MOT</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Type</div>
              <div className="text-[14px] font-medium text-near-black">Live Project Details</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Market</div>
              <div className="text-[14px] font-medium text-near-black">UK · Ireland</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Status</div>
              <div className="text-[14px] font-medium text-near-black">Live Experience</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── C. ARTICLE BODY & D. TOC ── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pb-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Table of Contents (Sticky on Desktop) */}
          <aside className="lg:w-[25%] hidden lg:block">
            <div className="sticky top-32">
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-near-black mb-6 border-b border-near-black/10 pb-4">
                On this page
              </h4>
              <nav className="flex flex-col gap-4">
                <a href="#the-problem" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">The Problem With Many Garage Websites</a>
                <a href="#customer-needs" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Start With What the Customer Needs</a>
                <a href="#make-booking-obvious" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Make Booking Obvious</a>
                <a href="#trust-matters" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Trust Matters More Than Fancy Design</a>
                <a href="#service-pages" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Service Pages Should Actually Help People</a>
                <a href="#mobile-first" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Designed for Mobile First</a>
                <a href="#local-search" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Local Search Matters</a>
                <a href="#photos" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Photos Can Make a Huge Difference</a>
                <a href="#pricing" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Pricing: Show Enough to Remove Uncertainty</a>
                <a href="#focused-on" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What We Focused on With Hartwell Motorworks</a>
                <a href="#what-we-would-add" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What We Would Add for a Real Garage</a>
                <a href="#what-should-include" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What Should a Good Garage Website Include?</a>
                <a href="#questions" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Common Questions</a>
                <a href="#main-lesson" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">The Main Lesson</a>
              </nav>
            </div>
          </aside>

          {/* Mobile TOC */}
          <div className="lg:hidden w-full border border-near-black/10 p-6 bg-ivory mb-8">
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-near-black mb-4">
              On this page
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#the-problem" className="text-[13px] font-sans text-stone hover:text-near-black">The Problem With Many Garage Websites</a>
              <a href="#customer-needs" className="text-[13px] font-sans text-stone hover:text-near-black">Start With What the Customer Needs</a>
              <a href="#main-lesson" className="text-[13px] font-sans text-stone hover:text-near-black">The Main Lesson</a>
            </nav>
          </div>

          {/* Main Content */}
          <article className="lg:w-[75%] max-w-3xl font-sans text-[16px] md:text-[18px] leading-[1.8] text-stone">
            
            <FadeIn id="the-problem" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                The Problem With Many Garage Websites
              </h2>
              <p className="mb-6">Garage websites often fall into one of two extremes.</p>
              <p className="mb-6">Some are very old and contain little more than an address, telephone number and a long list of services.</p>
              <p className="mb-6">Others try so hard to look modern that they make simple information difficult to find.</p>
              <p className="mb-8">Neither is particularly helpful when someone is standing beside their car searching on a phone.</p>
              
              <div className="bg-ivory border-l-2 border-near-black p-8 md:p-10 my-10">
                <p className="text-[18px] md:text-[22px] font-medium text-near-black mb-8 leading-snug">
                  A customer usually wants answers to a few basic questions:
                </p>
                <ul className="space-y-4 font-medium text-near-black">
                  <li><strong>Do you provide the service I need?</strong></li>
                  <li><strong>Can I trust you with my car?</strong></li>
                  <li><strong>How much might it cost?</strong></li>
                  <li><strong>When can you fit me in?</strong></li>
                  <li><strong>Where are you?</strong></li>
                  <li><strong>Can I call or book now?</strong></li>
                </ul>
              </div>
              <p>If a website makes those answers difficult to find, the customer can simply return to Google and try another garage.</p>
              <p className="mt-6">So with Hartwell Motorworks, we started with those questions rather than starting with design.</p>
            </FadeIn>

            <FadeIn id="customer-needs" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Start With What the Customer Needs
              </h2>
              <p className="mb-6">A garage owner knows the difference between diagnostics, servicing, repairs, MOT work and mechanical faults.</p>
              <p className="mb-6">A customer may not.</p>
              <p className="mb-6">They may only know that a warning light has appeared or that the car is making a strange noise.</p>
              <p className="mb-6">The website therefore needs to speak in normal language.</p>
              <p className="mb-8">Instead of expecting someone to understand workshop terminology, the main services are made easy to find and easy to understand. For example:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 list-disc list-inside">
                <li>Servicing</li>
                <li>MOT preparation</li>
                <li>Diagnostics</li>
                <li>Brake repairs</li>
                <li>Tyres</li>
                <li>General repairs</li>
                <li>Air conditioning</li>
                <li>Vehicle inspections</li>
                <li>Fleet maintenance</li>
              </ul>
              
              <p className="mb-6">A real garage website could go further by giving the most important services their own pages.</p>
              <p>That gives customers more useful information and also makes it easier for search engines to understand exactly what the garage offers.</p>
            </FadeIn>

            {/* ── F. LARGE MID-PAGE STATEMENT ── */}
            <FadeIn id="make-booking-obvious" className="mb-24 mt-12 scroll-mt-32">
              <h2 className="font-display text-[40px] md:text-[56px] text-near-black mb-10 leading-[1.1]">
                One of the biggest mistakes on a service-business website is hiding the main action.
              </h2>
              
              <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Make Booking Obvious</h3>
              <p className="mb-6">If you want customers to book, the booking option should not be buried inside a menu.</p>
              <p className="mb-6">For Hartwell Motorworks, booking is treated as one of the main parts of the website.</p>
              <p className="mb-6">A visitor should be able to arrive, understand the service and quickly move towards making an appointment.</p>
              <p className="mb-6">On mobile, calling should be just as easy.</p>
              <p className="mb-6">Some customers prefer forms. Others want to speak to someone. Others may want to send a WhatsApp message.</p>
              <p>A good garage website should not force everyone through the same route. It should make the common options easy to reach.</p>
            </FadeIn>

            <FadeIn id="trust-matters" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Trust Matters More Than Fancy Design
              </h2>
              <p className="mb-6">A customer is handing over something valuable.</p>
              <p className="mb-6">Their car.</p>
              <p className="mb-6">For many people, it is also the vehicle they rely on to get to work, take children to school or travel every day.</p>
              <p className="mb-8">So trust matters. A garage website should help answer the question:</p>
              
              <div className="text-center py-10 border-y border-near-black/10 my-10">
                <span className="font-display text-[28px] md:text-[36px] text-near-black">
                  “Why should I take my car here?”
                </span>
              </div>

              <p className="mb-6">That does not require exaggerated claims. Real evidence is much stronger.</p>
              <p className="mb-8">A real garage website could include:</p>
              
              <ul className="space-y-3 mb-10 list-disc list-inside">
                <li>genuine customer reviews</li>
                <li>photographs of the workshop</li>
                <li>photographs of technicians</li>
                <li>years of experience</li>
                <li>recognised qualifications</li>
                <li>manufacturer or industry accreditations</li>
                <li>warranties that genuinely apply</li>
                <li>clear opening hours</li>
                <li>actual contact details</li>
                <li>examples of work</li>
                <li>information about the types of vehicles serviced</li>
              </ul>

              <p className="mb-6">The important word is <strong>real</strong>.</p>
              <p className="mb-6">A website should show what makes the garage trustworthy rather than simply saying: “We are the best garage in the area.”</p>
              <p>Anyone can write that. Evidence is more convincing.</p>
            </FadeIn>

            <FadeIn id="service-pages" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Service Pages Should Actually Help People
              </h2>
              <p className="mb-6">A service page should not exist simply because someone said the website needs more pages.</p>
              <p className="mb-10">It should answer questions.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 bg-ivory p-8 border border-near-black/5">
                <div>
                  <h4 className="font-bold text-near-black mb-4">Take car diagnostics as an example. A useful page might explain:</h4>
                  <ul className="space-y-2 text-[15px] list-disc list-inside">
                    <li>what diagnostic testing is</li>
                    <li>common warning signs</li>
                    <li>what dashboard lights may mean</li>
                    <li>what happens during an inspection</li>
                    <li>whether an appointment is needed</li>
                    <li>how to book</li>
                    <li>what areas the garage serves</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-4">A servicing page might explain:</h4>
                  <ul className="space-y-2 text-[15px] list-disc list-inside">
                    <li>interim servicing</li>
                    <li>full servicing</li>
                    <li>what is normally checked</li>
                    <li>how often a car should be serviced</li>
                    <li>whether service history is updated</li>
                    <li>what customers should bring</li>
                  </ul>
                </div>
              </div>

              <p className="mb-6">This kind of information does two jobs. It helps the customer. And it gives Google useful information about what the business actually does.</p>
              <p>That is a much better approach to SEO than repeating phrases such as “best garage near me” twenty times across a page.</p>
            </FadeIn>

            <FadeIn id="mobile-first" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Designed for Mobile First
              </h2>
              <p className="mb-6">For a garage, mobile design is particularly important.</p>
              <p className="mb-6">Imagine the customer. They have just noticed a warning light. They are sitting in the car. They search Google. They open your website.</p>
              <p className="mb-6">Everything now needs to work on a small screen.</p>
              <p className="mb-6">The telephone number should be easy to tap. The booking button should be easy to find. The text should be readable. Services should not require endless scrolling through unnecessary information. Buttons should be large enough to use comfortably. Important information should not disappear behind complicated animations.</p>
              <p className="mb-6">Hartwell Motorworks was designed with that situation in mind.</p>
              <p>A website can still look premium without making the customer work for the information.</p>
            </FadeIn>

            <FadeIn id="local-search" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Local Search Matters
              </h2>
              <p className="mb-6">Most independent garages depend heavily on customers from the surrounding area. That makes local search particularly important.</p>
              <p className="mb-8">Someone may search for:</p>
              
              <div className="font-bold text-[20px] md:text-[24px] text-near-black space-y-4 mb-10 pl-6 border-l-4 border-near-black/10">
                <p>garage near me</p>
                <p>MOT garage in [town]</p>
                <p>car servicing in [town]</p>
                <p>brake repair near me</p>
                <p>car diagnostics in [town]</p>
                <p>mechanic near me</p>
              </div>

              <p className="mb-6">A website alone cannot guarantee that a garage appears first for these searches. No honest web designer should promise that.</p>
              <p className="mb-6">But the website can give the business a much stronger foundation.</p>
              <p className="mb-6">For a real garage, we would normally want to make sure the website clearly explains:</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>where the garage is located</li>
                <li>which nearby areas it serves</li>
                <li>what services it provides</li>
                <li>how customers can contact it</li>
                <li>when it is open</li>
              </ul>

              <p>The website should also work together with the garage&apos;s Google Business Profile rather than treating the two as separate things.</p>
            </FadeIn>

            <FadeIn id="photos" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Photos Can Make a Huge Difference
              </h2>
              <p className="mb-6">Garage websites often rely on generic photographs of expensive cars.</p>
              <p className="mb-6">That can look polished, but it does not necessarily build trust.</p>
              <p className="mb-6">For an independent garage, genuine photographs can be much more valuable.</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8 list-disc list-inside">
                <li>Show the actual workshop.</li>
                <li>Show the entrance.</li>
                <li>Show the team.</li>
                <li>Show technicians working.</li>
                <li>Show equipment.</li>
                <li>Show the reception area.</li>
                <li>Show customers what they will see.</li>
              </ul>

              <p className="mb-6">Professional photography helps, but authenticity matters more than making everything look like a car advertisement.</p>
              <p>A customer wants to know they are dealing with a real business.</p>
            </FadeIn>

            <FadeIn id="pricing" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Pricing: Show Enough to Remove Uncertainty
              </h2>
              <p className="mb-6">Garages do not always have fixed prices for every job.</p>
              <p className="mb-6">That is understandable. A mechanical problem may need to be inspected before an accurate price can be given.</p>
              <p className="mb-8">But that does not mean the website has to say nothing about cost. Where appropriate, a garage could show:</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>MOT prices</li>
                <li>service packages</li>
                <li>diagnostic fees</li>
                <li>air-conditioning recharge prices</li>
                <li>tyre fitting charges</li>
                <li>starting prices</li>
                <li>inspection fees</li>
              </ul>

              <p className="mb-6">For work that cannot be priced immediately, explain what happens next. For example:</p>
              <p className="text-[20px] font-medium text-near-black italic mb-6">
                “Tell us what is happening with the vehicle and we will arrange an inspection before recommending any work.”
              </p>
              <p>That is much more reassuring than leaving the customer completely unsure.</p>
            </FadeIn>

            {/* Alternating Dark Section */}
            <FadeIn id="focused-on" className="mb-20 bg-near-black text-bone p-8 md:p-12 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] mb-10 leading-tight">
                What We Focused on With Hartwell Motorworks
              </h2>
              <p className="mb-10 text-bone/80">For this project, we concentrated on a few things that matter most.</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Clear services</h3>
                  <p className="text-bone/70">Visitors can quickly understand what the garage does without reading huge blocks of text.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Easy contact</h3>
                  <p className="text-bone/70">Calling, enquiring or booking should never feel hidden.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Strong mobile experience</h3>
                  <p className="text-bone/70">The website is designed around the reality that many garage searches happen on phones.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">A professional but believable look</h3>
                  <p className="text-bone/70">A local garage does not need to look like a global automotive company. It needs to look reliable, organised and good at what it does.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Space for trust</h3>
                  <p className="text-bone/70">The structure allows a real business to add reviews, team information, workshop photography and genuine credentials.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Useful content</h3>
                  <p className="text-bone/70">Important services can be explained properly rather than being reduced to a list of keywords.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn id="what-we-would-add" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                What We Would Add for a Real Garage
              </h2>
              <p className="mb-10">Hartwell Motorworks is a demonstration, so a real client project would go considerably further. Depending on the business, we could add:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <h4 className="font-bold text-near-black mb-2">Online booking</h4>
                  <p className="text-[15px]">Allow customers to request a date, service and vehicle details directly from the website.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">WhatsApp enquiries</h4>
                  <p className="text-[15px]">Useful for customers who want to describe a problem quickly or send a photograph.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Individual service pages</h4>
                  <p className="text-[15px]">Create useful pages for servicing, MOT work, diagnostics, brakes, tyres, air conditioning and other important services.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Genuine customer reviews</h4>
                  <p className="text-[15px]">Show real feedback from existing customers.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Google Maps</h4>
                  <p className="text-[15px]">Make it easy to find the workshop.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Vehicle information forms</h4>
                  <p className="text-[15px]">Let customers provide registration number, make, model and the problem they are experiencing.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Service reminders</h4>
                  <p className="text-[15px]">Give returning customers a simple route back when servicing or MOT time approaches.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Fleet enquiries</h4>
                  <p className="text-[15px]">Create a separate section for local companies with multiple vehicles.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Before-and-after work</h4>
                  <p className="text-[15px]">Where relevant, show repairs or restoration work.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Frequently asked questions</h4>
                  <p className="text-[15px]">Answer the questions staff repeatedly receive over the phone.</p>
                </div>
              </div>
              <p className="mt-10 pt-8 border-t border-near-black/10">The exact website should depend on how the garage actually operates. There is little value in adding a feature simply because another garage has it.</p>
            </FadeIn>

            <FadeIn id="what-should-include" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-10 leading-tight">
                What Should a Good Garage Website Include?
              </h2>
              <p className="mb-8">At a minimum, we believe an independent garage website should make the following easy to find:</p>
              
              <dl className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-near-black/5 pb-6">
                  <dt className="font-bold text-near-black sm:w-[30%]">Services</dt>
                  <dd className="sm:w-[70%]">What can you actually do?</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-near-black/5 pb-6">
                  <dt className="font-bold text-near-black sm:w-[30%]">Location</dt>
                  <dd className="sm:w-[70%]">Where is the workshop?</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-near-black/5 pb-6">
                  <dt className="font-bold text-near-black sm:w-[30%]">Opening hours</dt>
                  <dd className="sm:w-[70%]">When can customers reach you?</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-near-black/5 pb-6">
                  <dt className="font-bold text-near-black sm:w-[30%]">Telephone number</dt>
                  <dd className="sm:w-[70%]">Can someone call immediately?</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-near-black/5 pb-6">
                  <dt className="font-bold text-near-black sm:w-[30%]">Booking or enquiry</dt>
                  <dd className="sm:w-[70%]">What should they do next?</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-near-black/5 pb-6">
                  <dt className="font-bold text-near-black sm:w-[30%]">Reviews</dt>
                  <dd className="sm:w-[70%]">Why should they choose you?</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-near-black/5 pb-6">
                  <dt className="font-bold text-near-black sm:w-[30%]">About the garage</dt>
                  <dd className="sm:w-[70%]">Who are they dealing with?</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <dt className="font-bold text-near-black sm:w-[30%]">Useful information</dt>
                  <dd className="sm:w-[70%]">Can they understand what they may need?</dd>
                </div>
              </dl>
              <p className="mt-8">Anything beyond that should support the business rather than simply make the website bigger.</p>
            </FadeIn>

            {/* ── G. FAQ ── */}
            <FadeIn id="questions" className="mb-24 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-10 leading-tight">
                Common Questions
              </h2>
              
              <div className="mb-12">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does Every Garage Need Online Booking?</h3>
                <p className="mb-4">Not necessarily.</p>
                <p className="mb-4">Some garages prefer to speak with every customer before agreeing to a booking. That can make sense, particularly when the work needs to be discussed first. In that case, the website could use a simple booking request instead.</p>
                <p className="mb-4">The customer provides their name, contact details, vehicle, registration, service required, preferred date, and a short description of the problem. The garage can then confirm the appointment.</p>
                <p className="font-medium text-near-black italic mt-6">The important thing is not whether the booking happens automatically. The important thing is making the first step easy.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Can a Better Website Help a Garage Get More Customers?</h3>
                <p className="mb-4">A website cannot make a poor business successful on its own. But it can stop a good business from losing customers unnecessarily.</p>
                <p className="mb-4">Imagine two garages offering similar services. One website is difficult to use, has no clear prices, no obvious booking option and looks abandoned. The other explains its services clearly, shows the workshop, has genuine reviews and lets the customer contact the garage immediately.</p>
                <p className="mb-4">Which one feels safer to someone who has never visited either business before?</p>
                <p className="font-medium text-near-black mt-6">That is where website design matters. It reduces uncertainty.</p>
              </div>

              <div className="pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does a Garage Need SEO?</h3>
                <p className="mb-4">If customers use Google to find garages in the area, then search visibility matters.</p>
                <p className="mb-4">But SEO should not mean filling pages with strange sentences written for algorithms. The starting point is much simpler.</p>
                <p className="mb-4">Create genuinely useful pages about the services the garage offers. Make the location clear. Keep business details accurate. Make the site fast and mobile friendly. Connect it properly with the business&apos;s wider online presence.</p>
                <p className="mt-6">Then build from there. Good local SEO takes time. It should be treated as an ongoing part of marketing rather than a magic switch added at the end of a website project.</p>
              </div>
            </FadeIn>

            <FadeIn id="main-lesson" className="mb-16 scroll-mt-32">
              <h2 className="font-display text-[40px] md:text-[56px] text-near-black mb-10 leading-[1.1]">
                Design around the reason the customer came to the website.
              </h2>
              <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">The Main Lesson From Hartwell Motorworks</h3>
              <p className="mb-4">The biggest lesson from this project is simple.</p>
              <p className="mb-4">For a garage, that person usually has a job that needs doing. Do not make them fight through the website to get there.</p>
              <p className="mb-4">Tell them what you do. Give them reasons to trust you. Answer the obvious questions.</p>
              <p className="font-medium text-near-black">Then make calling or booking easy. Everything else is secondary.</p>
            </FadeIn>

          </article>
        </div>
      </section>

      {/* ── H. END OF CASE STUDY ── */}
      <section className="bg-charcoal text-bone pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-[32px] md:text-[48px] mb-6">
              Explore the Working Garage Demo
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-bone/70 max-w-2xl mx-auto mb-12">
              Hartwell Motorworks was created by TheoMedia as website design for an independent garage, MOT centre or automotive workshop. 
            </p>
            
            <div className="w-full max-w-5xl mx-auto aspect-[16/10] bg-near-black relative overflow-hidden shadow-2xl mb-12 border border-bone/10">
              <ProjectPreview url={demoUrl} title="Hartwell Motorworks Demo" />
            </div>

            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans font-medium tracking-[0.15em] uppercase text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors inline-block mb-32"
            >
              VIEW THEO GARAGE LIVE ↗
            </Link>

            <div className="max-w-2xl mx-auto border-t border-bone/10 pt-20 mb-20">
              <h2 className="font-display text-[32px] md:text-[48px] mb-6">
                Thinking About Replacing Your Garage Website?
              </h2>
              <div className="font-sans text-[16px] md:text-[18px] text-bone/70 space-y-4 mb-10 text-left">
                <p>You do not need to know what platform your current website uses.</p>
                <p>You do not need to prepare a technical brief.</p>
                <p>And you do not need to know anything about web design.</p>
                <p>Tell us about the garage. Tell us what services you offer. Tell us what customers normally call about. Tell us what you dislike about your current website.</p>
                <p>We can work from there.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <Link 
                  href="/contact?project=theo-garage"
                  className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
                >
                  START A PROJECT →
                </Link>
                <a 
                  href="https://wa.me/353852258004?text=Hi%20TheoMedia,%20I%20have%20a%20similar%20business%20to%20the%20Theo%20Garage%20and%20would%20like%20to%20discuss%20a%20website%20project." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-sans font-medium tracking-[0.1em] text-bone border border-bone/20 hover:border-bone/60 hover:bg-bone/5 transition-all duration-300 uppercase rounded-sm px-8 py-4"
                >
                  WHATSAPP ↗
                </a>
              </div>
            </div>

            <div className="pt-10">
              <Link 
                href="/case-studies/builder-roofing-website-design"
                className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-bone/50 hover:text-bone transition-colors group inline-flex flex-col items-center gap-2"
              >
                <span>Next Case Study</span>
                <span className="text-[16px] text-bone border-b border-transparent group-hover:border-bone/30 pb-1">
                  Builder & Roofing →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
