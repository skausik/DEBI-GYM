import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            e.target.querySelectorAll('.bar-fill').forEach(b => {
              b.style.width = b.dataset.width + '%'
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    const acm = document.querySelector('.about-card-main')
    if (acm) obs.observe(acm)

    return () => obs.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="about-visual">
        <div className="about-card-main">
          <div className="pulse-ring" style={{ width: '100px', height: '100px', animationDelay: '0s' }}></div>
          <div className="pulse-ring" style={{ width: '160px', height: '160px', animationDelay: '1s', borderColor: 'rgba(232,24,12,.35)' }}></div>
          <div className="pulse-ring" style={{ width: '220px', height: '220px', animationDelay: '2s', borderColor: 'rgba(232,24,12,.15)' }}></div>
          <div className="about-card-main-label">Our Mission</div>
          <div className="about-card-main-title">FORGE YOUR BEST SELF</div>
          <div>
            <div className="bar-row">
              <div className="bar-label-row">
                <span className="bar-label">Strength</span>
                <span className="bar-val">95%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" data-width="95"></div>
              </div>
            </div>
            <div className="bar-row">
              <div className="bar-label-row">
                <span className="bar-label">Cardio</span>
                <span className="bar-val">85%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" data-width="85"></div>
              </div>
            </div>
            <div className="bar-row">
              <div className="bar-label-row">
                <span className="bar-label">Coaching</span>
                <span className="bar-val">100%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" data-width="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="section-tag">// Who We Are</div>
        <h2>
          BUILT FOR<br />
          <span className="dim">THE BOLD</span>
        </h2>
        <p className="about-para">
          Debi Gymnasium is Jhargram's most trusted fitness centre, located in Raghunathpur, Chandipur. With a perfect 5.0 rating and over 78 reviews, we've built a reputation for results-driven training and a welcoming community.
        </p>
        <p className="about-para">
          Our state-of-the-art equipment, modern machines, and dedicated personal trainers ensure every member gets the guidance they need — whether just starting out or pushing elite limits.
        </p>
        <div className="about-trainer">
          <div className="trainer-name">Kaliprasad Roy</div>
          <div className="trainer-role">Owner &amp; Head Trainer · M.D.P.C.A. Affiliated</div>
        </div>
      </div>
    </section>
  )
}
