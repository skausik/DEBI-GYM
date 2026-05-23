export default function CTABanner() {
  return (
    <section id="cta">
      <div className="cta-orb"></div>
      <div className="section-tag" style={{ color: 'rgba(232,24,12,.7)' }}>
        // Ready?
      </div>
      <h2>
        START YOUR<br />
        <span className="outline">JOURNEY</span>
      </h2>
      <p>Join Jhargram's top-rated gym. Your transformation begins at 6 AM.</p>
      <div className="hero-cta">
        <a href="tel:+919999322203" className="btn-primary">
          📞 Call Now
        </a>
        <a href="#services" className="btn-ghost">
          See Programs
        </a>
      </div>
    </section>
  )
}
