import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-bone px-5">
      <div className="text-center max-w-[520px]">
        <p className="text-label text-stone mb-6">404</p>
        <h1 className="text-editorial-lg text-near-black mb-6">
          Page not found.
        </h1>
        <p className="text-[16px] md:text-[17px] text-stone leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-near-black text-bone text-[13px] font-sans font-medium tracking-[0.1em] uppercase hover:bg-charcoal transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/work"
            className="px-6 py-3 border border-near-black/15 text-near-black text-[13px] font-sans font-medium tracking-[0.1em] uppercase hover:border-near-black/30 transition-colors"
          >
            View the Work
          </Link>
        </div>
      </div>
    </section>
  );
}
