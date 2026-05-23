import { useContext, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GymContext } from '../context/GymContext'
import styles from '../styles/Admin.module.css'

export default function AdminPanel() {
  const { gymData, setGymData } = useContext(GymContext)
  const [activeTab, setActiveTab] = useState('stats')
  const [message, setMessage] = useState('')

  const handleStatsChange = (field, value) => {
    setGymData(prev => ({
      ...prev,
      stats: { ...prev.stats, [field]: parseInt(value) || 0 }
    }))
    setMessage('Stats updated!')
    setTimeout(() => setMessage(''), 2000)
  }

  const handleHoursChange = (idx, field, value) => {
    const newHours = [...gymData.hours]
    newHours[idx] = { ...newHours[idx], [field]: value }
    setGymData(prev => ({ ...prev, hours: newHours }))
    setMessage('Hours updated!')
    setTimeout(() => setMessage(''), 2000)
  }

  const handleServiceChange = (idx, field, value) => {
    const newServices = [...gymData.services]
    newServices[idx] = { ...newServices[idx], [field]: value }
    setGymData(prev => ({ ...prev, services: newServices }))
    setMessage('Service updated!')
    setTimeout(() => setMessage(''), 2000)
  }

  const handleContactChange = (field, value) => {
    setGymData(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value }
    }))
    setMessage('Contact info updated!')
    setTimeout(() => setMessage(''), 2000)
  }

  const addService = () => {
    const newService = {
      num: String(gymData.services.length + 1).padStart(2, '0'),
      icon: '⭐',
      title: 'New Service',
      desc: 'Service description here'
    }
    setGymData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }))
  }

  const removeService = (idx) => {
    setGymData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== idx)
    }))
  }

  return (
    <>
      <Head>
        <title>Admin Panel — Debi Gymnasium</title>
      </Head>

      <div className={styles.adminContainer}>
        <div className={styles.header}>
          <h1>⚙️ Admin Dashboard</h1>
          <Link href="/">
            <a className={styles.backLink}>← Back to Site</a>
          </Link>
        </div>

        {message && <div className={styles.message}>{message}</div>}

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'stats' ? styles.active : ''}`}
            onClick={() => setActiveTab('stats')}>
            Stats
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'hours' ? styles.active : ''}`}
            onClick={() => setActiveTab('hours')}>
            Hours
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'services' ? styles.active : ''}`}
            onClick={() => setActiveTab('services')}>
            Services
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'contact' ? styles.active : ''}`}
            onClick={() => setActiveTab('contact')}>
            Contact
          </button>
        </div>

        <div className={styles.content}>
          {/* STATS TAB */}
          {activeTab === 'stats' && (
            <div className={styles.section}>
              <h2>Statistics</h2>
              <div className={styles.formGroup}>
                <label>Happy Members</label>
                <input
                  type="number"
                  value={gymData.stats.members}
                  onChange={e => handleStatsChange('members', e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Justdial Rating (Stars)</label>
                <input
                  type="number"
                  step="0.1"
                  max="5"
                  value={gymData.stats.rating}
                  onChange={e => handleStatsChange('rating', e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Equipment Pieces</label>
                <input
                  type="number"
                  value={gymData.stats.equipment}
                  onChange={e => handleStatsChange('equipment', e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Opens At (Hour)</label>
                <input
                  type="number"
                  min="0"
                  max="23"
                  value={gymData.stats.opensAt}
                  onChange={e => handleStatsChange('opensAt', e.target.value)} />
              </div>
            </div>
          )}

          {/* HOURS TAB */}
          {activeTab === 'hours' && (
            <div className={styles.section}>
              <h2>Operating Hours</h2>
              {gymData.hours.map((hour, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.formGroup}>
                    <label>Day</label>
                    <input
                      type="text"
                      value={hour.day}
                      onChange={e => handleHoursChange(idx, 'day', e.target.value)} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Opening Time</label>
                    <input
                      type="text"
                      value={hour.open}
                      onChange={e => handleHoursChange(idx, 'open', e.target.value)} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Closing Time</label>
                    <input
                      type="text"
                      value={hour.close}
                      onChange={e => handleHoursChange(idx, 'close', e.target.value)} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SERVICES TAB */}
          {activeTab === 'services' && (
            <div className={styles.section}>
              <h2>Programs & Services</h2>
              {gymData.services.map((service, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.formGroup}>
                    <label>Icon (Emoji)</label>
                    <input
                      type="text"
                      maxLength="2"
                      value={service.icon}
                      onChange={e => handleServiceChange(idx, 'icon', e.target.value)} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Title</label>
                    <input
                      type="text"
                      value={service.title}
                      onChange={e => handleServiceChange(idx, 'title', e.target.value)} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Description</label>
                    <textarea
                      rows="3"
                      value={service.desc}
                      onChange={e => handleServiceChange(idx, 'desc', e.target.value)} />
                  </div>
                  <button
                    className={styles.btnDanger}
                    onClick={() => removeService(idx)}>
                    Remove Service
                  </button>
                </div>
              ))}
              <button className={styles.btnPrimary} onClick={addService}>
                + Add Service
              </button>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div className={styles.section}>
              <h2>Contact Information</h2>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={gymData.contact.phone}
                  onChange={e => handleContactChange('phone', e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Address (Street)</label>
                <input
                  type="text"
                  value={gymData.contact.address}
                  onChange={e => handleContactChange('address', e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>City & Postal</label>
                <input
                  type="text"
                  value={gymData.contact.city}
                  onChange={e => handleContactChange('city', e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Rating Text</label>
                <input
                  type="text"
                  value={gymData.contact.rating}
                  onChange={e => handleContactChange('rating', e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Affiliation</label>
                <input
                  type="text"
                  value={gymData.contact.affiliation}
                  onChange={e => handleContactChange('affiliation', e.target.value)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
