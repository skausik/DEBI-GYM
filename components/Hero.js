import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const pc = document.getElementById('particles')
    if (pc) {
      for (let i = 0; i < 25; i++) {
        const p = document.createElement('div')
        p.className = 'particle'
        const sz = Math.random() * 3 + 1
        p.style.cssText = `left:${Math.random() * 100}%;width:${sz}px;height:${sz}px;background:${
          Math.random() > 0.5 ? 'rgba(232,24,12,.5)' : 'rgba(255,107,43,.4)'
        };animation-duration:${Math.random() * 10 + 8}s;animation-delay:${Math.random() * 12}s;`
        pc.appendChild(p)
      }
    }
  }, [])

  return (
    <section id="hero">
      <div className="hero-orb orb1"></div>
      <div className="hero-orb orb2"></div>
      <div className="hero-stripe"></div>
      <div className="hero-bg-text">STRENGTH</div>
      <div className="particles" id="particles"></div>

      <div className="hero-bars">
        <div className="h-bar" style={{ '--w': '60px', animationDelay: '.5s' }}></div>
        <div className="h-bar" style={{ '--w': '90px', animationDelay: '.7s' }}></div>
        <div className="h-bar" style={{ '--w': '40px', animationDelay: '.9s' }}></div>
        <div className="h-bar" style={{ '--w': '110px', animationDelay: '1.1s' }}></div>
        <div className="h-bar" style={{ '--w': '70px', animationDelay: '1.3s' }}></div>
      </div>

      <div className="hero-content">
        <p className="hero-tag">★ Jhargram's #1 Rated Gym · Raghunathpur, Chandipur</p>
        <h1>
          DEBI<br />
          <span className="outline">GYNA</span><span className="accent">SIUM</span>
        </h1>
        <p className="hero-sub">
          Forging strength, discipline, and character in the heart of Jhargram. Professional coaching for every level.
        </p>
        <div className="hero-cta">
          <a href="tel:+919999322203" className="btn-primary">
            📞 Call Now
          </a>
          <a href="#services" className="btn-ghost">
            Explore Programs
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  )
}
