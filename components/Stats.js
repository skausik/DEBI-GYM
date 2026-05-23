import { useContext, useEffect } from 'react'
import { GymContext } from '../context/GymContext'

export default function Stats() {
  const { gymData } = useContext(GymContext)

  useEffect(() => {
    // Intersection Observer
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

    document.querySelectorAll('.stat-box').forEach(el => obs.observe(el))

    // Counters
    function count(el, target, dur = 1600) {
      let s = null
      const step = ts => {
        if (!s) s = ts
        const p = Math.min((ts - s) / dur, 1)
        el.textContent = Math.floor(p * target)
        if (p < 1) requestAnimationFrame(step)
        else el.textContent = target
      }
      requestAnimationFrame(step)
    }

    const statsObs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            count(document.getElementById('stat1'), gymData.stats.members)
            count(document.getElementById('stat2'), gymData.stats.rating)
            count(document.getElementById('stat3'), gymData.stats.equipment)
            statsObs.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )

    const statsEl = document.getElementById('stats')
    if (statsEl) statsObs.observe(statsEl)

    return () => {
      obs.disconnect()
      statsObs.disconnect()
    }
  }, [gymData.stats])

  return (
    <section id="stats">
      <div className="stat-box">
        <div className="stat-num">
          <span id="stat1">0</span>
          <span style={{ color: 'var(--red)' }}>+</span>
        </div>
        <div className="stat-label">Happy Members</div>
      </div>
      <div className="stat-box" style={{ transitionDelay: '.1s' }}>
        <div className="stat-num">
          <span id="stat2">0</span>
          <span style={{ color: 'var(--red)' }}>★</span>
        </div>
        <div className="stat-label">Justdial Rating</div>
      </div>
      <div className="stat-box" style={{ transitionDelay: '.2s' }}>
        <div className="stat-num">
          <span id="stat3">0</span>
          <span style={{ color: 'var(--red)' }}>+</span>
        </div>
        <div className="stat-label">Equipment Pieces</div>
      </div>
      <div className="stat-box" style={{ transitionDelay: '.3s' }}>
        <div className="stat-num">
          <span id="stat4">{gymData.stats.opensAt}</span>
          <span style={{ color: 'var(--red)' }}>AM</span>
        </div>
        <div className="stat-label">Opens Daily</div>
      </div>
    </section>
  )
}
