import { useContext, useEffect, useState } from 'react'
import { GymContext } from '../context/GymContext'

export default function Hours() {
  const { gymData } = useContext(GymContext)
  const [time, setTime] = useState('--:--')
  const [status, setStatus] = useState('Checking...')

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

    document.querySelectorAll('.hours-row').forEach(el => obs.observe(el))

    // Live IST clock + open status
    function tick() {
      const now = new Date()
      const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      const h = ist.getHours()
      const m = ist.getMinutes()
      const d = ist.getDay()

      setTime(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)

      let open = false
      if (d >= 1 && d <= 5) open = h >= 6 && h < 21
      else if (d === 6) open = h >= 6 && h < 20
      else open = h >= 7 && h < 13

      setStatus(open ? 'Currently Open' : 'Currently Closed')
    }

    tick()
    const clockInterval = setInterval(tick, 1000)

    return () => {
      obs.disconnect()
      clearInterval(clockInterval)
    }
  }, [])

  return (
    <section id="hours">
      <div>
        <div className="section-tag">// Timing</div>
        <h2>
          OPEN<br />
          <span className="dim">HOURS</span>
        </h2>
        <div className="hours-list">
          {gymData.hours.map((hour, idx) => (
            <div key={idx} className="hours-row" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <span className="hours-day">{hour.day}</span>
              <span className="hours-time">{hour.open} – {hour.close}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hours-right">
        <div className="time-display" id="clockDisplay">
          {time}
        </div>
        <div className="time-label">Current IST Time</div>
        <div className="open-badge">
          <div className="open-dot"></div>
          <span className="open-text" id="openStatus" style={{ color: status === 'Currently Open' ? 'var(--red)' : '#999' }}>
            {status}
          </span>
        </div>
      </div>
    </section>
  )
}
