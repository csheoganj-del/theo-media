import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Ecommerce Website Design That Keeps the Product at the Centre | TheoMedia',
  description: 'How to design a premium ecommerce website for an independent brand that makes shopping simple. A TheoMedia concept project.',
  openGraph: {
    title: 'Ecommerce Website Design That Keeps the Product at the Centre | TheoMedia',
    description: 'How to design a premium ecommerce website for an independent brand that makes shopping simple.',
    url: 'https://www.theomedia.co.uk/case-studies/ecommerce-website-design',
  }
};

export default function EcommerceCaseStudy() {
  const demoUrl = "https://theoleather.vercel.app";

  return (
    <main className="bg-bone min-h-screen text-near-black selection:bg-near-black selection:text-bone">
      {/* ── A. HERO ── */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <FadeIn className="max-w-4xl">
          <SectionLabel>CASE STUDY / CONCEPT PROJECT</SectionLabel>
          <div className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-stone mb-6 mt-4">
            Ecommerce & Online Store Website Design
          </div>
          
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-8 text-near-black">
            Ecommerce Website Design That Keeps the Product at the Centre
          </h1>
          
          <div className="font-sans text-[17px] md:text-[20px] leading-relaxed text-stone max-w-2xl space-y-6 mb-12">
            <p>A good online shop should make buying feel simple.</p>
            <p>That sounds obvious.</p>
            <p>But many ecommerce websites make people work too hard.</p>
            <ul className="space-y-2 font-medium text-near-black pl-4 border-l-2 border-near-black/20">
              <li>Too many pop-ups.</li>
              <li>Too many menu options.</li>
              <li>Too many filters.</li>
              <li>Slow product pages.</li>
              <li>Confusing delivery information.</li>
              <li>And a checkout that feels much harder than it should on a phone.</li>
            </ul>
            <p>That is the thinking behind <strong>Morrow & Hide</strong>.</p>
            <p>Morrow & Hide is a working concept website created by TheoMedia to show how we would approach a premium ecommerce website for an independent brand or growing online business.</p>
            <p>It is not a real retailer and it is not a commissioned client project.</p>
            <p>There are no fake sales figures, invented customer reviews, made-up conversion rates or imaginary awards.</p>
            <p>The purpose of the project is simple.</p>
            <p>Show how an online store can feel premium without getting in the way of the customer.</p>
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
              href="/contact?project=theo-leather"
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
            <ProjectPreview url={demoUrl} title="Morrow & Hide Demo" />
          </div>
        </FadeIn>
      </section>

      {/* ── B. PROJECT INFORMATION STRIP ── */}
      <section className="border-y border-near-black/10 py-10 mb-20 md:mb-32 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <FadeIn className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Project</div>
              <div className="text-[14px] font-medium text-near-black">Morrow & Hide</div>
            </div>
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone mb-2">Industry</div>
              <div className="text-[14px] font-medium text-near-black">Premium Ecommerce</div>
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
                <a href="#product-selling" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">The Product Should Do Most of the Selling</a>
                <a href="#product-pages" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Product Pages Need to Answer Real Questions</a>
                <a href="#photography" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Photography Matters</a>
                <a href="#mobile-shopping" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Mobile Shopping Has to Feel Easy</a>
                <a href="#navigation" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Navigation Should Help</a>
                <a href="#filters" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Filters Should Earn Their Place</a>
                <a href="#delivery" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Delivery Information</a>
                <a href="#returns" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Returns Matter Before the Purchase</a>
                <a href="#premium" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Premium Does Not Mean Complicated</a>
                <a href="#brand-story" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Brand Story Still Matters</a>
                <a href="#descriptions" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Product Descriptions</a>
                <a href="#reviews" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Reviews Can Remove Hesitation</a>
                <a href="#checkout" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Checkout Should Be Boring</a>
                <a href="#guest-checkout" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Guest Checkout Can Be Valuable</a>
                <a href="#search-matters" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Search Matters for Products Too</a>
                <a href="#collection-pages" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Collection Pages</a>
                <a href="#unique-info" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Product Pages Need Unique Information</a>
                <a href="#out-of-stock" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Out-of-Stock Products Need Thought</a>
                <a href="#email" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Email</a>
                <a href="#social-media" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Social Media</a>
                <a href="#promotions" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Promotions Should Stay Simple</a>
                <a href="#trust" className="text-[13px] font-sans text-stone hover:text-near-black transition-colors">Trust Is Especially Important</a>
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
              <a href="#product-selling" className="text-[13px] font-sans text-stone hover:text-near-black">The Product Should Do Most of the Selling</a>
              <a href="#product-pages" className="text-[13px] font-sans text-stone hover:text-near-black">Product Pages Need to Answer Real Questions</a>
              <a href="#photography" className="text-[13px] font-sans text-stone hover:text-near-black">Photography Matters</a>
              <a href="#checkout" className="text-[13px] font-sans text-stone hover:text-near-black">Checkout Should Be Boring</a>
              <a href="#main-lesson" className="text-[13px] font-sans text-stone hover:text-near-black">The Main Lesson</a>
            </nav>
          </div>

          {/* Main Content */}
          <article className="lg:w-[75%] max-w-3xl font-sans text-[16px] md:text-[18px] leading-[1.8] text-stone">
            
            <FadeIn id="product-selling" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                The Product Should Do Most of the Selling
              </h2>
              <p className="mb-6">A common ecommerce mistake is trying to make the website more impressive than the product.</p>
              
              <ul className="space-y-2 font-medium text-near-black pl-4 border-l-2 border-near-black/20 mb-6">
                <li>Too much animation.</li>
                <li>Too much design.</li>
                <li>Too many messages competing for attention.</li>
              </ul>
              
              <p className="mb-6">That can work against the store. The customer came to look at the product.</p>
              <p className="mb-6">So the product should be the main focus.</p>
              <p className="mb-6">For Morrow & Hide, the design is intentionally restrained. Strong imagery. Clear product information. Simple navigation. Easy movement between collection, product and basket.</p>
              <p>The aim is to make the brand feel considered without making shopping feel complicated.</p>
            </FadeIn>

            <FadeIn id="product-pages" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Product Pages Need to Answer Real Questions
              </h2>
              <p className="mb-6">A product page should do more than show one image and a price.</p>
              <p className="mb-8">Before buying, customers may want to know:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 font-bold text-near-black mb-10 pl-6 border-l-4 border-near-black/10">
                <p>What is it made from?</p>
                <p>What size is it?</p>
                <p>What colour will I actually receive?</p>
                <p>How does it fit?</p>
                <p>How should I care for it?</p>
                <p>When will it arrive?</p>
                <p>Can I return it?</p>
                <p>What makes it worth the price?</p>
              </div>
              
              <p className="mb-6">A strong product page should answer the questions that normally create hesitation. For a real ecommerce site, that could include:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>multiple product photographs</li>
                <li>close-up detail shots</li>
                <li>dimensions</li>
                <li>materials</li>
                <li>colour options</li>
                <li>size guide</li>
                <li>care instructions</li>
                <li>stock status</li>
                <li>delivery information</li>
                <li>returns</li>
                <li>reviews</li>
                <li>related products</li>
              </ul>

              <p className="mb-6">The exact information depends on what is being sold. But the principle stays the same.</p>
              <p className="text-[24px] font-medium text-near-black">Reduce uncertainty.</p>
            </FadeIn>

            <FadeIn id="photography" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Photography Matters More Than Almost Anything Else
              </h2>
              <p className="mb-6">For premium products, photography is a major part of the buying decision.</p>
              <p className="mb-6">Customers cannot touch the product. They cannot pick it up. They cannot inspect the finish.</p>
              <p className="mb-8">The website has to do more of that work. A strong product page might show:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>front view</li>
                <li>side view</li>
                <li>back view</li>
                <li>close-up detail</li>
                <li>product in use</li>
                <li>product at scale</li>
                <li>packaging</li>
                <li>texture</li>
                <li>colour in natural light</li>
              </ul>

              <p className="mb-6">The goal is not to upload endless images. The goal is to help the customer understand what they are actually buying.</p>
              <p className="mb-6">Good photography can make a premium product feel worth its price.</p>
              <p>Poor photography can make even a good product feel uncertain.</p>
            </FadeIn>

            <FadeIn id="mobile-shopping" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Mobile Shopping Has to Feel Easy
              </h2>
              <p className="mb-6">A large amount of ecommerce browsing happens on phones. That means the mobile version cannot be treated as a smaller desktop layout.</p>
              <p className="mb-8">It needs to work properly in its own right. Customers should be able to:</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>browse collections</li>
                <li>open products</li>
                <li>swipe through images</li>
                <li>choose size or colour</li>
                <li>add to basket</li>
                <li>check delivery information</li>
                <li>complete checkout</li>
              </ul>

              <p className="mb-6">without awkward zooming or tiny buttons.</p>
              <p className="mb-6">Important actions should stay easy to reach. Product images should still feel strong. Pages should load quickly. Checkout should not become a test of patience.</p>
              <p>Morrow & Hide is designed around that kind of mobile behaviour.</p>
            </FadeIn>

            <FadeIn id="navigation" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Navigation Should Help, Not Overwhelm
              </h2>
              <p className="mb-6">As ecommerce stores grow, menus often become too complicated.</p>
              <p className="mb-6">Every category. Every subcategory. Every collection. Every campaign. Every product type. All competing for space.</p>
              <p className="mb-6">That makes the store feel harder to use.</p>
              <p className="mb-6">For smaller and mid-sized brands, simpler navigation is often stronger. Group products in a way customers understand.</p>
              <p className="mb-8">Use clear labels. Do not make people guess what a category name means. If a customer wants a bag, they should not have to decode a creative collection name first.</p>
              
              <div className="text-center py-10 border-y border-near-black/10 my-10">
                <span className="font-display text-[28px] md:text-[36px] text-near-black">
                  Brand personality is useful. Confusion is not.
                </span>
              </div>
            </FadeIn>

            <FadeIn id="filters" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Filters Should Earn Their Place
              </h2>
              <p className="mb-6">Filters can be helpful. But not every store needs ten of them.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 bg-ivory p-8 border border-near-black/5">
                <div>
                  <h4 className="font-bold text-near-black mb-4">A fashion site may need:</h4>
                  <ul className="space-y-2 text-[15px] list-disc list-inside">
                    <li>size</li>
                    <li>colour</li>
                    <li>price</li>
                    <li>category</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-4">A furniture site may need:</h4>
                  <ul className="space-y-2 text-[15px] list-disc list-inside">
                    <li>dimensions</li>
                    <li>material</li>
                    <li>room</li>
                    <li>finish</li>
                  </ul>
                </div>
              </div>

              <p className="mb-6">A small store with twelve products may need almost none.</p>
              <p className="mb-6">Filters should solve a real browsing problem. Do not add them simply because large ecommerce websites have them.</p>
              <p>Every extra control creates more complexity.</p>
            </FadeIn>

            <FadeIn id="delivery" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Delivery Information Should Be Easy to Find
              </h2>
              <p className="mb-6">One of the biggest reasons customers hesitate online is uncertainty about delivery. They want to know:</p>
              
              <div className="space-y-4 font-medium text-near-black mb-8 pl-4 border-l-2 border-near-black/20">
                <p>How much does shipping cost?</p>
                <p>How long will it take?</p>
                <p>Do you deliver internationally?</p>
                <p>Will I receive tracking?</p>
                <p>What happens if I am not home?</p>
                <p>Can I get express delivery?</p>
              </div>

              <p className="mb-6">This information should not be hidden until the final stage of checkout.</p>
              <p className="mb-6">A real ecommerce website should explain delivery clearly before the customer commits.</p>
              <p>That makes buying feel safer.</p>
            </FadeIn>

            <FadeIn id="returns" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Returns Matter Before the Purchase
              </h2>
              <p className="mb-6">Customers do not only read returns policies after something goes wrong. Many check them before buying.</p>
              <p className="mb-6">That is especially true for clothing, footwear, accessories, gifts, and expensive products.</p>
              <p className="mb-8">A clear returns policy can remove uncertainty. It should explain:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>return window</li>
                <li>condition required</li>
                <li>excluded items</li>
                <li>return shipping</li>
                <li>refund timing</li>
                <li>exchanges where available</li>
              </ul>

              <p className="mb-6">The wording should be clear enough for a normal customer to understand.</p>
              <p>A returns page should not feel like a legal puzzle.</p>
            </FadeIn>

            <FadeIn id="premium" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Premium Does Not Mean Complicated
              </h2>
              <p className="mb-6">There is a temptation to make luxury or premium ecommerce websites highly dramatic. Large animations. Unusual navigation. Hidden menus. Slow transitions.</p>
              <p className="mb-6">That can look impressive in a design presentation. It can also make shopping annoying.</p>
              <p className="mb-8">Premium design often comes from restraint:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 mb-10 font-bold text-near-black">
                <li>Good photography.</li>
                <li>Strong typography.</li>
                <li>Space.</li>
                <li>Consistency.</li>
                <li>Careful details.</li>
                <li>Fast performance.</li>
                <li>Simple interaction.</li>
              </ul>

              <p className="text-[20px] font-medium text-near-black italic mb-6">
                “A customer should notice the product before they notice the website.”
              </p>
              <p>That is the approach behind Morrow & Hide.</p>
            </FadeIn>

            <FadeIn id="brand-story" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Brand Story Still Matters
              </h2>
              <p className="mb-6">Ecommerce is not only about product grids.</p>
              <p className="mb-6">Independent brands often have a real story. Why was the business started? Who makes the products? Where are materials sourced? What does the brand care about? Why is the product different from cheaper alternatives?</p>
              <p className="mb-6">That story can help customers understand value.</p>
              <p className="mb-6">But it should not get in the way of shopping.</p>
              <p>The strongest approach is usually to let customers browse products quickly while giving interested visitors a deeper way to learn about the brand.</p>
            </FadeIn>

            <FadeIn id="descriptions" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Product Descriptions Should Sound Like a Person
              </h2>
              <p className="mb-6">Many ecommerce descriptions are either too short or full of marketing language. For example:</p>
              <p className="font-medium text-near-black bg-ivory p-6 border border-near-black/5 mb-6">
                “Elevate your everyday lifestyle with our timeless premium essential.”
              </p>
              <p className="mb-6">That sounds polished. It tells the customer almost nothing.</p>
              <p className="mb-8">A better description explains the product:</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>What is it?</li>
                <li>What is it made from?</li>
                <li>How does it feel?</li>
                <li>What size is it?</li>
                <li>What is it useful for?</li>
                <li>What should the customer know before buying?</li>
              </ul>

              <p>Clear language can still feel premium. It simply has to be specific.</p>
            </FadeIn>

            <FadeIn id="reviews" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Reviews Can Remove Hesitation
              </h2>
              <p className="mb-6">Real customer reviews can be especially useful online. People want to know things that product descriptions may not answer.</p>
              
              <div className="space-y-4 font-medium text-near-black mb-8 pl-4 border-l-2 border-near-black/20">
                <p>Does the colour look accurate?</p>
                <p>Is the quality good?</p>
                <p>Does the size run small?</p>
                <p>How quickly did it arrive?</p>
                <p>How did the product hold up over time?</p>
              </div>

              <p className="mb-6">Those details can help future customers decide.</p>
              <p className="mb-6">Reviews should be genuine. Do not fill a new store with fake five-star comments simply to make it look established.</p>
              <p>Trust takes longer to build than it does to lose.</p>
            </FadeIn>

            <FadeIn id="checkout" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Checkout Should Be Boring
              </h2>
              <p className="mb-6">That is a compliment.</p>
              <p className="mb-6">Checkout is not the place for creative surprises. Once someone has decided to buy, the job is to help them finish.</p>
              <p className="mb-8">A good checkout should make it clear:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 list-disc list-inside">
                <li>what is in the basket</li>
                <li>total cost</li>
                <li>delivery</li>
                <li>payment</li>
                <li>address</li>
                <li>final order details</li>
              </ul>

              <p className="mb-6">Unexpected charges at the last moment can cause people to leave. So can unnecessary account creation.</p>
              <p className="mb-6">The exact checkout experience depends on the platform being used. But the principle is simple.</p>
              <p>Do not introduce new obstacles after the customer has already decided to purchase.</p>
            </FadeIn>

            <FadeIn id="guest-checkout" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Guest Checkout Can Be Valuable
              </h2>
              <p className="mb-6">Not everyone wants to create an account. Especially on their first order.</p>
              <p className="mb-6">Where the ecommerce platform allows it, guest checkout can reduce unnecessary friction.</p>
              <p className="mb-6">An account can still be offered. But forcing someone to create one before buying may be unnecessary for many stores.</p>
              <p>The website should make the purchase easy first. Loyalty features can come later.</p>
            </FadeIn>

            <FadeIn id="search-matters" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Search Matters for Products Too
              </h2>
              <p className="mb-6">People may discover an ecommerce store through Google, social media, paid advertising, recommendations, marketplaces, creators, or email.</p>
              <p className="mb-6">Search visibility can still be valuable. Product pages should clearly explain what the product is. Collection pages should make sense. Page titles should be descriptive. Images should have useful alternative text.</p>
              <p className="mb-6">Important information should be actual page content rather than being hidden entirely inside images.</p>
              <p className="mb-6">For example, a product page for a leather weekend bag should naturally explain that it is a leather weekend bag.</p>
              <p>It does not need to repeat the phrase unnaturally ten times. Clarity is enough.</p>
            </FadeIn>

            <FadeIn id="collection-pages" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Collection Pages Can Be Useful Search Pages
              </h2>
              <p className="mb-6">A good collection page can serve both customers and search engines. For example:</p>
              
              <div className="font-bold text-[20px] md:text-[24px] text-near-black space-y-4 mb-10 pl-6 border-l-4 border-near-black/10">
                <p>Leather Bags</p>
                <p>Women&apos;s Bags</p>
                <p>Travel Bags</p>
                <p>Wallets</p>
              </div>

              <p className="mb-6">Each page can give customers a useful way to browse related products. Where helpful, a short amount of original copy can explain the collection.</p>
              <p>Do not turn the top of every collection into a giant SEO essay. Shopping should still come first.</p>
            </FadeIn>

            <FadeIn id="unique-info" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Product Pages Need Unique Information
              </h2>
              <p className="mb-6">If every product description is copied from a supplier, the store has very little original information.</p>
              <p className="mb-8">Where possible, create useful descriptions based on the actual product. That might include:</p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 list-disc list-inside">
                <li>materials</li>
                <li>measurements</li>
                <li>fit</li>
                <li>care</li>
                <li>use</li>
                <li>construction</li>
                <li>origin</li>
                <li>design details</li>
              </ul>

              <p className="mb-6">Original product content is better for the customer.</p>
              <p>It also gives search engines more reason to understand the page as something useful rather than another copy of the same supplier listing.</p>
            </FadeIn>

            <FadeIn id="out-of-stock" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Out-of-Stock Products Need Thought
              </h2>
              <p className="mb-6">Products sell out. That is normal. The website should handle it well.</p>
              <p className="mb-8">Depending on the product, the store could:</p>
              
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>show “out of stock”</li>
                <li>offer restock notifications</li>
                <li>recommend alternatives</li>
                <li>keep the page available if the product is returning</li>
                <li>remove or redirect it if the product is permanently discontinued</li>
              </ul>

              <p className="mb-6">Deleting every sold-out page immediately can create broken links and a frustrating experience.</p>
              <p>The right choice depends on whether the product is coming back.</p>
            </FadeIn>

            <FadeIn id="email" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Email Can Turn One Sale Into Another
              </h2>
              <p className="mb-6">For ecommerce businesses, the website can also help build longer customer relationships.</p>
              <p className="mb-8">Email can be useful for:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>new products</li>
                <li>restocks</li>
                <li>launches</li>
                <li>seasonal collections</li>
                <li>useful product information</li>
                <li>selected offers</li>
              </ul>

              <p className="mb-6">The website can allow customers to sign up. But avoid making the first thing every visitor sees a giant newsletter pop-up before they have even seen the products.</p>
              <p>Give people a reason to care first. Then ask.</p>
            </FadeIn>

            <FadeIn id="social-media" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Social Media Should Bring People Into the Store
              </h2>
              <p className="mb-6">Social media is often extremely important for ecommerce brands. Instagram, TikTok and other platforms can introduce the product to new customers.</p>
              <p className="mb-6">But the website should be where the full buying experience becomes reliable.</p>
              <p className="mb-6">Social media can create interest. The online store should answer the practical questions and complete the sale.</p>
              <p>That means product links need to lead somewhere useful. Not simply to a generic homepage where the customer has to search again.</p>
            </FadeIn>

            <FadeIn id="promotions" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Promotions Should Stay Simple
              </h2>
              <p className="mb-6">Discounts can increase sales. They can also make a premium brand feel permanently discounted.</p>
              <p className="mb-6">Constant <strong>10% OFF</strong>, <strong>20% OFF</strong>, <strong>LAST CHANCE</strong>, or <strong>SALE ENDS TONIGHT</strong> messaging can train customers to wait for the next offer.</p>
              <p className="mb-6">The right promotional strategy depends on the brand. The website should support promotions when needed without making every visitor feel pressured.</p>
              <p>For a premium store like the Morrow & Hide concept, restraint suits the positioning better.</p>
            </FadeIn>

            <FadeIn id="trust" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                Trust Is Especially Important for Unknown Brands
              </h2>
              <p className="mb-6">A famous retailer already has recognition. A new independent brand does not.</p>
              <p className="mb-8">Someone discovering the store for the first time may ask:</p>
              
              <ul className="space-y-2 font-medium text-near-black pl-4 border-l-2 border-near-black/20 mb-8">
                <li>Is this business real?</li>
                <li>Will the product arrive?</li>
                <li>Can I return it?</li>
                <li>Is payment secure?</li>
                <li>How do I contact someone?</li>
              </ul>
              
              <p className="mb-8">A good website can answer those questions through:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 list-disc list-inside">
                <li>clear contact information</li>
                <li>delivery policy</li>
                <li>returns policy</li>
                <li>real product photography</li>
                <li>genuine reviews</li>
                <li>clear payment process</li>
                <li>business information</li>
                <li>consistent branding</li>
              </ul>

              <p className="mb-6">Trust is not created by one badge in the footer.</p>
              <p>It comes from the whole experience feeling legitimate.</p>
            </FadeIn>

            {/* Alternating Dark Section */}
            <FadeIn id="focused-on" className="mb-20 bg-near-black text-bone p-8 md:p-12 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] mb-10 leading-tight">
                What We Focused on With Morrow & Hide
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Product First</h3>
                  <p className="text-bone/70">The website supports the product rather than competing with it.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Strong Photography</h3>
                  <p className="text-bone/70">Images do much of the visual selling.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Simple Browsing</h3>
                  <p className="text-bone/70">Customers can move through collections without unnecessary complexity.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Useful Product Information</h3>
                  <p className="text-bone/70">Important buying questions have a place to be answered.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Mobile Shopping</h3>
                  <p className="text-bone/70">The store remains practical and visually strong on a phone.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Clear Basket Journey</h3>
                  <p className="text-bone/70">The route from product to purchase is easy to understand.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Premium Restraint</h3>
                  <p className="text-bone/70">The design feels considered without becoming difficult to use.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] mb-2 uppercase tracking-wide">Brand Story</h3>
                  <p className="text-bone/70">There is room to explain what makes an independent brand worth choosing.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn id="what-we-would-add" className="mb-20 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-6 leading-tight">
                What We Would Add for a Real Ecommerce Business
              </h2>
              <p className="mb-10">Morrow & Hide is a concept. A real online store would be designed around the products, customers, fulfilment and business model. Depending on the business, we could add:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <h4 className="font-bold text-near-black mb-2">Ecommerce Platform Integration</h4>
                  <p className="text-[15px]">Build around the right system for the store and its existing operations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Product Variants</h4>
                  <p className="text-[15px]">Handle sizes, colours, finishes or other options clearly.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Stock Management</h4>
                  <p className="text-[15px]">Keep product availability accurate.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Customer Accounts</h4>
                  <p className="text-[15px]">Useful where repeat purchasing or order history matters.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Guest Checkout</h4>
                  <p className="text-[15px]">Keep first purchases simple.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Delivery Options</h4>
                  <p className="text-[15px]">Support standard, express, local or international shipping where needed.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Returns Information</h4>
                  <p className="text-[15px]">Make the process easy to understand.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Reviews</h4>
                  <p className="text-[15px]">Show genuine customer feedback.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Wishlist</h4>
                  <p className="text-[15px]">Useful for products customers may consider before buying.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Restock Alerts</h4>
                  <p className="text-[15px]">Let people know when a popular product returns.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Gift Cards</h4>
                  <p className="text-[15px]">Useful for many retail businesses.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Discount Codes</h4>
                  <p className="text-[15px]">Support campaigns without turning the whole store into a permanent sale.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Email Marketing</h4>
                  <p className="text-[15px]">Connect customer sign-ups to the brand&apos;s email system.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Related Products</h4>
                  <p className="text-[15px]">Help customers discover genuinely relevant items.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Bundles</h4>
                  <p className="text-[15px]">Useful where products naturally work together.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Search</h4>
                  <p className="text-[15px]">More important as the catalogue becomes larger.</p>
                </div>
                <div>
                  <h4 className="font-bold text-near-black mb-2">Filtering</h4>
                  <p className="text-[15px]">Add it only where it improves browsing.</p>
                </div>
              </div>

              <p className="mt-10 pt-8 border-t border-near-black/10">The best ecommerce setup depends on how the business actually sells.</p>
            </FadeIn>

            {/* ── G. FAQ ── */}
            <FadeIn id="questions" className="mb-24 scroll-mt-32">
              <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-10 leading-tight">
                Common Questions
              </h2>
              
              <div className="mb-12">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does Every Small Brand Need Ecommerce?</h3>
                <p className="mb-4">Not necessarily. Some businesses only need a simple website and an enquiry system.</p>
                <p className="mb-4">But if customers regularly want to buy standard products without speaking to someone first, ecommerce can make sense.</p>
                <p className="mb-4">The decision should come from how the business works. Not from adding an online shop simply because everyone else has one.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">How Many Products Does an Online Store Need?</h3>
                <p className="mb-4">There is no minimum.</p>
                <p className="mb-4">A brand can have a strong online store with a small, focused collection. Ten excellent products can be easier to understand than hundreds of poorly organised ones.</p>
                <p className="mb-4">A smaller catalogue can actually make strong product presentation more important. Each product has more responsibility.</p>
                <p>That means photography, descriptions and page quality matter.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Should Ecommerce Stores Show Shipping Costs Early?</h3>
                <p className="mb-4">Where possible, yes. Unexpected shipping charges are frustrating.</p>
                <p className="mb-4">If standard delivery has a fixed price, make it easy to find. If free delivery applies above a certain amount, explain it clearly. If international rates vary, explain how they are calculated.</p>
                <p>Customers should not feel as though the real price is being revealed only after they have spent time checking out.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">What Makes an Ecommerce Website Look Trustworthy?</h3>
                <p className="mb-4">Usually not one dramatic feature. It is the consistency of the whole site.</p>
                <p className="mb-4">Real photographs. Clear product information. Working links. Accurate prices. Good mobile design. Clear policies. Real contact details. Secure checkout. Professional writing.</p>
                <p>When all of those details feel considered, the business feels more trustworthy.</p>
              </div>

              <div className="mb-12 pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Can Better Ecommerce Design Increase Sales?</h3>
                <p className="mb-4">It can remove obstacles that prevent sales.</p>
                <p className="mb-4">If customers cannot understand a product, they may leave. If images are poor, they may hesitate. If the site is slow, they may leave. If returns are unclear, they may hesitate. If checkout is difficult, they may abandon the basket.</p>
                <p className="mb-4">A better website cannot create demand for a product nobody wants.</p>
                <p>But it can make it much easier for someone who already wants the product to complete the purchase. That distinction matters.</p>
              </div>

              <div className="pt-8 border-t border-near-black/10">
                <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">Does an Ecommerce Store Need a Blog?</h3>
                <p className="mb-4">Not automatically. For some brands, useful editorial content makes sense.</p>
                <p className="mb-4">A leather brand might publish care guides, material information, gift guides, packing guides, or product stories. A fashion brand might create fit guides, styling ideas, or seasonal collections.</p>
                <p className="mb-4">But content should support the products and customers. Publishing generic articles simply to keep a blog active is not automatically useful.</p>
                <p>Strong product and collection pages come first.</p>
              </div>
            </FadeIn>

            <FadeIn id="main-lesson" className="mb-16 scroll-mt-32">
              <h2 className="font-display text-[40px] md:text-[56px] text-near-black mb-10 leading-[1.1]">
                A good ecommerce website should make buying easier, not more impressive.
              </h2>
              <h3 className="font-sans font-bold text-[20px] text-near-black mb-4">The Main Lesson From Morrow & Hide</h3>
              <p className="mb-4">Show the product properly. Explain it clearly. Answer the questions that create hesitation. Make mobile shopping comfortable. Be clear about delivery and returns.</p>
              <p className="font-medium text-near-black">Then get out of the customer&apos;s way. That is the foundation of Morrow & Hide.</p>
            </FadeIn>

          </article>
        </div>
      </section>

      {/* ── H. END OF CASE STUDY ── */}
      <section className="bg-charcoal text-bone pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-[32px] md:text-[48px] mb-6">
              Explore the Working Ecommerce Demo
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-bone/70 max-w-2xl mx-auto mb-12">
              Morrow & Hide is a concept project created by TheoMedia to demonstrate how we would approach an ecommerce website for an independent product brand or growing online business. It is a working demonstration rather than a real retailer.
            </p>
            
            <div className="w-full max-w-5xl mx-auto aspect-[16/10] bg-near-black relative overflow-hidden shadow-2xl mb-12 border border-bone/10">
              <ProjectPreview url={demoUrl} title="Morrow & Hide Demo" />
            </div>

            <Link 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans font-medium tracking-[0.15em] uppercase text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors inline-block mb-32"
            >
              VIEW THEO LEATHER LIVE ↗
            </Link>

            <div className="max-w-2xl mx-auto border-t border-bone/10 pt-20 mb-20">
              <h2 className="font-display text-[32px] md:text-[48px] mb-6">
                Thinking About Building or Replacing Your Online Store?
              </h2>
              <div className="font-sans text-[16px] md:text-[18px] text-bone/70 space-y-4 mb-10 text-left">
                <p>Start with the business. Tell us:</p>
                <p>What do you sell? How many products do you have? Which products matter most? Where do customers currently come from? What questions do people ask before buying? How do you handle delivery? How do returns work? What is frustrating about your current shop? Where do customers usually drop out?</p>
                <p>Those answers tell us what the website actually needs.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <Link 
                  href="/contact?project=theo-leather"
                  className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
                >
                  START A PROJECT →
                </Link>
                <a 
                  href="https://wa.me/353852258004?text=Hi%20TheoMedia,%20I%20have%20a%20similar%20business%20to%20the%20Theo%20Leather%20concept%20and%20would%20like%20to%20discuss%20an%20ecommerce%20project." 
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
