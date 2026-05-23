import { useContext } from 'react'
import { GymContext } from '../context/GymContext'

export default function Location() {
  const { gymData } = useContext(GymContext)
  const { contact } = gymData

  return (
    <section id="location">
      <div className="section-tag">// Find Us</div>
      <h2>
        VISIT <span className="dim">THE GYM</span>
      </h2>

      <div className="location-inner">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14774.07!2d86.9984!3d22.4547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI3JzE3LjAiTiA4NsKwNTknNTQuMiJF!5e0!3m2!1sen!2sin!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Debi Gymnasium location Jhargram">
          </iframe>
        </div>

        <div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-label">Address</div>
              <div className="contact-val">
                {contact.address}<br />
                {contact.city}
              </div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🕐</div>
            <div>
              <div className="contact-label">Opening Time</div>
              <div className="contact-val">6:00 AM Daily (Sun 7 AM)</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">⭐</div>
            <div>
              <div className="contact-label">Rating</div>
              <div className="contact-val">{contact.rating}</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🏆</div>
            <div>
              <div className="contact-label">Affiliation</div>
              <div className="contact-val">{contact.affiliation}</div>
            </div>
          </div>

          <div className="action-btns">
            <a className="action-btn action-btn-call" href={`tel:${contact.phone}`}>
              📞&nbsp; Contact Us
            </a>
            <a
              className="action-btn action-btn-map"
              href={`https://www.google.com/maps/search/Debi+Gymnasium+${contact.address}+${contact.city}`}
              target="_blank"
              rel="noopener noreferrer">
              🗺️&nbsp; Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
