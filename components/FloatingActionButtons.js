export default function FloatingActionButtons() {
  return (
    <div className="fab-group">
      <a className="fab fab-call" href="tel:+919999322203">
        <span className="fab-icon">📞</span>
        <span className="fab-label">Contact Us</span>
      </a>
      <a className="fab fab-map" href="https://www.google.com/maps/search/Debi+Gymnasium+Raghunathpur+Jhargram+West+Bengal" target="_blank" rel="noopener noreferrer">
        <span className="fab-icon">🗺️</span>
        <span className="fab-label">Get Directions</span>
      </a>
    </div>
  )
}
