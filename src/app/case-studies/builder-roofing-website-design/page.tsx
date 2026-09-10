import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Builder & Roofing Website Design That Builds Trust | TheoMedia',
  description: 'How to design a builder, roofing, or independent trades website that builds confidence before the first call.',
  openGraph: {
    title: 'Builder & Roofing Website Design That Builds Trust | TheoMedia',
    description: 'How to design a builder, roofing, or independent trades website that builds confidence before the first call.',
    url: 'https://www.theomedia.co.uk/case-studies/builder-roofing-website-design',
  }
};

export default function BuilderCaseStudy() {
  const demoUrl = "https://theo-build.vercel.app";

  return (
    <main className="bg-bone min-h-screen text-near-black selection:bg-near-black selection:text-bone">
      {/* ── A. HERO ── */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <FadeIn className="max-w-4xl">
          <SectionLabel>CASE STUDY</SectionLabel>
          <div className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-stone mb-6 mt-4">
            Builder, Roofing & Trades Website Design
          </div>
          
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-8 text-near-black">
            Builder & Roofing Website Design That Builds Trust Before the First Call
          </h1>
          
          <div className="font-sans text-[17px] md:text-[20px] leading-relaxed text-stone max-w-2xl space-y-6 mb-12">
            <p>Choosing a builder is different from choosing most other local services.</p>
            <p>The customer may be planning an extension, replacing a roof, renovating a home or spending a large amount of money on work that could take weeks or months.</p>
            <p>They are not only asking: <strong>“Can this company do the job?”</strong></p>
            <p>They are also asking:</p>
            <ul className="space-y-2 font-medium text-near-black pl-4 border-l-2 border-near-black/20">
              <li>“Can I trust them?”</li>
              <li>“Will they turn up?”</li>
              <li>“Have they done work like mine before?”</li>
              <li>“What happens if something goes wrong?”</li>
              <li>“How do I know they are genuine?”</li>
            </ul>
            <p>That is the thinking behind <strong>Alder & Rowe</strong>.</p>
            <p>Alder & Rowe was created by TheoMedia as a modern website for a builder, roofer or independent trades business.</p>
            
            <p>Instead, the website is built around the questions real homeowners usually have before asking for a quote.</p>
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
              href="/contact?project=theo-build"
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
            <ProjectPreview url={demoUrl} title="Alder & Rowe Demo" />
          </div>
        </FadeIn>
      </section>

      {/* ── B. PROJECT INFORMATION STRIP ── */}
      <section className="border-y border-near-black/10 py-10 mb-20 md:mb-32 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <FadeIn className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Project</div>
              <div className="text-[14px] font-medium text-near-black">Alder & Rowe</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Industry</div>
              <div className="text-[14px] font-medium text-near-black">Trades & Construction</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Type</div>
              <div className="text-[14px] font-medium text-near-black">Live Project Details</div>
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
                <a href="#build-confidence" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">The Website Has to Build Confidence</a>
                <a href="#show-the-work" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Show the Work</a>
                <a href="#before-and-after" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Before and After Can Be Powerful</a>
                <a href="#make-services-easy" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Make Services Easy to Understand</a>
                <a href="#do-not-try" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Do Not Try to Sound Bigger</a>
                <a href="#explain-the-process" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Explain the Process</a>
                <a href="#quote-requests" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Quote Requests Should Be Simple</a>
                <a href="#trust-signals" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Trust Signals Matter</a>
                <a href="#reviews-need-context" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Reviews Need Context</a>
                <a href="#answer-questions" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Answer the Questions People Ask</a>
                <a href="#local-search" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Local Search Is Important</a>
                <a href="#project-case-studies" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Project Case Studies</a>
                <a href="#mobile-matters" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Mobile Matters More Than It Looks</a>
                <a href="#focused-on" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What We Focused on With Alder & Rowe</a>
                <a href="#what-we-would-add" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What We Would Add for a Real Builder</a>
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
              <a href="#build-confidence" className="text-[13px] font-sans text-stone hover:text-near-black">The Website Has to Build Confidence</a>
              <a href="#show-the-work" className="text-[13px] font-sans text-stone hover:text-near-black">Show the Work</a>
              <a href="#main-lesson" className="text-[13px] font-sans text-stone hover:text-near-black">The Main Lesson</a>
            </nav>
          </div>

          {/* Main Content */}
          <article className="lg:w-[75%] max-w-3xl font-sans text-[16px] md:text-[18px] leading-[1.8] text-stone">
            
            <FadeIn id="build-confidence" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                The Website Has to Build Confidence
              </h2>
              <p className="mb-6">A builder may already have years of experience.</p>
              <p className="mb-6">They may have completed excellent work.</p>
              <p className="mb-6">They may have dozens of happy customers.</p>
              <p className="mb-8">But if none of that appears clearly online, a new customer does not know it.</p>
              
              <p className="mb-6">That is where the website becomes important.</p>
              <p className="mb-6">A potential customer may find the company through Google, Facebook, a recommendation or a van they saw locally.</p>
              <p className="mb-6">Before calling, they may visit the website to check whether the business feels professional.</p>
              <p className="mb-8">They are looking for reassurance. The website should help them understand:</p>

              <ul className="space-y-3 mb-10 list-disc list-inside">
                <li>what kind of work the company does</li>
                <li>what areas it covers</li>
                <li>what previous projects look like</li>
                <li>who they are dealing with</li>
                <li>how to request a quote</li>
                <li>whether the company looks established</li>
                <li>whether the business feels suitable for their project</li>
              </ul>
              <p className="mb-6">A builder website does not need complicated features to do this well.</p>
              <p>It needs clear information and strong proof.</p>
            </FadeIn>

            <FadeIn id="show-the-work" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Show the Work
              </h2>
              <p className="mb-6">For builders, roofers and trades businesses, completed work is one of the strongest things a website can show.</p>
              <p className="mb-6">A paragraph saying: <strong>“We provide high-quality workmanship.”</strong> is fine.</p>
              <p className="mb-8">But photographs of real completed projects are far more convincing. That is why Alder & Rowe gives strong visual importance to project work.</p>
              
              <p className="mb-6">A real builder website could include projects such as:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 list-disc list-inside">
                <li>house extensions</li>
                <li>loft conversions</li>
                <li>roof replacements</li>
                <li>flat roofing</li>
                <li>renovations</li>
                <li>kitchen extensions</li>
                <li>bathroom renovations</li>
                <li>structural work</li>
                <li>garage conversions</li>
                <li>commercial work</li>
                <li>exterior improvements</li>
              </ul>
              
              <p className="mb-6">The goal is not to fill a gallery with hundreds of photographs.</p>
              <p className="text-[20px] font-medium text-near-black italic border-l-2 border-near-black/20 pl-6 my-8">
                The goal is to show enough real work that someone can think: “They have done something similar to what I need.”
              </p>
            </FadeIn>

            <FadeIn id="before-and-after" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Before and After Can Be Powerful
              </h2>
              <p className="mb-6">For many trades businesses, before-and-after photographs are especially useful.</p>
              <p className="mb-6">A finished project looks good.</p>
              <p className="mb-8">But seeing what existed before helps the customer understand the amount of work involved.</p>
              
              <div className="bg-ivory border border-near-black/5 p-8 md:p-10 my-10 space-y-4 font-medium text-near-black text-[18px]">
                <p>A damaged roof becomes a completed roof.</p>
                <p>An unused garage becomes a living space.</p>
                <p>An old kitchen becomes a new extension.</p>
                <p>A worn exterior becomes a finished property.</p>
              </div>

              <p className="mb-6">This is much more useful than filling the website with stock photographs of houses the company never worked on.</p>
              <p>Whenever possible, real photographs should come first.</p>
            </FadeIn>

            <FadeIn id="make-services-easy" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Make Services Easy to Understand
              </h2>
              <p className="mb-6">Some building websites list everything in one large block. Extensions, roofing, brickwork, kitchens, bathrooms, plastering, groundwork, repairs and twenty other services all appear together.</p>
              <p className="mb-6">That may be accurate, but it can make the business feel unclear.</p>
              <p className="mb-10">The website should help visitors understand the main areas of work quickly. For example:</p>
              
              <div className="space-y-12 mb-12">
                <div>
                  <h3 className="font-display text-[24px] text-near-black mb-4">Extensions</h3>
                  <p className="mb-4">Explain the kinds of extensions the company usually takes on. Single-storey. Double-storey. Rear extensions. Side returns. Kitchen extensions. Then show relevant work.</p>
                </div>
                <div>
                  <h3 className="font-display text-[24px] text-near-black mb-4">Roofing</h3>
                  <p className="mb-4">Explain whether the company handles:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>roof repairs</li>
                    <li>complete roof replacements</li>
                    <li>flat roofing</li>
                    <li>pitched roofing</li>
                    <li>leadwork</li>
                    <li>guttering</li>
                    <li>chimney work</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-[24px] text-near-black mb-4">Renovations</h3>
                  <p>Explain whether the company takes on complete renovations or selected parts of a property.</p>
                </div>
                <div>
                  <h3 className="font-display text-[24px] text-near-black mb-4">General Building</h3>
                  <p>Describe the other work the team genuinely handles.</p>
                </div>
              </div>

              <p>This structure is better for customers and gives search engines clearer information about what the business actually offers.</p>
            </FadeIn>

            <FadeIn id="do-not-try" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Do Not Try to Sound Bigger Than the Business Is
              </h2>
              <p className="mb-6">Independent builders sometimes feel pressure to make their website sound like a national construction company.</p>
              <p className="mb-6">That is usually unnecessary.</p>
              <p className="mb-6">A local building company can be small and still look highly professional.</p>
              <p className="mb-6">In fact, many homeowners prefer knowing who they will actually be dealing with.</p>
              <p className="mb-8">If the owner is involved personally, say so. If the same team has worked together for years, say so. If the company only takes on a limited number of projects at a time, that can even be a strength.</p>
              
              <div className="text-center py-10 border-y border-near-black/10 my-10">
                <span className="font-display text-[28px] md:text-[36px] text-near-black">
                  The website should reflect the real business. Not an imaginary corporate version of it.
                </span>
              </div>

              <p>Alder & Rowe is designed to feel established and professional without making the company look unnecessarily large or impersonal.</p>
            </FadeIn>

            <FadeIn id="explain-the-process" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Explain the Process
              </h2>
              <p className="mb-6">Building work can feel uncertain for customers. They may never have hired a builder before.</p>
              <p className="mb-10">A simple explanation of the process can remove a lot of that uncertainty. For example:</p>
              
              <div className="space-y-8 mb-12 pl-6 border-l-2 border-near-black/10">
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-near-black mb-2">1. Tell Us About the Project</h3>
                  <p className="text-[15px]">The customer describes what they are planning.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-near-black mb-2">2. Arrange a Visit</h3>
                  <p className="text-[15px]">The builder visits the property where needed.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-near-black mb-2">3. Discuss the Work</h3>
                  <p className="text-[15px]">The scope, options and practical requirements are discussed.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-near-black mb-2">4. Receive a Quote</h3>
                  <p className="text-[15px]">The customer receives the agreed information about the work and price.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-near-black mb-2">5. Schedule the Project</h3>
                  <p className="text-[15px]">Dates and next steps are agreed.</p>
                </div>
              </div>

              <p className="mb-6">The exact process will vary between businesses.</p>
              <p className="mb-6">The point is simply to tell customers what happens after they make contact.</p>
              <p>That small piece of information can make the first enquiry feel much easier.</p>
            </FadeIn>

            <FadeIn id="quote-requests" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Quote Requests Should Be Simple
              </h2>
              <p className="mb-6">A quote form does not need twenty fields. If it feels like paperwork, people may leave.</p>
              <p className="mb-6">For most building enquiries, the first step can be simple. Ask for:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>name</li>
                <li>telephone number</li>
                <li>email</li>
                <li>postcode or area</li>
                <li>type of work</li>
                <li>short description</li>
                <li>preferred contact method</li>
              </ul>

              <p className="mb-6">Where useful, allow the customer to upload photographs. Photos can help a builder understand the enquiry before calling back.</p>
              <p className="mb-6">But even then, the website should make it clear that a final quote may require a site visit.</p>
              <p className="mb-6">The website should make starting the conversation easier.</p>
              <p>It should not try to replace the builder&apos;s judgement.</p>
            </FadeIn>

            <FadeIn id="trust-signals" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Trust Signals Matter More for High-Value Work
              </h2>
              <p className="mb-6">When someone is considering spending a significant amount of money, they will usually look more carefully at the business.</p>
              <p className="mb-8">This means trust deserves proper space on the website. A real builder website could include:</p>
              
              <ul className="space-y-3 mb-10 list-disc list-inside">
                <li>genuine customer reviews</li>
                <li>completed projects</li>
                <li>photographs of the team</li>
                <li>years of experience</li>
                <li>relevant qualifications</li>
                <li>trade memberships</li>
                <li>insurance details</li>
                <li>guarantees where they genuinely apply</li>
                <li>company registration information</li>
                <li>clear contact details</li>
                <li>areas covered</li>
              </ul>

              <p className="mb-6">Do not add badges that the company has not earned. Do not imply memberships that do not exist.</p>
              <p>A smaller amount of real proof is better than a large amount of invented credibility.</p>
            </FadeIn>

            <FadeIn id="reviews-need-context" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Reviews Need Context
              </h2>
              <p className="mb-6">A row of five-star icons can look nice.</p>
              <p className="mb-8">But real reviews are more useful when they say something meaningful. For example:</p>
              
              <div className="bg-ivory border-l-2 border-near-black p-8 md:p-10 my-10 space-y-4">
                <p>Did the team arrive when expected?</p>
                <p>Was communication good?</p>
                <p>Was the house kept reasonably tidy?</p>
                <p>Was the job completed as agreed?</p>
                <p>How did the company handle changes?</p>
                <p>Would the customer use them again?</p>
              </div>

              <p className="mb-6">Those are the things future customers actually care about.</p>
              <p className="mb-6">If a real business has strong Google reviews, the website can help make them more visible.</p>
              <p>But the reviews should always be genuine.</p>
            </FadeIn>

            <FadeIn id="answer-questions" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                The Website Should Answer the Questions People Ask on the Phone
              </h2>
              <p className="mb-6">A very easy way to create useful website content is to listen to customers.</p>
              <p className="mb-6">What do people ask again and again? Those questions belong on the website.</p>
              <p className="mb-8">For a builder or roofer, common questions may include:</p>
              
              <div className="font-bold text-[18px] text-near-black space-y-4 mb-10 pl-6 border-l-4 border-near-black/10">
                <p>Do you provide free quotes?</p>
                <p>What areas do you cover?</p>
                <p>Do you handle planning permission?</p>
                <p>Can you work from architectural drawings?</p>
                <p>Do you provide materials?</p>
                <p>Can you repair a roof or does it need replacing?</p>
                <p>How long will the work take?</p>
                <p>Do I need to leave the property while work is happening?</p>
                <p>Are you insured?</p>
                <p>Do you take on small jobs?</p>
              </div>

              <p className="mb-6">Not every question can have one universal answer. That is fine.</p>
              <p className="mb-6">The website can explain how the particular business handles it.</p>
              <p>Useful content begins with real customer questions.</p>
            </FadeIn>

            <FadeIn id="local-search" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Local Search Is Important for Builders Too
              </h2>
              <p className="mb-6">Most independent builders do not need enquiries from the entire country. They need the right enquiries within a sensible working area.</p>
              <p className="mb-8">That makes location important. People might search for:</p>
              
              <div className="font-bold text-[20px] md:text-[24px] text-near-black space-y-4 mb-10 pl-6 border-l-4 border-near-black/10">
                <p>builder in [town]</p>
                <p>roofing company in [town]</p>
                <p>house extension builder near me</p>
                <p>roof repair near me</p>
                <p>loft conversion company in [area]</p>
                <p>home renovation company in [town]</p>
              </div>

              <p className="mb-6">A good website should make the company&apos;s real service area clear. That does not mean creating hundreds of nearly identical pages for every town nearby.</p>
              <p className="mb-6">A better approach is to explain the actual areas the business covers and build useful pages around genuine services and completed projects.</p>
              <p className="mb-6">If the company has completed a strong project in a particular area, that project can naturally mention the location.</p>
              <p>That is useful to customers and honest.</p>
            </FadeIn>

            <FadeIn id="project-case-studies" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Project Case Studies Can Help Search and Trust
              </h2>
              <p className="mb-6">For a real building company, the strongest website content may not be traditional blog posts.</p>
              <p className="mb-8">Completed projects can become excellent case studies. For example:</p>
              
              <div className="bg-ivory border border-near-black/5 p-8 md:p-10 my-10">
                <h4 className="font-display text-[24px] text-near-black mb-4">Rear Extension in [Town]</h4>
                <p className="mb-4">The page could explain:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>what the customer wanted</li>
                  <li>what the property was like before</li>
                  <li>what work was carried out</li>
                  <li>any interesting challenges</li>
                  <li>materials used</li>
                  <li>photographs during the work</li>
                  <li>photographs after completion</li>
                </ul>
              </div>

              <p className="mb-6">This gives future customers something genuinely useful to look at.</p>
              <p className="mb-6">It also creates original content that another builder cannot simply copy.</p>
              <p>That is much stronger than publishing generic articles written only to target keywords.</p>
            </FadeIn>

            <FadeIn id="mobile-matters" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Mobile Matters More Than It Looks
              </h2>
              <p className="mb-6">A homeowner may first discover the builder while sitting at home on a phone.</p>
              <p className="mb-6">They may also return to the site later to show it to a partner.</p>
              <p className="mb-8">The mobile version therefore needs the same care as the desktop version. Important actions should remain obvious:</p>
              
              <ul className="space-y-2 mb-8 font-medium text-near-black">
                <li>Call.</li>
                <li>Request a quote.</li>
                <li>View projects.</li>
                <li>See services.</li>
                <li>Find the service area.</li>
              </ul>

              <p className="mb-6">The photographs should display properly. Text should be comfortable to read. Forms should be easy to complete.</p>
              <p className="mb-6">A beautiful desktop site that becomes frustrating on a phone is not a finished website.</p>
              <p>Alder & Rowe was designed around that principle.</p>
            </FadeIn>

            {/* Alternating Dark Section */}
            <FadeIn id="focused-on" className="mb-20 bg-near-black text-bone p-8 md:p-12 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] mb-10 leading-tight">
                What We Focused on With Alder & Rowe
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Real Work First</h3>
                  <p className="text-bone/70">The design gives projects and visual proof strong importance.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Clear Services</h3>
                  <p className="text-bone/70">Visitors should be able to understand the main types of work without reading every page.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Easy Quote Requests</h3>
                  <p className="text-bone/70">Starting an enquiry should feel straightforward.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Trust</h3>
                  <p className="text-bone/70">There is space for genuine reviews, credentials, team information and business details.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Mobile Use</h3>
                  <p className="text-bone/70">The site remains practical on a phone.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">A Local Business Feel</h3>
                  <p className="text-bone/70">The design feels professional without making an independent building company look like a huge corporate contractor.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn id="what-we-would-add" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                What We Would Add for a Real Builder or Roofing Company
              </h2>
              <p className="mb-10">Alder & Rowe was built as a modern digital presence. Depending on the business, we could add:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <h4 className="font-bold text-near-black mb-2">Individual Service Pages</h4>
                  <p className="text-[15px]">Separate useful pages for extensions, roofing, renovations, loft conversions or other major services.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Completed Project Case Studies</h4>
                  <p className="text-[15px]">Turn strong projects into detailed pages with photographs and explanations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Before-and-After Galleries</h4>
                  <p className="text-[15px]">Allow visitors to understand the transformation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Quote Request Forms</h4>
                  <p className="text-[15px]">Collect enough information to help the business qualify the enquiry.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Photo Uploads</h4>
                  <p className="text-[15px]">Let customers send photographs with an initial enquiry.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Areas Covered</h4>
                  <p className="text-[15px]">Clearly explain where the team works.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Team Information</h4>
                  <p className="text-[15px]">Introduce the people customers may meet.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Genuine Reviews</h4>
                  <p className="text-[15px]">Show real customer experiences.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Guarantees and Credentials</h4>
                  <p className="text-[15px]">Explain genuine insurance, accreditations or warranties where applicable.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">WhatsApp Contact</h4>
                  <p className="text-[15px]">Useful for customers who want to send a quick description or photograph of the work.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Commercial Enquiries</h4>
                  <p className="text-[15px]">If the company handles both residential and commercial work, give each audience a clear route.</p>
                </div>
              </div>

              <p className="mt-10 pt-8 border-t border-near-black/10">The final structure would depend on the type of work the business actually wants more of.</p>
              <p className="mt-6">That last part matters. A website should not generate enquiries for work the company does not want.</p>
            </FadeIn>

            {/* ── G. FAQ ── */}
            <FadeIn id="questions" className="mb-24 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-10 leading-tight">
                Common Questions
              </h2>
              
              <div className="mb-12">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Should Builders Show Prices Online?</h3>
                <p className="mb-4">There is no single answer. For some small jobs, starting prices can be useful. For large projects, an accurate price usually depends on much more.</p>
                <p className="mb-4">Property size. Access. Materials. Structural requirements. Drawings. Existing conditions. Location. Finishes.</p>
                <p className="mb-4">For those projects, pretending that one online price applies to everybody may create more confusion. Instead, the website can explain how pricing works. For example:</p>
                <p className="font-medium text-near-black italic mt-6 bg-ivory p-6 border-l-2 border-near-black/30">
                  “Every extension is different. Send us your plans or tell us what you are considering and we can arrange a conversation about the project.”
                </p>
                <p className="mt-6">That gives the customer a next step without making promises before the job is understood.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does a Builder Need a Portfolio?</h3>
                <p className="mb-4">In most cases, yes. If you have good work, show it. People often choose builders visually before they ever speak to them.</p>
                <p className="mb-4">A project portfolio can demonstrate:</p>
                <ul className="space-y-1 list-disc list-inside mb-4">
                  <li>the scale of work</li>
                  <li>quality of finish</li>
                  <li>type of property</li>
                  <li>style of project</li>
                  <li>range of services</li>
                  <li>consistency</li>
                </ul>
                <p>Even a relatively small number of excellent projects can be enough. Quality matters more than uploading every photograph stored on someone&apos;s phone.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">What If the Business Does Several Different Trades?</h3>
                <p className="mb-4">That is common. A company may offer roofing, building, plastering, extensions and renovations.</p>
                <p className="mb-4">The website can still make that clear without becoming confusing. Usually, it helps to decide which services matter most commercially. If extensions and roofing are the work the company most wants, they should have more prominence.</p>
                <p className="mb-4">Smaller supporting services can still appear without competing for the same attention.</p>
                <p>The website should reflect business priorities, not simply produce an alphabetical list of everything the team can technically do.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Can a Better Website Get Better Building Enquiries?</h3>
                <p className="mb-4">It can help. There is an important difference between <strong>more enquiries</strong> and <strong>better enquiries</strong>.</p>
                <p className="mb-4">A good builder does not necessarily want hundreds of people asking: “How much?” with no other information.</p>
                <p className="mb-4">The website can help customers understand the kind of projects the company takes on before they make contact. That can improve the quality of enquiries.</p>
                <p className="mb-4">For example, project pages can show the scale and style of work. Service pages can explain what the company does. Location information can reduce enquiries from areas too far away. The contact form can ask for basic project information.</p>
                <p>This can save time for both the customer and the builder.</p>
              </div>

              <div className="pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does a Builder Need SEO?</h3>
                <p className="mb-4">If the business wants to be found by people searching locally, then yes, search visibility matters.</p>
                <p className="mb-4">But SEO does not begin by writing awkward paragraphs full of town names. It begins with a useful website.</p>
                <p className="mb-4">Explain the services properly. Show real projects. Make location clear. Keep contact details accurate. Make the site work well on mobile. Create useful individual pages where there is genuinely enough to say.</p>
                <p className="mb-4">Then continue building the site&apos;s reputation over time. There are no honest guarantees that a new website will immediately rank first.</p>
                <p>But there is a huge difference between giving Google useful information about a business and giving it almost nothing.</p>
              </div>
            </FadeIn>

            <FadeIn id="main-lesson" className="mb-16 scroll-mt-32">
              <h2 className="font-display text-[40px] md:text-[56px] text-near-black mb-10 leading-[1.1]">
                For a builder, the website does not need to do all the selling. The work should do much of it.
              </h2>
              <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">The Main Lesson From Alder & Rowe</h3>
              <p className="mb-4">Show people what you build. Explain what you do. Answer the questions that make customers hesitate. Make your business feel real.</p>
              <p className="font-medium text-near-black">Then make it easy to start a conversation. That is the foundation of Alder & Rowe.</p>
            </FadeIn>

          </article>
        </div>
      </section>

      {/* ── H. END OF CASE STUDY ── */}
      <section className="bg-charcoal text-bone pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-[32px] md:text-[48px] mb-6">
              Explore the Working Builder & Roofing Demo
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-bone/70 max-w-2xl mx-auto mb-12">
              Alder & Rowe was created by TheoMedia as a website for a builder, roofer or independent trades company. 
            </p>
            
            <div className="w-full max-w-5xl mx-auto aspect-[16/10] bg-near-black relative overflow-hidden shadow-2xl mb-12 border border-bone/10">
              <ProjectPreview url={demoUrl} title="Alder & Rowe Demo" />
            </div>

            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans font-medium tracking-[0.15em] uppercase text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors inline-block mb-32"
            >
              VIEW THEO BUILD LIVE ↗
            </Link>

            <div className="max-w-2xl mx-auto border-t border-bone/10 pt-20 mb-20">
              <h2 className="font-display text-[32px] md:text-[48px] mb-6">
                Thinking About Replacing Your Building Company Website?
              </h2>
              <div className="font-sans text-[16px] md:text-[18px] text-bone/70 space-y-4 mb-10 text-left">
                <p>You do not need to prepare a complicated website brief. Start with the business. Tell us:</p>
                <p>What kind of work do you want more of? Which areas do you cover? Which projects are you proudest of? What questions do customers repeatedly ask? What is wrong with your current website? What do you wish customers understood before they contacted you?</p>
                <p>Those answers give us a much better starting point than choosing a template.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <Link 
                  href="/contact?project=theo-build"
                  className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
                >
                  START A PROJECT →
                </Link>
                <a 
                  href="https://wa.me/353852258004?text=Hi%20TheoMedia,%20I%20have%20a%20similar%20business%20to%20the%20Theo%20Build%20and%20would%20like%20to%20discuss%20a%20website%20project." 
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
                href="/case-studies/boutique-hotel-website-design"
                className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-bone/50 hover:text-bone transition-colors group inline-flex flex-col items-center gap-2"
              >
                <span>Next Case Study</span>
                <span className="text-[16px] text-bone border-b border-transparent group-hover:border-bone/30 pb-1">
                  Boutique Hotel →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
