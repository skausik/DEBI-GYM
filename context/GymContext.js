import { createContext, useState, useEffect } from 'react'

export const GymContext = createContext()

export function GymProvider({ children }) {
  const [gymData, setGymData] = useState({
    stats: {
      members: 78,
      rating: 5,
      equipment: 30,
      opensAt: 6
    },
    hours: [
      { day: 'Monday – Friday', open: '6:00 AM', close: '9:00 PM' },
      { day: 'Saturday', open: '6:00 AM', close: '8:00 PM' },
      { day: 'Sunday', open: '7:00 AM', close: '1:00 PM' }
    ],
    services: [
      {
        num: '01',
        icon: '🏋️',
        title: 'Strength Training',
        desc: 'Progressive resistance programs using free weights and machines to build raw, functional strength.'
      },
      {
        num: '02',
        icon: '🏃',
        title: 'Cardio Fitness',
        desc: 'Modern cardio equipment for endurance building, fat loss, and cardiovascular health.'
      },
      {
        num: '03',
        icon: '🎯',
        title: 'Personal Training',
        desc: 'One-on-one sessions with our expert trainers, tailored to your goals and schedule.'
      },
      {
        num: '04',
        icon: '💪',
        title: 'Strengthening Exercises',
        desc: 'Targeted muscle-group workouts and functional movement patterns for a balanced body.'
      },
      {
        num: '05',
        icon: '🧘',
        title: 'Body Conditioning',
        desc: 'Mobility, flexibility, and recovery work to complement your main training.'
      },
      {
        num: '06',
        icon: '📊',
        title: 'Fitness Assessment',
        desc: 'Track progress with structured assessments and goal-setting sessions.'
      }
    ],
    contact: {
      phone: '+919999322203',
      address: 'Raghunathpur, Chandipur',
      city: 'Jhargram – 721507, West Bengal',
      rating: '5.0 / 5 · 78+ Reviews on Justdial',
      affiliation: 'M.D.P.C.A. Affiliated Gymnasium'
    }
  })

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('gymData')
    if (saved) {
      try {
        setGymData(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load gym data:', e)
      }
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('gymData', JSON.stringify(gymData))
  }, [gymData])

  return (
    <GymContext.Provider value={{ gymData, setGymData }}>
      {children}
    </GymContext.Provider>
  )
}
