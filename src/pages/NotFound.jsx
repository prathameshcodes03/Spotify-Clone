import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const eq = document.getElementById('nf-eq')
    const heights = [12,20,32,24,16,28,36,22,18,30,14,26,32,18,12]
    heights.forEach((h, i) => {
      const b = document.createElement('div')
      b.className = 'nf-eq-bar'
      b.style.cssText = `height:${h}px;animation-duration:${0.6+Math.random()*0.6}s;animation-delay:${i*0.07}s;`
      eq.appendChild(b)
    })
  }, [])


  return (
    <div className="nf-pg">
      <div className="nf-bg-glow"></div>

      <div className="nf-vinyl-wrap">
        <div className="nf-vinyl">
          <div className="nf-ring1"></div>
          <div className="nf-ring2"></div>
          <div className="nf-ring3"></div>
          <div className="nf-label"><div className="nf-dot"></div></div>
        </div>
        <div className="nf-needle-wrap"><div className="nf-needle"></div></div>
        <div className="nf-note n1">♪</div>
        <div className="nf-note n2">♫</div>
        <div className="nf-note n3">♩</div>
        <div className="nf-note n4">♬</div>
      </div>

      <div className="nf-num-wrap">
        <div className="nf-num">404</div>
      </div>

      <div className="nf-eq" id="nf-eq"></div>

      <div className="nf-info">
        <h2 className="nf-title">Track not found</h2>
        <p className="nf-sub">
          Looks like this track got scratched.<br />
          It's not in our library anymore.
        </p>
        <div className="nf-btns">
          <button className="nf-btn" onClick={() => navigate('/')}>
            Go home
          </button>
          <button className="nf-btn-ghost" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound