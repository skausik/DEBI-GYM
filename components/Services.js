import { useContext, useEffect } from 'react'
import { GymContext } from '../context/GymContext'

export default function Services() {
  const { gymData } = useContext(GymContext)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.service-card').forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return (
    <section id="services">
      <div className="section-head">
        <div>
          <div className="section-tag">// What We Offer</div>
          <h2>
            OUR<br />
            PROGRAMS
          </h2>
        </div>
        <p style={{ color: 'var(--gray)', maxWidth: '280px', fontSize: '.85rem', lineHeight: 1.7 }}>
          Expert-led programs for every fitness goal, from beginner to advanced.
        </p>
      </div>
      <div className="services-grid">
        {gymData.services.map((service, idx) => (
          <div key={idx} className="service-card" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <span className="service-num">{service.num}</span>
            <span className="service-icon">{service.icon}</span>
            <div className="service-title">{service.title}</div>
            <div className="service-desc">{service.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
