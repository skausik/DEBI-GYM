import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')
    let mx = 0, my = 0, rx = 0, ry = 0

    function onMove(e) {
      mx = e.clientX
      my = e.clientY
      if (cur) {
        cur.style.left = mx + 'px'
        cur.style.top = my + 'px'
      }
    }

    document.addEventListener('mousemove', onMove)

    let animId
    function anim() {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ring) {
        ring.style.left = rx + 'px'
        ring.style.top = ry + 'px'
      }
      animId = requestAnimationFrame(anim)
    }
    anim()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  )
}
