import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Private Clinic Website Design That Helps Patients Feel Informed | TheoMedia',
  description: 'How to design a modern website for a private clinic, dental practice or specialist healthcare business that builds trust through clarity. A TheoMedia concept project.',
  openGraph: {
    title: 'Private Clinic Website Design That Helps Patients Feel Informed | TheoMedia',
    description: 'How to design a modern website for a private clinic, dental practice or specialist healthcare business that builds trust through clarity.',
    url: 'https://www.theomedia.co.uk/case-studies/private-healthcare-website-design',
  }
};

export default function HealthcareCaseStudy() {
  const demoUrl = "https://theo-clinic-demo.vercel.app";

  return (
    <main className="bg-bone min-h-screen text-near-black selection:bg-near-black selection:text-bone">
      {/* ── A. HERO ── */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <FadeIn className="max-w-4xl">
          <SectionLabel>CASE STUDY / CONCEPT PROJECT</SectionLabel>
          <div className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-stone mb-6 mt-4">
            Private Clinic, Dental & Healthcare Website Design
          </div>
          
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-8 text-near-black">
            Private Clinic Website Design That Helps Patients Feel Informed Before They Book
          </h1>
          
          <div className="font-sans text-[17px] md:text-[20px] leading-relaxed text-stone max-w-2xl space-y-6 mb-12">
            <p>People visit healthcare websites differently from most other business websites.</p>
            <ul className="space-y-2 font-medium text-near-black pl-4 border-l-2 border-near-black/20">
              <li>They may be worried.</li>
              <li>They may be comparing treatments.</li>
              <li>They may not understand the terminology.</li>
              <li>They may be unsure whether a clinic is right for them.</li>
              <li>They may simply want to know who they will speak to and what happens next.</li>
            </ul>
            <p>That means a clinic website has an important job.</p>
            <p>It needs to feel professional without feeling cold. It needs to explain services clearly without overwhelming people. And it needs to make the next step easy.</p>
            <p>That is the thinking behind <strong>Elowen Clinic</strong>.</p>
            <p>Elowen Clinic is a working concept website created by TheoMedia to show how we would approach a modern website for a private clinic, dental practice, specialist healthcare business or medical aesthetics provider.</p>
            <p>It is not a real clinic and it is not a commissioned client project.</p>
            <p>There are no invented doctors, fake qualifications, made-up reviews or imaginary treatment results.</p>
            <p>The purpose of the project is to demonstrate how a healthcare website can build trust through clarity.</p>
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
              href="/contact?project=theo-clinic"
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
            <ProjectPreview url={demoUrl} title="Elowen Clinic Demo" />
          </div>
        </FadeIn>
      </section>

      {/* ── B. PROJECT INFORMATION STRIP ── */}
      <section className="border-y border-near-black/10 py-10 mb-20 md:mb-32 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <FadeIn className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Project</div>
              <div className="text-[14px] font-medium text-near-black">Elowen Clinic</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Industry</div>
              <div className="text-[14px] font-medium text-near-black">Healthcare</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Type</div>
              <div className="text-[14px] font-medium text-near-black">Concept / Demonstration</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Market</div>
              <div className="text-[14px] font-medium text-near-black">UK · Ireland · Europe</div>
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
                <a href="#more-than-design" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Healthcare Needs More Than Design</a>
                <a href="#clear-treatments" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Clear Treatment Pages Matter</a>
                <a href="#practitioners" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Introduce the Practitioners</a>
                <a href="#qualifications" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Qualifications Must Be Real</a>
                <a href="#first-appointment" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">The First Appointment</a>
                <a href="#booking" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Booking Should Be Straightforward</a>
                <a href="#instant-booking" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Not Every Clinic Needs Instant Booking</a>
                <a href="#pricing" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Pricing Can Reduce Uncertainty</a>
                <a href="#faqs" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Frequently Asked Questions</a>
                <a href="#language" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Language Should Feel Calm</a>
                <a href="#fear-marketing" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Avoid Fear-Based Marketing</a>
                <a href="#images" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Before-and-After Images Need Care</a>
                <a href="#reviews" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Reviews Can Build Confidence</a>
                <a href="#privacy" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Privacy Matters</a>
                <a href="#accessibility" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Accessibility Matters Too</a>
                <a href="#mobile" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Mobile Use Is Essential</a>
                <a href="#location" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Location Information Should Be Clear</a>
                <a href="#search-visibility" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Search Visibility Starts With Services</a>
                <a href="#content-care" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Healthcare Content Needs Extra Care</a>
                <a href="#focused-on" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What We Focused on</a>
                <a href="#what-we-would-add" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What We Would Add</a>
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
              <a href="#more-than-design" className="text-[13px] font-sans text-stone hover:text-near-black">Healthcare Needs More Than Design</a>
              <a href="#clear-treatments" className="text-[13px] font-sans text-stone hover:text-near-black">Clear Treatment Pages Matter</a>
              <a href="#booking" className="text-[13px] font-sans text-stone hover:text-near-black">Booking Should Be Straightforward</a>
              <a href="#main-lesson" className="text-[13px] font-sans text-stone hover:text-near-black">The Main Lesson</a>
            </nav>
          </div>

          {/* Main Content */}
          <article className="lg:w-[75%] max-w-3xl font-sans text-[16px] md:text-[18px] leading-[1.8] text-stone">
            
            <FadeIn id="more-than-design" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Healthcare Websites Need More Than Good Design
              </h2>
              <p className="mb-6">A clinic website can look beautiful and still fail.</p>
              <p className="mb-6">If visitors do not understand the treatments, do not know who the practitioners are or cannot find a simple way to book, the design is not doing enough.</p>
              <p className="mb-8">Patients usually want reassurance. They want answers to questions such as:</p>
              
              <div className="space-y-4 font-bold text-near-black mb-8 pl-6 border-l-4 border-near-black/10">
                <p>Is this treatment suitable for me?</p>
                <p>Who will carry it out?</p>
                <p>What happens during the appointment?</p>
                <p>How much does it cost?</p>
                <p>How do I book?</p>
                <p>Where is the clinic?</p>
                <p>What should I expect afterwards?</p>
              </div>
              
              <p className="mb-6">A good website should help answer those questions in plain language.</p>
              <p>It should not force someone to decode complicated medical wording just to understand what the clinic offers.</p>
            </FadeIn>

            <FadeIn id="clear-treatments" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Clear Treatment Pages Matter
              </h2>
              <p className="mb-6">Healthcare businesses often provide several different treatments.</p>
              <p className="mb-6">If everything is placed on one long page, visitors can quickly become confused.</p>
              <p className="mb-8">A better approach is to give important treatments their own useful pages. For example:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>consultations</li>
                <li>dental treatments</li>
                <li>skin treatments</li>
                <li>physiotherapy</li>
                <li>diagnostics</li>
                <li>cosmetic procedures</li>
                <li>specialist services</li>
                <li>health assessments</li>
              </ul>

              <p className="mb-6">The exact structure should depend on the real clinic.</p>
              <p className="mb-6">Each page should explain the service in a way a normal person can understand. That means answering practical questions rather than filling the page with terminology.</p>
              <p className="mb-8">A useful treatment page might explain:</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>what the treatment is</li>
                <li>who it may be suitable for</li>
                <li>what happens during an appointment</li>
                <li>how long it usually takes</li>
                <li>what preparation may be needed</li>
                <li>common questions</li>
                <li>how to arrange a consultation</li>
              </ul>

              <p>The website should educate without pretending to replace professional medical advice.</p>
            </FadeIn>

            <FadeIn id="practitioners" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Introduce the Practitioners Properly
              </h2>
              <p className="mb-6">For many patients, the person providing the treatment matters as much as the treatment itself.</p>
              <p className="mb-8">That makes practitioner profiles important. A strong profile could include:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>full name</li>
                <li>professional role</li>
                <li>real qualifications</li>
                <li>relevant registrations</li>
                <li>areas of interest</li>
                <li>experience</li>
                <li>photograph</li>
                <li>languages spoken where useful</li>
                <li>consultation information</li>
              </ul>

              <p className="mb-6">The tone should feel human.</p>
              <p className="mb-6">A practitioner should not be reduced to a list of letters after their name. Patients often want to know who they will actually meet.</p>
              <p>That familiarity can make the first appointment feel less intimidating.</p>
            </FadeIn>

            <FadeIn id="qualifications" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Qualifications Must Be Real
              </h2>
              <p className="mb-6">Healthcare websites carry a higher level of responsibility than many ordinary business websites.</p>
              <p className="mb-8">Trust should never be manufactured. Do not invent:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 font-medium text-near-black">
                <li>medical qualifications</li>
                <li>professional memberships</li>
                <li>registrations</li>
                <li>awards</li>
                <li>years of experience</li>
                <li>treatment outcomes</li>
                <li>patient numbers</li>
                <li>guarantees</li>
              </ul>

              <p className="mb-6">If a practitioner is registered with a professional body, show the genuine information. If they have specific qualifications, explain them accurately.</p>
              <p className="mb-6">If something cannot be verified, do not add it simply because it makes the website look more impressive.</p>
              <p>Trust built on real information is stronger anyway.</p>
            </FadeIn>

            <FadeIn id="first-appointment" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                The Website Should Make the First Appointment Feel Less Uncertain
              </h2>
              <p className="mb-6">For someone who has never visited a clinic before, the unknown can create hesitation.</p>
              <p className="mb-8">A simple explanation of the process can help. For example:</p>
              
              <div className="space-y-8 mb-10 pl-6 border-l-2 border-near-black/10">
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-near-black mb-2">1. Choose a Service</h3>
                  <p className="text-[15px]">Read about the treatment or consultation.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-near-black mb-2">2. Book or Make an Enquiry</h3>
                  <p className="text-[15px]">Choose the most suitable way to contact the clinic.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-near-black mb-2">3. Attend the Consultation</h3>
                  <p className="text-[15px]">Meet the appropriate practitioner and discuss your needs.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-near-black mb-2">4. Discuss Next Steps</h3>
                  <p className="text-[15px]">Where appropriate, the clinic explains the options available.</p>
                </div>
              </div>

              <p className="mb-6">The exact wording should match the real clinic.</p>
              <p>The purpose is simply to help a patient know what to expect.</p>
            </FadeIn>

            <FadeIn id="booking" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Booking Should Be Straightforward
              </h2>
              <p className="mb-6">A booking process should not feel like filling out paperwork.</p>
              <p className="mb-8">For a first enquiry, the clinic may only need:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>name</li>
                <li>telephone number</li>
                <li>email</li>
                <li>service of interest</li>
                <li>preferred date</li>
                <li>preferred contact method</li>
              </ul>

              <p className="mb-6">Some healthcare services may need additional information. That should be handled carefully.</p>
              <p className="mb-6">Do not ask for sensitive information unless the clinic genuinely needs it at that stage and has the right systems in place to handle it securely.</p>
              <p>The website should collect only what is necessary.</p>
            </FadeIn>

            <FadeIn id="instant-booking" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Not Every Clinic Needs Instant Online Booking
              </h2>
              <p className="mb-6">Online booking can be extremely useful. But it is not always appropriate.</p>
              <p className="mb-6">Some clinics prefer to speak with patients before confirming an appointment. Some treatments require an initial consultation. Some services need to be matched with a particular practitioner.</p>
              <p className="mb-6">In those cases, a consultation request can work better than instant booking.</p>
              <p className="mb-6">The website should support the real process.</p>
              <p>Not force the business into a booking system that does not suit how it operates.</p>
            </FadeIn>

            <FadeIn id="pricing" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Pricing Can Reduce Uncertainty
              </h2>
              <p className="mb-6">Healthcare pricing can sometimes feel unclear.</p>
              <p className="mb-6">Where the clinic has fixed prices, showing them can help patients decide whether to make contact.</p>
              <p className="mb-8">A real clinic could list:</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>consultation fees</li>
                <li>treatment prices</li>
                <li>starting prices</li>
                <li>package prices</li>
                <li>follow-up costs where applicable</li>
              </ul>

              <p className="mb-6">Where cost varies, explain why. For example:</p>
              <p className="font-medium text-near-black italic mb-6">
                “The final cost depends on the treatment recommended after consultation.”
              </p>
              <p className="mb-6">That is clearer than simply hiding all pricing.</p>
              <p>Transparency can improve trust.</p>
            </FadeIn>

            <FadeIn id="faqs" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Frequently Asked Questions Are Especially Useful
              </h2>
              <p className="mb-6">Healthcare businesses often answer the same questions repeatedly.</p>
              <p className="mb-8">Those questions belong on the website. For example:</p>
              
              <div className="space-y-4 font-bold text-near-black mb-8 pl-4 border-l-2 border-near-black/20">
                <p>Do I need a consultation first?</p>
                <p>How long does an appointment take?</p>
                <p>What should I bring?</p>
                <p>Can I return to work afterwards?</p>
                <p>Is parking available?</p>
                <p>How do I cancel an appointment?</p>
                <p>What payment methods do you accept?</p>
                <p>Can I bring someone with me?</p>
              </div>

              <p className="mb-6">The answers should be specific to the real clinic.</p>
              <p className="mb-6">Do not copy generic medical advice from another website.</p>
              <p>The aim is to explain how the business works.</p>
            </FadeIn>

            <FadeIn id="language" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Language Should Feel Calm and Clear
              </h2>
              <p className="mb-6">Healthcare websites can easily become intimidating.</p>
              <p className="mb-6">Too much technical language can make visitors feel lost. Too much marketing language can make the clinic feel untrustworthy.</p>
              <p className="mb-6">The best tone usually sits somewhere in the middle.</p>
              <p className="font-medium text-near-black text-[20px] mb-8">Professional. Calm. Clear. Respectful.</p>
              <p className="mb-6">For Elowen Clinic, the writing is designed around that balance.</p>
              <p>Instead of trying to make every treatment sound exciting, the website explains what it is and gives the visitor a sensible next step.</p>
            </FadeIn>

            <FadeIn id="fear-marketing" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Avoid Fear-Based Marketing
              </h2>
              <p className="mb-6">A healthcare website should not pressure people into treatment.</p>
              <p className="mb-6">Avoid language that makes normal concerns sound like urgent problems just to encourage bookings.</p>
              
              <ul className="space-y-2 mb-8 font-medium text-near-black pl-4 border-l-2 border-near-black/20">
                <li>Do not exaggerate risks.</li>
                <li>Do not promise perfect outcomes.</li>
                <li>Do not suggest someone “needs” a treatment unless that is a clinical decision made by an appropriate professional.</li>
              </ul>

              <p className="mb-6">The website should inform.</p>
              <p className="mb-6">The practitioner should advise.</p>
              <p>Those are different roles.</p>
            </FadeIn>

            <FadeIn id="images" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Before-and-After Images Need Care
              </h2>
              <p className="mb-6">For some clinics, especially dental, dermatology or medical aesthetics businesses, before-and-after photography can be useful.</p>
              <p className="mb-6">But it needs to be handled responsibly.</p>
              <p className="mb-6">Images should be genuine. Consent should be appropriate. Results should not be presented as guaranteed. Lighting and editing should not artificially exaggerate the outcome.</p>
              <p>If before-and-after imagery is used, it should help visitors understand the treatment rather than create unrealistic expectations.</p>
            </FadeIn>

            <FadeIn id="reviews" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Reviews Can Build Confidence
              </h2>
              <p className="mb-6">Patients often read reviews before choosing a private clinic. Real feedback can be valuable.</p>
              <p className="mb-8">Reviews may mention:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>how the patient was treated</li>
                <li>communication</li>
                <li>cleanliness</li>
                <li>professionalism</li>
                <li>appointment experience</li>
                <li>staff friendliness</li>
                <li>clarity of explanations</li>
              </ul>

              <p className="mb-6">The clinic website can highlight genuine reviews where appropriate.</p>
              <p className="mb-6">But never invent patient testimonials.</p>
              <p>Healthcare trust is too important for fake proof.</p>
            </FadeIn>

            <FadeIn id="privacy" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Privacy Matters
              </h2>
              <p className="mb-6">A clinic website may handle more sensitive information than a normal business website.</p>
              <p className="mb-8">That means privacy deserves proper attention. A real project may need to consider:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>secure forms</li>
                <li>privacy notices</li>
                <li>cookie settings</li>
                <li>data handling</li>
                <li>appointment systems</li>
                <li>third-party booking software</li>
                <li>contact forms</li>
                <li>patient information</li>
              </ul>

              <p className="mb-6">The exact legal and technical requirements depend on the business, location and services provided.</p>
              <p>The website should not casually collect sensitive information without thinking about how it is stored and used.</p>
            </FadeIn>

            <FadeIn id="accessibility" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Accessibility Matters Too
              </h2>
              <p className="mb-6">Healthcare websites are used by a wide range of people. That makes accessibility especially important.</p>
              <p className="mb-8">The site should be:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>easy to read</li>
                <li>easy to navigate</li>
                <li>usable with a keyboard</li>
                <li>clear on mobile</li>
                <li>designed with suitable contrast</li>
                <li>structured with proper headings</li>
                <li>understandable without relying only on colour</li>
              </ul>

              <p className="mb-6">If videos are important, captions can help. If images communicate important information, useful alternative text should be included.</p>
              <p>A healthcare website should not become difficult to use because the design is trying too hard to look fashionable.</p>
            </FadeIn>

            <FadeIn id="mobile" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Mobile Use Is Essential
              </h2>
              <p className="mb-6">Many patients first discover a clinic on their phone. They may be comparing providers. They may be looking for directions. They may need to call. They may want to book quickly.</p>
              <p className="mb-8">The mobile version therefore needs to make these things obvious.</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>Important actions should be easy to tap.</li>
                <li>Treatment pages should remain readable.</li>
                <li>Practitioner profiles should not become awkward.</li>
                <li>Forms should be easy to complete.</li>
                <li>Telephone and location details should be simple to find.</li>
              </ul>

              <p>A good healthcare website has to work when the visitor is in a hurry as well as when they have time to research.</p>
            </FadeIn>

            <FadeIn id="location" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Location Information Should Be Clear
              </h2>
              <p className="mb-6">Patients may already feel uncertain about the appointment. Finding the clinic should not add another problem.</p>
              <p className="mb-8">A useful location section could include:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>address</li>
                <li>map</li>
                <li>parking information</li>
                <li>public transport</li>
                <li>accessibility information</li>
                <li>opening hours</li>
                <li>reception contact details</li>
                <li>instructions for entering</li>
              </ul>

              <p>These small details can improve the entire appointment experience.</p>
            </FadeIn>

            <FadeIn id="search-visibility" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Search Visibility Starts With Clear Services
              </h2>
              <p className="mb-6">People often search by problem or treatment rather than clinic name. They may look for:</p>
              
              <div className="font-bold text-[18px] md:text-[20px] text-near-black space-y-4 mb-10 pl-6 border-l-4 border-near-black/10">
                <p>private clinic in [town]</p>
                <p>dentist near me</p>
                <p>physiotherapist in [town]</p>
                <p>skin clinic near me</p>
                <p>private GP in [area]</p>
                <p>dental implants in [town]</p>
              </div>

              <p className="mb-6">A useful website should make the clinic&apos;s genuine services and location clear.</p>
              <p className="mb-6">That does not mean stuffing treatment names and town names into every paragraph. It means creating proper pages for important services and explaining them well.</p>
              <p>Clear information helps both people and search engines understand the business.</p>
            </FadeIn>

            <FadeIn id="content-care" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Healthcare Content Needs Extra Care
              </h2>
              <p className="mb-6">Some industries can publish advice fairly casually. Healthcare is different.</p>
              <p className="mb-6">A clinic should review important treatment content before publication. Claims should be accurate. Qualifications should be correct. Prices should be current. Regulatory wording should be checked where applicable.</p>
              <p className="mb-6">The website can help present the information clearly.</p>
              <p>But medical accuracy must always come from the appropriate professional.</p>
            </FadeIn>

            {/* Alternating Dark Section */}
            <FadeIn id="focused-on" className="mb-20 bg-near-black text-bone p-8 md:p-12 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] mb-10 leading-tight">
                What We Focused on With Elowen Clinic
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Calm First Impression</h3>
                  <p className="text-bone/70">The site should feel professional and reassuring rather than aggressive.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Clear Treatments</h3>
                  <p className="text-bone/70">Visitors can understand the main services without decoding specialist language.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Practitioner Trust</h3>
                  <p className="text-bone/70">There is space to introduce the real people behind the clinic.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Easy Consultation</h3>
                  <p className="text-bone/70">The next step remains obvious.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Mobile Use</h3>
                  <p className="text-bone/70">Important information and contact options remain practical on a phone.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Useful Questions</h3>
                  <p className="text-bone/70">Frequently asked questions help remove uncertainty.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Honest Presentation</h3>
                  <p className="text-bone/70">No fake doctors, made-up credentials or invented outcomes.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Space for Real Evidence</h3>
                  <p className="text-bone/70">A real clinic can add genuine reviews, professional registrations, qualifications and treatment information.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn id="what-we-would-add" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                What We Would Add for a Real Clinic
              </h2>
              <p className="mb-10">Elowen Clinic is a concept project. A real healthcare website would be built around the services, practitioners and systems of the actual clinic. Depending on the business, we could add:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <h4 className="font-bold text-near-black mb-2">Individual Treatment Pages</h4>
                  <p className="text-[15px]">Give important services enough space to be explained properly.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Practitioner Profiles</h4>
                  <p className="text-[15px]">Introduce genuine doctors, dentists, clinicians or therapists.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Online Booking</h4>
                  <p className="text-[15px]">Connect to an existing booking system where appropriate.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Consultation Requests</h4>
                  <p className="text-[15px]">Useful where an appointment needs to be reviewed before confirmation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Pricing</h4>
                  <p className="text-[15px]">Show consultation and treatment fees where practical.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Patient FAQs</h4>
                  <p className="text-[15px]">Answer the questions reception receives repeatedly.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Location and Parking</h4>
                  <p className="text-[15px]">Make arriving at the clinic easier.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Genuine Reviews</h4>
                  <p className="text-[15px]">Show real patient feedback where appropriate.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Forms</h4>
                  <p className="text-[15px]">Create simple enquiry forms while avoiding unnecessary collection of sensitive information.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Multiple Locations</h4>
                  <p className="text-[15px]">Give each clinic location the information it needs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Resources</h4>
                  <p className="text-[15px]">Create useful patient information where the clinic can maintain and professionally review it.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Insurance Information</h4>
                  <p className="text-[15px]">Where relevant, explain insurers accepted or how payment works.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Language Information</h4>
                  <p className="text-[15px]">Show languages spoken by practitioners where useful to patients.</p>
                </div>
              </div>

              <p className="mt-10 pt-8 border-t border-near-black/10">The final structure should follow how the clinic actually works.</p>
            </FadeIn>

            {/* ── G. FAQ ── */}
            <FadeIn id="questions" className="mb-24 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-10 leading-tight">
                Common Questions
              </h2>
              
              <div className="mb-12">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does a Private Clinic Need Separate Pages for Every Treatment?</h3>
                <p className="mb-4">Not every single treatment. But important services usually deserve their own pages.</p>
                <p className="mb-4">A separate page makes sense when there is enough useful information to explain. For example, if a dental clinic provides dental implants, Invisalign, teeth whitening, and emergency dentistry, those services may deserve individual pages because patients have very different questions about each one.</p>
                <p className="mb-4">Creating separate pages simply to have more URLs is not useful.</p>
                <p>Each page should have a real purpose.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Should Clinics Show Their Prices?</h3>
                <p className="mb-4">Where practical, clear pricing can be helpful. It reduces uncertainty and may save staff from answering the same question repeatedly.</p>
                <p className="mb-4">However, some treatments depend on an assessment first. In those cases, the website can explain the consultation cost, starting price, what affects the final price, and when a full quote is provided.</p>
                <p className="mb-4">Patients do not necessarily expect every medical service to have one fixed online price. They do appreciate understanding the process.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">What Makes Patients Trust a Clinic Website?</h3>
                <p className="mb-4">There is no single design trick. Trust usually comes from a collection of small things.</p>
                <p className="mb-4">Real practitioners. Real qualifications. Clear treatments. Accurate contact information. Professional photography. Useful explanations. Genuine reviews. Transparent pricing where possible. A website that works properly.</p>
                <p>None of these things is dramatic. Together, they make the clinic feel credible.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does a Clinic Need a Blog?</h3>
                <p className="mb-4">Not necessarily. A healthcare business should not publish articles simply because someone said regular blogging helps SEO.</p>
                <p className="mb-4">Medical content needs to be accurate and maintained. If the clinic has qualified professionals who can review useful articles, a resources section can be valuable. Topics might answer real patient questions.</p>
                <p>But ten well-maintained treatment pages are more useful than fifty weak articles published only to target search terms. Quality matters much more.</p>
              </div>

              <div className="pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Can a Better Clinic Website Bring More Enquiries?</h3>
                <p className="mb-4">It can help remove the reasons people do not enquire.</p>
                <p className="mb-4">If visitors cannot understand the treatments, they hesitate. If they cannot see who works at the clinic, they may hesitate. If pricing feels completely hidden, they may hesitate. If the website looks abandoned, they may question the business. If booking is difficult, they may leave.</p>
                <p className="mb-4">A good website reduces those problems. It does not replace good clinical care.</p>
                <p>It simply makes it easier for the right patient to take the first step.</p>
              </div>
            </FadeIn>

            <FadeIn id="main-lesson" className="mb-16 scroll-mt-32">
              <h2 className="font-display text-[40px] md:text-[56px] text-near-black mb-10 leading-[1.1]">
                Healthcare websites need clarity more than cleverness.
              </h2>
              <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">The Main Lesson From Elowen Clinic</h3>
              <p className="mb-4">Explain what you do. Introduce the people providing the care. Answer the questions patients are likely to have. Be accurate. Do not exaggerate. Make booking or contacting the clinic straightforward.</p>
              <p className="mb-4">And remember that the person visiting the website may already feel uncertain.</p>
              <p className="font-medium text-near-black">The design should reduce that uncertainty, not add to it. That is the foundation of Elowen Clinic.</p>
            </FadeIn>

          </article>
        </div>
      </section>

      {/* ── H. END OF CASE STUDY ── */}
      <section className="bg-charcoal text-bone pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-[32px] md:text-[48px] mb-6">
              Explore the Working Clinic Demo
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-bone/70 max-w-2xl mx-auto mb-12">
              Elowen Clinic is a concept project created by TheoMedia to demonstrate how we would approach website design for a private clinic, dental practice or healthcare business. It is a working demonstration rather than a real clinic.
            </p>
            
            <div className="w-full max-w-5xl mx-auto aspect-[16/10] bg-near-black relative overflow-hidden shadow-2xl mb-12 border border-bone/10">
              <ProjectPreview url={demoUrl} title="Elowen Clinic Demo" />
            </div>

            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans font-medium tracking-[0.15em] uppercase text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors inline-block mb-32"
            >
              VIEW THEO CLINIC LIVE ↗
            </Link>

            <div className="max-w-2xl mx-auto border-t border-bone/10 pt-20 mb-20">
              <h2 className="font-display text-[32px] md:text-[48px] mb-6">
                Thinking About Replacing Your Clinic Website?
              </h2>
              <div className="font-sans text-[16px] md:text-[18px] text-bone/70 space-y-4 mb-10 text-left">
                <p>You do not need to start with a technical specification. Start with the patient journey. Tell us:</p>
                <p>What services matter most? What do patients ask before booking? Do consultations need to happen first? How are appointments currently managed? Which practitioners need profiles? What information does reception repeat every day? What is confusing about the current website? What would make the website more useful for patients and staff?</p>
                <p>Those answers give us the right place to begin.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <Link 
                  href="/contact?project=theo-clinic"
                  className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
                >
                  START A PROJECT →
                </Link>
                <a 
                  href="https://wa.me/353852258004?text=Hi%20TheoMedia,%20I%20have%20a%20similar%20business%20to%20the%20Theo%20Clinic%20concept%20and%20would%20like%20to%20discuss%20a%20website%20project." 
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
                href="/case-studies/ecommerce-website-design"
                className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-bone/50 hover:text-bone transition-colors group inline-flex flex-col items-center gap-2"
              >
                <span>Next Case Study</span>
                <span className="text-[16px] text-bone border-b border-transparent group-hover:border-bone/30 pb-1">
                  Ecommerce →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
