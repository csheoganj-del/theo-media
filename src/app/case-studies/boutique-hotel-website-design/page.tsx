import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Boutique Hotel Website Design That Makes Guests Want to Stay | TheoMedia',
  description: 'How to design a boutique hotel or country inn website that combines atmosphere, useful information and a clear route to direct booking.',
  openGraph: {
    title: 'Boutique Hotel Website Design That Makes Guests Want to Stay | TheoMedia',
    description: 'How to design a boutique hotel or country inn website that combines atmosphere, useful information and a clear route to direct booking.',
    url: 'https://www.theomedia.co.uk/case-studies/boutique-hotel-website-design',
  }
};

export default function BoutiqueHotelCaseStudy() {
  const demoUrl = "https://velora-house-demo.vercel.app";

  return (
    <main className="bg-bone min-h-screen text-near-black selection:bg-near-black selection:text-bone">
      {/* ── A. HERO ── */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <FadeIn className="max-w-4xl">
          <SectionLabel>CASE STUDY</SectionLabel>
          <div className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-stone mb-6 mt-4">
            Boutique Hotel & Country Inn Website Design
          </div>
          
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-8 text-near-black">
            Boutique Hotel Website Design That Makes Guests Want to Stay
          </h1>
          
          <div className="font-sans text-[17px] md:text-[20px] leading-relaxed text-stone max-w-2xl space-y-6 mb-12">
            <p>Choosing a hotel is emotional.</p>
            <p>People are not only comparing room sizes and prices. They are imagining the stay.</p>
            <ul className="space-y-2 font-medium text-near-black pl-4 border-l-2 border-near-black/20">
              <li>What will the room feel like?</li>
              <li>Is the food good?</li>
              <li>Is the setting peaceful?</li>
              <li>Does the place feel special?</li>
              <li>Would I rather stay here than somewhere else nearby?</li>
            </ul>
            <p>That is why hotel websites need to do more than list rooms.</p>
            <p>They need to help someone picture being there.</p>
            <p>That is the thinking behind <strong>Velora House</strong>.</p>
            <p>Velora House was created by TheoMedia as a boutique hotel, country inn, guest house or independent hospitality business.</p>
            
            
            <p>The project exists to show how a hotel website can combine atmosphere, useful information and a clear route towards direct booking.</p>
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
              href="/contact?project=velora-house"
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
            <ProjectPreview url={demoUrl} title="Velora House Demo" />
          </div>
        </FadeIn>
      </section>

      {/* ── B. PROJECT INFORMATION STRIP ── */}
      <section className="border-y border-near-black/10 py-10 mb-20 md:mb-32 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <FadeIn className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Project</div>
              <div className="text-[14px] font-medium text-near-black">Velora House</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Industry</div>
              <div className="text-[14px] font-medium text-near-black">Hospitality</div>
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
                <a href="#advantage" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">A Hotel Website Has One Big Advantage</a>
                <a href="#want-the-stay" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Make People Want the Stay</a>
                <a href="#photography" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Photography Does Most of the Selling</a>
                <a href="#room-pages" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Room Pages Need More Than a Name</a>
                <a href="#direct-booking" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Direct Booking Should Feel Easy</a>
                <a href="#booking-engine" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Work With the Booking Engine</a>
                <a href="#dining" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Dining Can Be a Reason to Choose</a>
                <a href="#experiences" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Experiences Help Sell the Destination</a>
                <a href="#location" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Location Pages Help People Plan</a>
                <a href="#mobile" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Mobile Is Especially Important</a>
                <a href="#important-info" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Keep Important Information Easy to Find</a>
                <a href="#about-page" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">The About Page Should Feel Personal</a>
                <a href="#reviews" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Reviews Are Powerful</a>
                <a href="#offers" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Special Offers Need a Reason to Exist</a>
                <a href="#events" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Events and Weddings</a>
                <a href="#search" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Search Visibility</a>
                <a href="#hotel-name" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">The Hotel Name Is a Search Result</a>
                <a href="#focused-on" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What We Focused on</a>
                <a href="#what-we-would-add" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">What We Would Add for a Real Hotel</a>
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
              <a href="#advantage" className="text-[13px] font-sans text-stone hover:text-near-black">A Hotel Website Has One Big Advantage</a>
              <a href="#want-the-stay" className="text-[13px] font-sans text-stone hover:text-near-black">Make People Want the Stay</a>
              <a href="#photography" className="text-[13px] font-sans text-stone hover:text-near-black">Photography Does Most of the Selling</a>
              <a href="#main-lesson" className="text-[13px] font-sans text-stone hover:text-near-black">The Main Lesson</a>
            </nav>
          </div>

          {/* Main Content */}
          <article className="lg:w-[75%] max-w-3xl font-sans text-[16px] md:text-[18px] leading-[1.8] text-stone">
            
            <FadeIn id="advantage" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                A Hotel Website Has One Big Advantage
              </h2>
              <p className="mb-6">Large booking platforms are useful. They help people discover places to stay.</p>
              <p className="mb-6">But they also make hotels look similar. A room photograph. A price. A rating. A list of facilities.</p>
              <p className="mb-8">Then the guest moves to the next property.</p>
              
              <p className="mb-6">Your own website gives you much more space to explain why the hotel is different. You can show the story. The rooms. The food. The surroundings. The people behind the property.</p>
              <p className="mb-6">The little details that would never fit neatly inside a booking-platform listing.</p>
              <p className="mb-6">That is one of the main reasons a good independent hotel website matters.</p>
              <p>It gives the property its own voice.</p>
            </FadeIn>

            <FadeIn id="want-the-stay" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Make People Want the Stay Before Asking Them to Book
              </h2>
              <p className="mb-6">A common mistake on hotel websites is pushing “BOOK NOW” before the visitor has seen enough to want the stay.</p>
              <p className="mb-6">Booking is important. But desire comes first.</p>
              <p className="mb-8">The homepage should answer a more emotional question:</p>
              
              <div className="font-bold text-[24px] text-near-black p-6 bg-ivory border-l-4 border-near-black/20 mb-8">
                “Why would I want to stay here?”
              </div>

              <p className="mb-6">For Velora House, that means using strong visual storytelling before overwhelming the guest with details.</p>
              <p className="mb-6">The website introduces the property through atmosphere first. Then it helps the visitor explore rooms, dining, experiences and the rest of the stay.</p>
              <p className="mb-6">The booking route remains easy to reach throughout.</p>
              <p>But it does not get in the way of discovering the hotel.</p>
            </FadeIn>

            <FadeIn id="photography" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Photography Does Most of the Selling
              </h2>
              <p className="mb-6">Hotel websites depend heavily on photographs.</p>
              <p className="mb-6">A guest wants to see what they are paying for. That includes more than one perfect photograph of the best bedroom.</p>
              <p className="mb-8">A strong hotel website should ideally show:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>the exterior</li>
                <li>the arrival</li>
                <li>bedrooms</li>
                <li>bathrooms</li>
                <li>views</li>
                <li>shared spaces</li>
                <li>restaurant or breakfast areas</li>
                <li>gardens</li>
                <li>terraces</li>
                <li>nearby scenery</li>
                <li>food</li>
                <li>details that give character</li>
              </ul>

              <p className="mb-6">Real photography matters.</p>
              <p className="mb-6">If the hotel has beautiful old windows, show them. If breakfast is served beside a garden, show that. If every room looks slightly different, let guests see the differences. If the property has an incredible view, do not make people search for it.</p>
              <p className="text-[20px] font-medium text-near-black italic border-l-2 border-near-black/20 pl-6 my-8">
                Photography should help answer the question: “What will it feel like to stay here?”
              </p>
            </FadeIn>

            <FadeIn id="room-pages" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Room Pages Need More Than a Room Name
              </h2>
              <p className="mb-6">Guests compare rooms carefully. Especially when one room costs more than another.</p>
              <p className="mb-6">A useful room page should help them understand why.</p>
              <p className="mb-8">For a real boutique hotel, each room could include:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>room name</li>
                <li>room type</li>
                <li>bed type</li>
                <li>maximum occupancy</li>
                <li>room size where useful</li>
                <li>bathroom details</li>
                <li>important amenities</li>
                <li>view</li>
                <li>whether breakfast is included</li>
                <li>photographs</li>
                <li>availability or booking action</li>
              </ul>

              <p className="mb-6">But there is also room for personality.</p>
              <p className="mb-6">If one room has a freestanding bath, say so. If another has the best view in the house, show it. If a suite opens directly onto a garden, that is worth explaining.</p>
              <p className="mb-6">The aim is not to make the page longer.</p>
              <p>The aim is to help the guest choose confidently.</p>
            </FadeIn>

            <FadeIn id="direct-booking" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Direct Booking Should Feel Easy
              </h2>
              <p className="mb-6">If a hotel wants more direct bookings, the website should make that route obvious.</p>
              <p className="mb-6">A guest should not have to search for it. The booking action should remain easy to find on both desktop and mobile.</p>
              <p className="mb-8">But there is another important part. The guest needs a reason to feel comfortable booking directly. A real hotel could explain benefits such as:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>best available direct rate</li>
                <li>flexible cancellation where applicable</li>
                <li>complimentary extras</li>
                <li>direct communication with the hotel</li>
                <li>room requests</li>
                <li>early check-in or late check-out where available</li>
              </ul>

              <p className="mb-6">Only promise benefits the hotel genuinely offers. Do not invent “best rate guarantees” simply because other hotels use them.</p>
              <p>The website should make direct booking attractive because it is genuinely useful for both the guest and the business.</p>
            </FadeIn>

            <FadeIn id="booking-engine" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                The Website Should Work With the Booking Engine
              </h2>
              <p className="mb-6">Many hotels use a separate booking engine. That is completely normal.</p>
              <p className="mb-6">The problem comes when the main website feels premium and the booking journey suddenly feels disconnected or confusing.</p>
              <p className="mb-8">Where possible, the transition should feel natural. The guest should understand:</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>where they are going</li>
                <li>what dates they are selecting</li>
                <li>what room they are booking</li>
                <li>what the price includes</li>
                <li>what the cancellation terms are</li>
                <li>whether payment is taken immediately</li>
              </ul>

              <p className="mb-6">A good website does not stop being responsible for the guest experience the moment someone presses “Book”.</p>
              <p>The whole journey matters.</p>
            </FadeIn>

            <FadeIn id="dining" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Dining Can Be a Reason to Choose the Hotel
              </h2>
              <p className="mb-6">Food can strongly influence a booking. Especially for boutique hotels, country inns and destination stays.</p>
              
              <div className="space-y-4 font-bold text-near-black mb-8 pl-4 border-l-2 border-near-black/20">
                <p>Is breakfast included?</p>
                <p>Is there a restaurant?</p>
                <p>Do I need to reserve dinner?</p>
                <p>Is the restaurant open every night?</p>
                <p>What type of food is served?</p>
                <p>Can non-residents dine there?</p>
              </div>

              <p className="mb-6">For Velora House, dining is treated as part of the overall stay rather than a small line hidden under facilities.</p>
              <p className="mb-8">A real hotel website could show:</p>

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>restaurant photography</li>
                <li>sample menus</li>
                <li>breakfast</li>
                <li>dinner</li>
                <li>afternoon tea</li>
                <li>bar</li>
                <li>private dining</li>
                <li>seasonal menus</li>
                <li>dining opening times</li>
              </ul>

              <p className="mb-6">Again, clarity matters. If the restaurant closes on certain evenings, say so. If dinner must be booked in advance, make that easy to understand.</p>
              <p>Guests appreciate knowing before they arrive.</p>
            </FadeIn>

            <FadeIn id="experiences" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Experiences Help Sell the Destination
              </h2>
              <p className="mb-6">Sometimes the hotel is only part of the reason for the trip. The surrounding area matters too.</p>
              <p className="mb-6">A guest may be choosing between several hotels in the same region. Showing what they can actually do during the stay can help them imagine a complete trip.</p>
              <p className="mb-8">Depending on the property, this might include:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>walking</li>
                <li>cycling</li>
                <li>beaches</li>
                <li>historic houses</li>
                <li>vineyards</li>
                <li>wildlife</li>
                <li>golf</li>
                <li>fishing</li>
                <li>local markets</li>
                <li>nearby towns</li>
                <li>spa treatments</li>
                <li>private tours</li>
                <li>seasonal events</li>
              </ul>

              <p className="mb-6">The website does not need to become a full tourism guide.</p>
              <p className="mb-6">Just highlight the experiences that genuinely fit the type of guest the hotel wants to attract.</p>
              <p>That can also create useful search content naturally.</p>
            </FadeIn>

            <FadeIn id="location" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Location Pages Should Help People Plan
              </h2>
              <p className="mb-6">A hotel website should make the location easy to understand. Not everyone knows the area already.</p>
              
              <div className="space-y-4 font-bold text-near-black mb-8 pl-4 border-l-2 border-near-black/20">
                <p>How far is it from the nearest station?</p>
                <p>Do I need a car?</p>
                <p>Is there parking?</p>
                <p>How far is the nearest airport?</p>
                <p>Can I walk into town?</p>
                <p>What is nearby?</p>
              </div>

              <p className="mb-8">For a real property, a location section could include:</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>map</li>
                <li>driving information</li>
                <li>train information</li>
                <li>airport information</li>
                <li>parking</li>
                <li>nearby attractions</li>
                <li>approximate travel times</li>
                <li>taxi guidance</li>
              </ul>

              <p className="mb-6">This helps reduce uncertainty before booking.</p>
              <p>It also cuts down repetitive questions for the hotel team.</p>
            </FadeIn>

            <FadeIn id="mobile" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Mobile Is Especially Important for Hotels
              </h2>
              <p className="mb-6">People research holidays everywhere. On the sofa. On the train. At work. While already travelling.</p>
              <p className="mb-6">A hotel site cannot assume visitors are sitting at a desktop computer.</p>
              <p className="mb-8">On mobile, the most important parts should still feel effortless. Guests should be able to:</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>look through room photographs</li>
                <li>compare room types</li>
                <li>check important details</li>
                <li>find dining information</li>
                <li>explore the area</li>
                <li>contact the hotel</li>
                <li>start a booking</li>
              </ul>

              <p className="mb-6">Large photographs still matter on mobile, but they must load efficiently.</p>
              <p className="mb-6">Slow websites are frustrating, especially for travellers using mobile data.</p>
              <p>The design should feel rich without becoming heavy.</p>
            </FadeIn>

            <FadeIn id="important-info" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Keep Important Information Easy to Find
              </h2>
              <p className="mb-6">Beautiful design should not hide practical information.</p>
              <p className="mb-8">Guests still need basics:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 list-disc list-inside">
                <li>Check-in time.</li>
                <li>Check-out time.</li>
                <li>Parking.</li>
                <li>Breakfast.</li>
                <li>Pets.</li>
                <li>Children.</li>
                <li>Accessibility.</li>
                <li>Cancellation rules.</li>
                <li>Wi-Fi.</li>
                <li>Restaurant hours.</li>
              </ul>

              <p className="mb-6">These details do not need to dominate the homepage.</p>
              <p className="mb-6">But they should be easy to find.</p>
              <p>A well-designed FAQ section can work extremely well for this. It gives guests quick answers without forcing them to contact reception for every small question.</p>
            </FadeIn>

            <FadeIn id="about-page" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                The About Page Should Feel Personal
              </h2>
              <p className="mb-6">Independent hotels have something large chains often struggle to communicate. Personality.</p>
              
              <div className="bg-ivory border-l-4 border-near-black p-8 md:p-10 my-10 space-y-4 font-medium text-near-black">
                <p>Perhaps the building has a history.</p>
                <p>Perhaps the owners restored it.</p>
                <p>Perhaps it has been family-run for years.</p>
                <p>Perhaps the food comes from local suppliers.</p>
                <p>Perhaps the hotel exists because someone fell in love with the property.</p>
              </div>

              <p className="mb-6">Those stories can matter. Not because every visitor will read every word. But because they make the hotel feel like a real place rather than another accommodation listing.</p>
              <p className="mb-6">For a real hotel, we would look for the genuine story behind the property.</p>
              <p>Then tell it simply.</p>
            </FadeIn>

            <FadeIn id="reviews" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Reviews Are Powerful, But Keep Them Real
              </h2>
              <p className="mb-6">Hotel guests rely heavily on reviews. A website can make strong genuine reviews more visible.</p>
              <p className="mb-6">But the temptation to make the site look more impressive should never lead to invented testimonials.</p>
              <p className="mb-8">If the property has excellent Google, TripAdvisor or booking-platform feedback, use genuine reviews where permissions and platform rules allow. Good reviews often mention the details future guests care about:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 list-disc list-inside">
                <li>helpful staff</li>
                <li>comfortable beds</li>
                <li>food</li>
                <li>cleanliness</li>
                <li>atmosphere</li>
                <li>location</li>
                <li>peace and quiet</li>
                <li>service</li>
              </ul>

              <p className="mb-6">Those details are much stronger than a generic: <strong>“Wonderful hotel, highly recommended.”</strong></p>
              <p>Real specificity feels believable because it is.</p>
            </FadeIn>

            <FadeIn id="offers" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Special Offers Need a Reason to Exist
              </h2>
              <p className="mb-6">A hotel website can be useful for promoting direct-booking packages.</p>
              <p className="mb-8">For example:</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>two-night stays</li>
                <li>dinner, bed and breakfast</li>
                <li>romantic weekends</li>
                <li>seasonal escapes</li>
                <li>midweek offers</li>
                <li>spa packages</li>
                <li>Christmas stays</li>
                <li>New Year stays</li>
              </ul>

              <p className="mb-6">But an offers page should not become a graveyard of expired packages. Keep it current. Remove old offers. Make the terms clear. Explain exactly what is included.</p>
              <p>If the hotel does not regularly run packages, there is no need to force an offers page into the website.</p>
            </FadeIn>

            <FadeIn id="events" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Events and Weddings Need Their Own Journey
              </h2>
              <p className="mb-6">Some boutique hotels also make significant revenue from weddings, private events, corporate retreats, celebrations, and exclusive-use bookings.</p>
              <p className="mb-6">Those visitors behave differently from someone booking a room for one night. If events matter to the business, they deserve their own section.</p>
              <p className="mb-8">A wedding enquiry page might include:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 list-disc list-inside">
                <li>capacity</li>
                <li>ceremony spaces</li>
                <li>dining options</li>
                <li>accommodation</li>
                <li>exclusive use</li>
                <li>photographs</li>
                <li>brochures</li>
                <li>enquiry form</li>
              </ul>

              <p>The main hotel website can still serve ordinary guests without making the event side feel hidden.</p>
            </FadeIn>

            <FadeIn id="search" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Search Visibility for Hotels Is Different
              </h2>
              <p className="mb-6">Hotel SEO can be competitive. Large booking platforms often dominate broad searches.</p>
              <p className="mb-6">That means independent hotels need to be specific about what makes them relevant.</p>
              <p className="mb-8">Useful website content might naturally cover searches around:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>boutique hotels in the area</li>
                <li>country hotels</li>
                <li>romantic stays</li>
                <li>dog-friendly hotels</li>
                <li>hotels with restaurants</li>
                <li>hotels near particular attractions</li>
                <li>wedding hotels</li>
                <li>weekend breaks</li>
                <li>local experiences</li>
              </ul>

              <p className="mb-6">Only target things that genuinely apply. Do not add “luxury” to every heading unless the hotel really offers that level of experience.</p>
              <p className="mb-6">Do not create pages around facilities the property does not have.</p>
              <p>Useful search visibility should come from describing the real hotel properly.</p>
            </FadeIn>

            <FadeIn id="hotel-name" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                The Hotel Name Should Become a Search Result Worth Clicking
              </h2>
              <p className="mb-6">Sometimes someone already knows the hotel name. They may have found it on Instagram, a booking platform, a recommendation or a travel article.</p>
              <p className="mb-6">They search the name on Google. The official site should make a strong impression immediately.</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>Page titles and descriptions should be clear.</li>
                <li>The site should load quickly.</li>
                <li>Contact details should be consistent.</li>
                <li>Photos should represent the property accurately.</li>
                <li>The booking button should be obvious.</li>
              </ul>

              <p className="mb-6">The website is often the final place someone checks before deciding whether to book.</p>
              <p>That moment matters.</p>
            </FadeIn>

            {/* Alternating Dark Section */}
            <FadeIn id="focused-on" className="mb-20 bg-near-black text-bone p-8 md:p-12 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] mb-10 leading-tight">
                What We Focused on With Velora House
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Atmosphere First</h3>
                  <p className="text-bone/70">The website should make someone feel something before giving them every detail.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Strong Room Presentation</h3>
                  <p className="text-bone/70">Rooms are treated as experiences rather than simple inventory.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Direct Booking</h3>
                  <p className="text-bone/70">The path towards booking remains easy to find.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Dining</h3>
                  <p className="text-bone/70">Food is shown as part of the reason to stay.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Experiences</h3>
                  <p className="text-bone/70">The wider destination helps guests imagine the trip.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Mobile Browsing</h3>
                  <p className="text-bone/70">The site remains comfortable to explore on a phone.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Simple Information</h3>
                  <p className="text-bone/70">Practical details are available without turning the website into a wall of text.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">A Distinct Personality</h3>
                  <p className="text-bone/70">The design is intended to feel like an independent hotel, not a generic accommodation template.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn id="what-we-would-add" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                What We Would Add for a Real Hotel
              </h2>
              <p className="mb-10">Velora House is a completed project. Depending on the business, that could include:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <h4 className="font-bold text-near-black mb-2">Booking Engine Integration</h4>
                  <p className="text-[15px]">Connect the website to the hotel&apos;s existing booking system or help establish the right booking journey.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Individual Room Pages</h4>
                  <p className="text-[15px]">Create detailed pages for every room type.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Live Availability</h4>
                  <p className="text-[15px]">Allow guests to search dates and room availability.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Restaurant Menus</h4>
                  <p className="text-[15px]">Make current menus easy to view on mobile.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Offers</h4>
                  <p className="text-[15px]">Create seasonal or direct-booking packages.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Weddings and Events</h4>
                  <p className="text-[15px]">Build dedicated enquiry journeys for high-value events.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Gift Vouchers</h4>
                  <p className="text-[15px]">Allow guests to buy stays, dining or experiences as gifts.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Experience Pages</h4>
                  <p className="text-[15px]">Promote activities around the property.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Local Guides</h4>
                  <p className="text-[15px]">Create genuinely useful guides to the surrounding area.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Multilingual Content</h4>
                  <p className="text-[15px]">Useful where the hotel attracts significant international demand.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Gallery</h4>
                  <p className="text-[15px]">Organise strong photography without making visitors click through hundreds of images.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">FAQ</h4>
                  <p className="text-[15px]">Answer common questions about check-in, parking, children, pets, accessibility and dining.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Contact and Directions</h4>
                  <p className="text-[15px]">Give guests simple information for planning their arrival.</p>
                </div>
              </div>

              <p className="mt-10 pt-8 border-t border-near-black/10">The best hotel website depends on what actually makes the property worth travelling for. That is what should lead the design.</p>
            </FadeIn>

            {/* ── G. FAQ ── */}
            <FadeIn id="questions" className="mb-24 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-10 leading-tight">
                Common Questions
              </h2>
              
              <div className="mb-12">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Should a Small Hotel Take Direct Bookings?</h3>
                <p className="mb-4">In most cases, direct booking is valuable. Booking platforms can provide important reach.</p>
                <p className="mb-4">But relying on them for every reservation can mean paying commission on guests who might otherwise have booked directly. A strong hotel website gives repeat guests, recommendations and people who already know the property an easy direct route.</p>
                <p className="mb-4">It also gives the hotel more control over how the stay is presented. That does not mean removing booking platforms.</p>
                <p>For many hotels, the strongest approach is using both. Platforms for discovery. The hotel&apos;s own website for brand, trust and direct relationships.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">How Can a Hotel Encourage More Direct Bookings?</h3>
                <p className="mb-4">The website has to give people confidence. That means:</p>
                <p className="mb-4">Show the rooms properly. Make prices and availability easy to reach. Explain what is included. Use strong genuine photography. Keep policies clear. Make the booking process simple.</p>
                <p className="mb-4">Give guests a reason to book directly where the hotel genuinely offers one.</p>
                <p>The direct website should never feel harder than booking through a third party. If it does, guests will naturally take the easier option.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does Every Hotel Need a Blog?</h3>
                <p className="mb-4">No. A neglected blog with three posts from four years ago does not help the property.</p>
                <p className="mb-4">Hotels do have a lot of useful things they can write about, but only when there is a reason. Useful topics might include local walks, weekend itineraries, seasonal events, restaurant updates, new experiences, guides to nearby attractions, wedding planning, or local food and drink.</p>
                <p>If the hotel can maintain useful content, great. If not, strong permanent pages are better than publishing content simply because someone said SEO requires a blog.</p>
              </div>

              <div className="pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">What Makes a Boutique Hotel Website Feel Premium?</h3>
                <p className="mb-4">Expensive-looking animations are not the answer. A premium hotel website usually comes from restraint.</p>
                <p className="mb-4">Good photography. Strong typography. Space. Careful wording. Simple navigation. Consistent details. Smooth performance.</p>
                <p className="mb-4">The site should give the property room to breathe. If every section flashes, slides, rotates or competes for attention, the atmosphere gets lost.</p>
                <p>The website should support the hotel. Not compete with it.</p>
              </div>
            </FadeIn>

            <FadeIn id="main-lesson" className="mb-16 scroll-mt-32">
              <h2 className="font-display text-[40px] md:text-[56px] text-near-black mb-10 leading-[1.1]">
                A hotel website is selling more than a room. It is selling the idea of being somewhere.
              </h2>
              <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">The Main Lesson From Velora House</h3>
              <p className="mb-4">The quiet morning. The dinner. The view from the window. The walk after breakfast. The feeling of arriving.</p>
              <p className="mb-4">That emotion should be present in the website. Then the practical side should be simple. Choose a room. Check the details. Find a date. Book.</p>
              <p className="font-medium text-near-black">That balance between desire and usefulness is the foundation of Velora House.</p>
            </FadeIn>

          </article>
        </div>
      </section>

      {/* ── H. END OF CASE STUDY ── */}
      <section className="bg-charcoal text-bone pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-[32px] md:text-[48px] mb-6">
              Explore the Working Boutique Hotel Demo
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-bone/70 max-w-2xl mx-auto mb-12">
              Velora House was created by TheoMedia as website design for a boutique hotel, country inn, guest house or independent hospitality property. 
            </p>
            
            <div className="w-full max-w-5xl mx-auto aspect-[16/10] bg-near-black relative overflow-hidden shadow-2xl mb-12 border border-bone/10">
              <ProjectPreview url={demoUrl} title="Velora House Demo" />
            </div>

            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans font-medium tracking-[0.15em] uppercase text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors inline-block mb-32"
            >
              VIEW VELORA HOUSE LIVE ↗
            </Link>

            <div className="max-w-2xl mx-auto border-t border-bone/10 pt-20 mb-20">
              <h2 className="font-display text-[32px] md:text-[48px] mb-6">
                Thinking About Replacing Your Hotel Website?
              </h2>
              <div className="font-sans text-[16px] md:text-[18px] text-bone/70 space-y-4 mb-10 text-left">
                <p>You do not need to begin with a website specification. Begin with the property. Tell us:</p>
                <p>Why do guests choose you? Which rooms sell best? What do guests repeatedly mention in reviews? How important is food? Where do most bookings currently come from? Do you want more direct bookings? What do guests ask before arriving? What does your current website fail to show?</p>
                <p>From there, we can work out what the website actually needs.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <Link 
                  href="/contact?project=velora-house"
                  className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
                >
                  START A PROJECT →
                </Link>
                <a 
                  href="https://wa.me/353852258004?text=Hi%20TheoMedia,%20I%20have%20a%20similar%20business%20to%20the%20Velora%20House%20and%20would%20like%20to%20discuss%20a%20website%20project." 
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
                href="/case-studies/restaurant-gastropub-website-design"
                className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-bone/50 hover:text-bone transition-colors group inline-flex flex-col items-center gap-2"
              >
                <span>Next Case Study</span>
                <span className="text-[16px] text-bone border-b border-transparent group-hover:border-bone/30 pb-1">
                  Restaurant & Gastropub →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
