import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Restaurant Website Design That Helps Turn Browsing Into Bookings | TheoMedia',
  description: 'How to design a restaurant or gastropub website that makes choosing, booking and visiting easier.',
  openGraph: {
    title: 'Restaurant Website Design That Helps Turn Browsing Into Bookings | TheoMedia',
    description: 'How to design a restaurant or gastropub website that makes choosing, booking and visiting easier.',
    url: 'https://www.theomedia.co.uk/case-studies/restaurant-gastropub-website-design',
  }
};

export default function RestaurantCaseStudy() {
  const demoUrl = "https://cinder-field.theomedia.co.uk";

  return (
    <main className="bg-bone min-h-screen text-near-black selection:bg-near-black selection:text-bone">
      {/* ── A. HERO ── */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <FadeIn className="max-w-4xl">
          <SectionLabel>CASE STUDY</SectionLabel>
          <div className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-stone mb-6 mt-4">
            Restaurant, Gastropub & Dining Website Design
          </div>
          
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-8 text-near-black">
            Restaurant Website Design That Helps Turn Browsing Into Bookings
          </h1>
          
          <div className="font-sans text-[17px] md:text-[20px] leading-relaxed text-stone max-w-2xl space-y-6 mb-12">
            <p>People often decide where to eat very quickly.</p>
            <p>They may be hungry now. They may be planning dinner for tonight. They may be looking for somewhere for Sunday lunch. They may be comparing three or four places while sitting with friends.</p>
            <p>That means a restaurant website has to answer important questions fast.</p>
            
            <ul className="space-y-2 font-medium text-near-black pl-4 border-l-2 border-near-black/20">
              <li>What kind of food do you serve?</li>
              <li>What does the place feel like?</li>
              <li>Can I see the menu?</li>
              <li>Is there a table available?</li>
              <li>Where are you?</li>
              <li>Can I book now?</li>
            </ul>

            <p>That is the thinking behind <strong>Cinder & Field</strong>.</p>
            <p>Cinder & Field was designed and engineered by TheoMedia as a modern digital platform for a restaurant, gastropub, and independent dining room, engineered to make menu discovery, atmosphere presentation, and table bookings effortless.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-sans font-semibold tracking-[0.15em] uppercase text-near-black border-b border-near-black/30 pb-1 hover:border-near-black transition-colors inline-flex items-center"
            >
              VIEW LIVE WEBSITE ↗
            </Link>
            <Link 
              href="/contact?project=theo-table"
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
            <ProjectPreview url={demoUrl} title="Cinder & Field" />
          </div>
        </FadeIn>
      </section>

      {/* ── B. PROJECT INFORMATION STRIP ── */}
      <section className="border-y border-near-black/10 py-10 mb-20 md:mb-32 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <FadeIn className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Project</div>
              <div className="text-[14px] font-medium text-near-black">Cinder & Field</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Industry</div>
              <div className="text-[14px] font-medium text-near-black">Hospitality</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Type</div>
              <div className="text-[14px] font-medium text-near-black">Website Project</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Market</div>
              <div className="text-[14px] font-medium text-near-black">UK · Ireland</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Status</div>
              <div className="text-[14px] font-medium text-near-black">Live Website</div>
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
                <a href="#help-someone-decide" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Help Someone Decide</a>
                <a href="#menu-easy" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">The Menu Should Be Easy to Find</a>
                <a href="#mobile-menus" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Mobile Menus Matter</a>
                <a href="#photography" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Photography Should Make Food Real</a>
                <a href="#atmosphere" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Atmosphere Matters</a>
                <a href="#booking-obvious" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Booking Should Be Obvious</a>
                <a href="#not-every-restaurant" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Not Every Restaurant Needs Online Booking</a>
                <a href="#sunday-lunch" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Sunday Lunch Deserves Space</a>
                <a href="#private-events" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Private Events Are an Opportunity</a>
                <a href="#location" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Location Information</a>
                <a href="#opening-hours" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Opening Hours Need to Be Accurate</a>
                <a href="#dietary" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Dietary Information Builds Confidence</a>
                <a href="#reviews" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Reviews Help Make the Decision</a>
                <a href="#social-media" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Social Media & The Website</a>
                <a href="#search-visibility" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Search Visibility Is Local</a>
                <a href="#menus-seo" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Menus Can Help SEO Too</a>
                <a href="#seasonal" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Keep Seasonal Content Fresh</a>
                <a href="#speed" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">A Restaurant Website Should Not Feel Slow</a>
                <a href="#focused-on" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What We Focused on</a>
                <a href="#what-we-would-add" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Restaurant Systems &amp; Integrations</a>
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
              <a href="#help-someone-decide" className="text-[13px] font-sans text-stone hover:text-near-black">Help Someone Decide</a>
              <a href="#menu-easy" className="text-[13px] font-sans text-stone hover:text-near-black">The Menu Should Be Easy to Find</a>
              <a href="#booking-obvious" className="text-[13px] font-sans text-stone hover:text-near-black">Booking Should Be Obvious</a>
              <a href="#main-lesson" className="text-[13px] font-sans text-stone hover:text-near-black">The Main Lesson</a>
            </nav>
          </div>

          {/* Main Content */}
          <article className="lg:w-[75%] max-w-3xl font-sans text-[16px] md:text-[18px] leading-[1.8] text-stone">
            
            <FadeIn id="help-someone-decide" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                A Restaurant Website Should Help Someone Decide
              </h2>
              <p className="mb-6">Most restaurant visitors are trying to make a decision.</p>
              <p className="mb-6">They are not researching the history of the business for twenty minutes. They want to know whether the place suits the occasion.</p>
              <p className="mb-8">That may be:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>a casual dinner</li>
                <li>a date night</li>
                <li>Sunday lunch</li>
                <li>drinks with friends</li>
                <li>a family meal</li>
                <li>a birthday</li>
                <li>a private event</li>
                <li>a business lunch</li>
              </ul>
              
              <p className="mb-6">The website should help them work that out quickly.</p>
              <p className="mb-6">For Cinder & Field, the experience starts with food, atmosphere and clear booking options.</p>
              <p>The design is important, but the decision-making process comes first.</p>
            </FadeIn>

            <FadeIn id="menu-easy" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                The Menu Should Be Easy to Find
              </h2>
              <p className="mb-6">This sounds obvious. But many restaurant websites still make menus difficult to reach.</p>
              
              <div className="mb-8 pl-4 border-l-2 border-near-black/20 text-stone">
                <p>Sometimes the menu is hidden inside a large navigation menu.</p>
                <p>Sometimes it is only available as a PDF.</p>
                <p>Sometimes the PDF is hard to read on a phone.</p>
                <p>Sometimes the website shows no prices at all.</p>
              </div>
              
              <p className="mb-6">For most restaurants, the menu is one of the most important pages on the site. It deserves to be easy to find.</p>
              <p className="mb-8">A useful menu section should make it simple to understand:</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>what kind of food is served</li>
                <li>main dishes</li>
                <li>vegetarian options</li>
                <li>vegan options</li>
                <li>desserts</li>
                <li>drinks</li>
                <li>children&apos;s options where relevant</li>
                <li>prices</li>
                <li>dietary information</li>
                <li>when the menu is available</li>
              </ul>

              <p className="mb-8">If the restaurant has several menus, separate them clearly. For example:</p>

              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 list-disc list-inside">
                <li>lunch</li>
                <li>dinner</li>
                <li>Sunday menu</li>
                <li>drinks</li>
                <li>children&apos;s menu</li>
                <li>private dining</li>
                <li>festive menu</li>
              </ul>

              <p>Do not make customers guess which one applies.</p>
            </FadeIn>

            <FadeIn id="mobile-menus" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Mobile Menus Matter
              </h2>
              <p className="mb-6">A customer may be standing outside the restaurant. Or sitting in a taxi. Or checking options while walking through town.</p>
              <p className="mb-6">That means menus need to work properly on phones.</p>
              
              <ul className="space-y-2 mb-8 font-medium text-near-black">
                <li>Text should be readable.</li>
                <li>Prices should line up clearly.</li>
                <li>Buttons should be easy to tap.</li>
                <li>If a PDF is used, it should still be usable on mobile.</li>
              </ul>

              <p className="mb-6">In many cases, a proper web-based menu is better because it is faster, easier to update and easier to read.</p>
              <p>Cinder & Field is designed around that kind of mobile behaviour.</p>
            </FadeIn>

            <FadeIn id="photography" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Photography Should Make the Food Feel Real
              </h2>
              <p className="mb-6">Food photography matters enormously.</p>
              <p className="mb-6">A restaurant website does not need hundreds of images. But the ones it does use should feel believable.</p>
              <p className="mb-8 font-medium text-near-black">
                Real dishes. Real interiors. Real tables. Real drinks. Real atmosphere.
              </p>
              <p className="mb-6">If the restaurant is warm and cosy, the photography should show that. If it is bright and modern, that should come through naturally.</p>
              <p className="mb-6">Stock photography may look polished, but it can weaken trust if the food shown is not actually served.</p>
              <p className="mb-6">The website should make someone think:</p>
              <div className="font-bold text-[24px] text-near-black p-6 bg-ivory border-l-4 border-near-black/20 mb-8">
                “I want to eat there.” <br/>
                <span className="text-[18px] text-stone font-normal">Not: “This looks like a template.”</span>
              </div>
            </FadeIn>

            <FadeIn id="atmosphere" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Atmosphere Matters Almost as Much as the Food
              </h2>
              <p className="mb-6">People do not choose restaurants only by menu. They also choose by mood.</p>
              <p className="mb-6">A gastropub feels different from a fine dining restaurant. A neighbourhood bistro feels different from a cocktail bar. A family restaurant feels different from a romantic dining room.</p>
              <p className="mb-6">The website should reflect that. That means the design, photography, wording and layout should feel like the actual place.</p>
              <p className="mb-6">Cinder & Field was designed to feel warm, social and welcoming rather than overly formal.</p>
              <p>A real client project would be shaped around the restaurant&apos;s own character.</p>
            </FadeIn>

            <FadeIn id="booking-obvious" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Booking Should Be Obvious
              </h2>
              <p className="mb-6">If the restaurant takes reservations, the booking option should be one of the easiest things to find.</p>
              <p className="mb-6">Do not hide it at the bottom of the page. Do not make people click through several pages. Do not make someone call unless that is genuinely how the restaurant prefers to manage bookings.</p>
              <p className="mb-8">A good booking journey might include:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>number of guests</li>
                <li>date</li>
                <li>time</li>
                <li>special requests</li>
                <li>dietary requirements where useful</li>
                <li>contact details</li>
              </ul>

              <p className="mb-6">If the restaurant already uses a booking platform, the website should connect to it clearly.</p>
              <p>The transition should not feel confusing. The guest should know exactly what they are doing.</p>
            </FadeIn>

            <FadeIn id="not-every-restaurant" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Not Every Restaurant Needs Online Booking
              </h2>
              <p className="mb-6">Some smaller venues work perfectly well with phone or WhatsApp reservations. That is fine.</p>
              <p className="mb-6">The important thing is clarity.</p>
              <p className="mb-8 pl-4 border-l-2 border-near-black/20">
                If bookings are taken by phone, say so. <br/>
                If walk-ins are welcome, say so. <br/>
                If larger groups need to call, explain that. <br/>
                If the kitchen stops taking orders at a certain time, make it visible.
              </p>
              <p className="mb-6">A website should reflect how the business really works.</p>
              <p>Not force the restaurant into a system that does not suit it.</p>
            </FadeIn>

            <FadeIn id="sunday-lunch" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Sunday Lunch Deserves Its Own Space
              </h2>
              <p className="mb-6">For many pubs and gastropubs, Sunday lunch is not just another service.</p>
              <p className="mb-6">It can be one of the most important trading periods of the week. That means it may deserve its own section.</p>
              <p className="mb-8">A useful Sunday page might include:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>serving times</li>
                <li>sample menu</li>
                <li>roast options</li>
                <li>vegetarian choices</li>
                <li>children&apos;s options</li>
                <li>booking information</li>
                <li>group bookings</li>
                <li>photographs</li>
              </ul>

              <p className="mb-6">This also helps customers who search specifically for Sunday lunch rather than the restaurant name.</p>
              <p>Cinder & Field gives this kind of occasion more importance instead of treating every visit exactly the same.</p>
            </FadeIn>

            <FadeIn id="private-events" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Private Events Can Be a Major Opportunity
              </h2>
              <p className="mb-6">Restaurants often earn valuable revenue from:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>birthdays</li>
                <li>anniversaries</li>
                <li>Christmas parties</li>
                <li>private dining</li>
                <li>business meals</li>
                <li>engagement parties</li>
                <li>family celebrations</li>
                <li>small weddings</li>
                <li>group dinners</li>
              </ul>

              <p className="mb-6">Yet many websites barely mention them.</p>
              <p className="mb-8">If private events matter to the business, the website should explain them properly. A useful events section might include:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>group sizes</li>
                <li>private rooms</li>
                <li>semi-private areas</li>
                <li>menus</li>
                <li>minimum spend</li>
                <li>drinks packages</li>
                <li>photographs</li>
                <li>enquiry form</li>
              </ul>

              <p className="mb-6">This helps customers understand what is possible before contacting the restaurant.</p>
              <p>It can also improve the quality of enquiries.</p>
            </FadeIn>

            <FadeIn id="location" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Location Information Should Be Practical
              </h2>
              <p className="mb-6">Restaurant location pages are often too thin. A map alone is not always enough.</p>
              <p className="mb-8">Customers may want to know:</p>
              
              <div className="space-y-2 font-medium text-near-black mb-8 pl-4 border-l-2 border-near-black/20">
                <p>Is there parking nearby?</p>
                <p>Which station is closest?</p>
                <p>Is the venue easy to find?</p>
                <p>Is there outdoor seating?</p>
                <p>Is it accessible?</p>
                <p>What time does the kitchen close?</p>
              </div>

              <p className="mb-8">A good contact section can answer these questions simply. For a real restaurant, that might include:</p>

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>address</li>
                <li>map</li>
                <li>opening hours</li>
                <li>kitchen hours</li>
                <li>phone number</li>
                <li>email</li>
                <li>parking information</li>
                <li>public transport</li>
                <li>accessibility information</li>
              </ul>

              <p>The goal is to remove uncertainty before the visit.</p>
            </FadeIn>

            <FadeIn id="opening-hours" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Opening Hours Need to Be Accurate
              </h2>
              <p className="mb-6">This is one of the simplest things on the website. It is also one of the easiest things to get wrong.</p>
              <p className="mb-6">Restaurants change hours. Seasonal opening changes. Kitchen times differ from bar times. Bank holidays are different.</p>
              <p className="mb-6">The website should make this information easy to maintain.</p>
              <p className="mb-6">If someone arrives because the website said the restaurant was open when it was not, that damages trust immediately.</p>
              <p>Accurate information matters more than fancy design.</p>
            </FadeIn>

            <FadeIn id="dietary" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Dietary Information Builds Confidence
              </h2>
              <p className="mb-6">Customers increasingly check dietary options before choosing where to eat. That may include:</p>
              <p className="mb-6 font-medium text-near-black">vegetarian, vegan, gluten-free, dairy-free, allergies.</p>
              <p className="mb-6">The website does not need to make promises the kitchen cannot safely guarantee. But it should explain how dietary requirements are handled.</p>
              <p className="mb-6 italic border-l-2 border-near-black/20 pl-4 my-6">
                “Please tell us about allergies or dietary requirements when booking so the team can advise you.”
              </p>
              <p>That is clear and responsible. If menu items are clearly marked, even better.</p>
            </FadeIn>

            <FadeIn id="reviews" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Reviews Help People Make the Final Decision
              </h2>
              <p className="mb-6">Restaurant decisions are heavily influenced by reviews. If the business has strong genuine feedback, the website can help make that more visible.</p>
              <p className="mb-8">Real reviews can reinforce things like:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 list-disc list-inside">
                <li>quality of food</li>
                <li>service</li>
                <li>atmosphere</li>
                <li>value</li>
                <li>Sunday lunch</li>
                <li>cocktails</li>
                <li>family friendliness</li>
                <li>special occasions</li>
              </ul>

              <p className="mb-6">Do not invent testimonials. Do not write fake five-star reviews because the page looks empty.</p>
              <p>A small number of genuine reviews is far stronger than a large number of invented ones.</p>
            </FadeIn>

            <FadeIn id="social-media" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Social Media and the Website Should Work Together
              </h2>
              <p className="mb-6">Restaurants often rely heavily on Instagram and Facebook. That makes sense.</p>
              <p className="mb-6">Food is visual. Events change quickly. Menus change. People share visits.</p>
              <p className="mb-8">But social media should not replace the website. The website should still be the reliable place for:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 list-disc list-inside">
                <li>menus</li>
                <li>bookings</li>
                <li>opening hours</li>
                <li>location</li>
                <li>events</li>
                <li>contact information</li>
                <li>private dining</li>
              </ul>

              <p className="mb-6">Social media can create interest. The website can turn that interest into action.</p>
              <p>The two should support each other.</p>
            </FadeIn>

            <FadeIn id="search-visibility" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Search Visibility for Restaurants Is Very Local
              </h2>
              <p className="mb-6">Restaurants often depend on nearby searches. People may search:</p>
              
              <div className="font-bold text-[18px] md:text-[20px] text-near-black space-y-4 mb-10 pl-6 border-l-4 border-near-black/10">
                <p>restaurant near me</p>
                <p>gastropub in [town]</p>
                <p>Sunday lunch in [town]</p>
                <p>best pub food near me</p>
                <p>restaurant with private dining</p>
                <p>romantic restaurant in [area]</p>
                <p>family restaurant in [town]</p>
              </div>

              <p className="mb-6">A website should clearly explain what the restaurant is, where it is and what it is known for.</p>
              <p className="mb-6">That sounds simple because it is. Search engines need the same kind of clarity customers do.</p>
              <p>Do not fill the page with strange repetitions of town names. Write naturally. Explain the real business.</p>
            </FadeIn>

            <FadeIn id="menus-seo" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Menus Can Help SEO Too
              </h2>
              <p className="mb-6">A restaurant menu is not only useful to customers.</p>
              <p className="mb-8">It also gives search engines clear information about what is actually served. If the menu contains:</p>
              
              <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8 list-disc list-inside text-near-black font-medium">
                <li>Sunday roast</li>
                <li>steak</li>
                <li>seafood</li>
                <li>vegetarian dishes</li>
                <li>cocktails</li>
                <li>brunch</li>
                <li>local produce</li>
              </ul>

              <p className="mb-6">then those details naturally become part of the site&apos;s content.</p>
              <p>That is far better than adding a paragraph full of keywords that nobody wants to read. Useful information creates natural relevance.</p>
            </FadeIn>

            <FadeIn id="seasonal" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Keep Seasonal Content Fresh
              </h2>
              <p className="mb-6">Restaurants change throughout the year.</p>
              <p className="mb-6">Christmas menus. Valentine&apos;s Day. Mother&apos;s Day. Summer terraces. Festive parties. New Year&apos;s Eve. Special tasting menus.</p>
              <p className="mb-6">These can be valuable pages. But only while they are current.</p>
              <p className="mb-6">Expired event pages should be updated, redirected or removed thoughtfully.</p>
              <p>Leaving outdated Christmas menus online for years makes the website feel neglected. The site should feel alive.</p>
            </FadeIn>

            <FadeIn id="speed" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                A Restaurant Website Should Not Feel Slow
              </h2>
              <p className="mb-6">Large food images look great. But they can make a website painfully slow if handled badly.</p>
              <p className="mb-6">That matters especially on mobile.</p>
              <p className="mb-6">Images should be properly sized and compressed. Animations should not delay important information. Menus should load quickly. Booking buttons should work immediately.</p>
              <p className="mb-6">A beautiful site that takes too long to load may lose the customer before they ever see the food.</p>
              <p>Cinder & Field aims for visual richness without unnecessary weight.</p>
            </FadeIn>

            {/* Alternating Dark Section */}
            <FadeIn id="focused-on" className="mb-20 bg-near-black text-bone p-8 md:p-12 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] mb-10 leading-tight">
                What We Focused on With Cinder & Field
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Food First</h3>
                  <p className="text-bone/70">The restaurant&apos;s main product should be easy to understand.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Clear Menus</h3>
                  <p className="text-bone/70">Customers should not have to search for what is being served.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Easy Booking</h3>
                  <p className="text-bone/70">The route to reserve a table stays visible.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Atmosphere</h3>
                  <p className="text-bone/70">The design helps communicate what kind of place this is.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Sunday Dining</h3>
                  <p className="text-bone/70">Important occasions can have their own space.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Private Events</h3>
                  <p className="text-bone/70">The website can support higher-value enquiries as well as ordinary bookings.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Mobile Use</h3>
                  <p className="text-bone/70">Menus, contact details and booking remain practical on a phone.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Simple Navigation</h3>
                  <p className="text-bone/70">People should be able to find what they need quickly.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn id="what-we-would-add" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Restaurant Systems & Integrations
              </h2>
              <p className="mb-10">Depending on service structure and booking volumes, our dining platforms integrate tailored hospitality systems, including:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <h4 className="font-bold text-near-black mb-2">Online Reservations</h4>
                  <p className="text-[15px]">Connect the site to the restaurant&apos;s booking platform.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Live Menus</h4>
                  <p className="text-[15px]">Create easy-to-update menu pages.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Sunday Lunch</h4>
                  <p className="text-[15px]">Build a dedicated page for one of the most important weekly services.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Private Dining</h4>
                  <p className="text-[15px]">Create a stronger enquiry route for group bookings.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Events</h4>
                  <p className="text-[15px]">Promote live music, tasting nights, seasonal menus or other genuine events.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Gift Vouchers</h4>
                  <p className="text-[15px]">Allow customers to buy dining vouchers online.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Careers</h4>
                  <p className="text-[15px]">Useful for busy venues that regularly recruit kitchen and front-of-house staff.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Gallery</h4>
                  <p className="text-[15px]">Show real food, interiors and atmosphere.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Reviews</h4>
                  <p className="text-[15px]">Bring genuine customer feedback into the site.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">WhatsApp or Direct Messaging</h4>
                  <p className="text-[15px]">Useful for quick questions where that suits the restaurant.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Email Sign-Up</h4>
                  <p className="text-[15px]">Build a list for offers, events and seasonal menus.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Takeaway or Collection</h4>
                  <p className="text-[15px]">Where relevant, connect customers to online ordering.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Multiple Locations</h4>
                  <p className="text-[15px]">For small restaurant groups, create a clear structure for each venue.</p>
                </div>
              </div>

              <p className="mt-10 pt-8 border-t border-near-black/10">The right features depend on the business. There is no reason to add something simply because another restaurant has it.</p>
            </FadeIn>

            {/* ── G. FAQ ── */}
            <FadeIn id="questions" className="mb-24 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-10 leading-tight">
                Common Questions
              </h2>
              
              <div className="mb-12">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does Every Restaurant Need Its Own Website?</h3>
                <p className="mb-4">For most established restaurants, having a proper website is still valuable.</p>
                <p className="mb-4">Customers may discover the restaurant through Google, Instagram, Facebook, TripAdvisor, a recommendation, or a booking platform. But they often look for the official website before deciding.</p>
                <p className="mb-4">That is where they expect to find the most accurate information.</p>
                <p>The website gives the restaurant control over how the business is presented. That is something a social profile cannot fully replace.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Should a Restaurant Use a PDF Menu?</h3>
                <p className="mb-4">It can. But it is not always ideal.</p>
                <p className="mb-4">PDF menus can be useful for printable versions. The problem is that they can be awkward on phones. They can also become outdated if old files remain online.</p>
                <p className="mb-4">A web-based menu is often easier to read, update, search, navigate, and use on mobile.</p>
                <p>A restaurant can still offer a downloadable PDF where useful. The best solution depends on how often the menu changes.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">How Often Should a Restaurant Website Be Updated?</h3>
                <p className="mb-4">Whenever important information changes. That includes menus, opening hours, prices, events, booking links, contact details, and seasonal offers.</p>
                <p className="mb-4">The website does not need a redesign every few months. But it should never contain information the restaurant knows is wrong.</p>
                <p>Keeping the basics current is one of the most valuable forms of website maintenance.</p>
              </div>

              <div className="pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Can a Better Restaurant Website Increase Bookings?</h3>
                <p className="mb-4">It can help. A website cannot make people love bad food. But it can stop a good restaurant from losing customers before they visit.</p>
                <p className="mb-4">If the menu is difficult to find, people leave. If the booking button does not work, people leave. If opening hours are unclear, people hesitate. If the site looks abandoned, confidence drops.</p>
                <p>If the food and atmosphere are presented well and the next step is easy, the restaurant has a better chance of turning interest into a booking. That is the role of the website.</p>
              </div>
            </FadeIn>

            <FadeIn id="main-lesson" className="mb-16 scroll-mt-32">
              <h2 className="font-display text-[40px] md:text-[56px] text-near-black mb-10 leading-[1.1]">
                Restaurant websites should not overcomplicate a simple decision.
              </h2>
              <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">The Main Lesson From Cinder & Field</h3>
              <p className="mb-4">Show people the food. Show them the atmosphere. Let them understand the menu. Make opening hours clear. Make booking easy.</p>
              <p className="font-medium text-near-black">Then give them enough extra information to feel confident choosing you. That is the foundation of Cinder & Field.</p>
            </FadeIn>

          </article>
        </div>
      </section>

      {/* ── H. END OF CASE STUDY ── */}
      <section className="bg-charcoal text-bone pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-[32px] md:text-[48px] mb-6">
              Explore the Cinder & Field Website
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-bone/70 max-w-2xl mx-auto mb-12">
              Cinder & Field was designed and engineered by TheoMedia as a complete digital platform for an independent restaurant, gastropub, and dining room. 
            </p>
            
            <div className="w-full max-w-5xl mx-auto aspect-[16/10] bg-near-black relative overflow-hidden shadow-2xl mb-12 border border-bone/10">
              <ProjectPreview url={demoUrl} title="Cinder & Field" />
            </div>

            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans font-medium tracking-[0.15em] uppercase text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors inline-block mb-32"
            >
              VIEW LIVE WEBSITE ↗
            </Link>

            <div className="max-w-2xl mx-auto border-t border-bone/10 pt-20 mb-20">
              <h2 className="font-display text-[32px] md:text-[48px] mb-6">
                Thinking About Replacing Your Restaurant Website?
              </h2>
              <div className="font-sans text-[16px] md:text-[18px] text-bone/70 space-y-4 mb-10 text-left">
                <p>Start with the restaurant, not the technology. Tell us:</p>
                <p>What do people come for? Which dishes or occasions matter most? How do customers currently book? How often does the menu change? Do you want more private events? Do you rely heavily on Sunday lunch? What do customers keep asking? What is frustrating about your current website?</p>
                <p>Those answers tell us far more than choosing a template ever could.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <Link 
                  href="/contact?project=theo-table"
                  className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
                >
                  START A PROJECT →
                </Link>
                <a 
                  href="https://wa.me/353852258004?text=Hi%20TheoMedia,%20I%20have%20a%20similar%20business%20to%20Cinder%20%26%20Field%20and%20would%20like%20to%20discuss%20a%20website%20project." 
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
                href="/case-studies/private-healthcare-website-design"
                className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-bone/50 hover:text-bone transition-colors group inline-flex flex-col items-center gap-2"
              >
                <span>Next Case Study</span>
                <span className="text-[16px] text-bone border-b border-transparent group-hover:border-bone/30 pb-1">
                  Private Healthcare →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
