'use client'
import React, { useEffect, useRef } from 'react'

const IntroText = () => {
  const textsRef = useRef<HTMLDivElement[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const playedRef = useRef(false)

  // mobile
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px').matches

  function stopAnimation() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    textsRef.current.forEach(t => t.classList.remove('active'))
  }

  function startAnimation() {
    if (playedRef.current && isMobile) return
    if (!textsRef.current.length) return

    stopAnimation()

    let idx = 0
    let loop = 0
    const maxLoop = isMobile ? 1 : 2

    function play() {
      textsRef.current.forEach(t => t.classList.remove('active'))
      // textsRef.current[idx].classList.add('active')

      if (loop < maxLoop) {
        textsRef.current[idx].classList.add('active')
        idx++

        if (idx >= textsRef.current.length) {
          idx = 0
          loop++
        }
      }
      // 마지막 문구까지 loop 돌도록
      else {
        textsRef.current[idx].classList.add('active')
        stopAnimation()
        playedRef.current = true
      }

      // idx++

      // if (idx >= textsRef.current.length) {
      //   loop++
      //   idx = 0

      //   if (loop >= maxLoop) {
      //     stopAnimation()
      //     playedRef.current = true
      //   }
      // }

    }

    play()
    timerRef.current = setInterval(play, 700)
  }

  useEffect(() => {
    startAnimation()

    const onScroll = () => {
      if (window.screenY < 100) {
        startAnimation()
      }
    }

    const onClick = () => {
      stopAnimation()
      playedRef.current = true
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('click', onClick)

    return () => {
      stopAnimation()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('click', onClick)
    }
  },[])

  return (
    <section className='intro'>
      <div className="text-box">
        {
          ['I DESIGN', 'I CODE', 'I CREATE'].map((text, i) => (
            <div key={text} className="text" 
                  ref = {e => { if (e) textsRef.current[i] = e }}
            >
              {text}
            </div>
          ))
        }
        <p className="final">INTERACTIVE HyunJin's PORTFOLIO</p>
      </div>
    </section>
  )
}

export default IntroText