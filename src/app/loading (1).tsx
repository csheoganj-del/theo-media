export default function Loading() {
  return (
    <div className="v2-page" aria-busy="true" aria-live="polite">
      <main id="main-content" className="v2-inner v2-inner-hero" style={{ minHeight: '40vh' }}>
        <p className="v2-kicker">Loading</p>
        <h1 style={{ opacity: 0.45 }}>One moment…</h1>
      </main>
    </div>
  );
}
