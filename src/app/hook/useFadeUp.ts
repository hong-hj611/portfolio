'use client'
import { tr } from "framer-motion/client"
import React, { useEffect, useRef, useState } from "react"

// hook은 순수하게 값만 리턴한다
export const useFadeUp = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect( () => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      setShow(true)
    }

    const ob = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)  // entry의 인터섹팅을 확인해서 setShow에 넣어준다
          ob.disconnect()  // 한번만 실행
        }
      },
      {
        threshold: 0.2
      }
    )
    ob.observe(ref.current)  // 실시간 감지
    
    // useEffect 끝내고 다른 페이지 넘어갈때 연결 끊어라
    return () => ob.disconnect()

  },[])

  return  {ref, show}
  // ref: 옵져버 실행 위치, show: 참-거짓 값
}