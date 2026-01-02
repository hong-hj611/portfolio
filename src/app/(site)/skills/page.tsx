'use client'
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import { div } from 'framer-motion/client'
import Link from 'next/link'
import { useFadeUp } from '../../hook/useFadeUp'
import ProjectCard from '../../com/ProjectCard'

type Skill = {
  id: string
  title: string
  desc: string
  type: 'route' | 'external'
  url?: string
}

const projects: Skill[] = [
  { id: '1', title: 'HTML, CSS, JavaScript', desc: 'Clone Site and Event (Scroll, rolling, slide, animate) / Team Project(GitHub)', type: 'route' },
  { id: '2', title: 'javaScript 응용', desc: 'canvas particle 배경 효과, game, 계산기, 지하철노선', type: 'route' },
  { id: '3', title: 'node.js, GCP, DB', desc: '방명록을 통해 소통하기', type: 'route'  },
  { id: '4', title: 'React로 만든 쇼핑몰', desc: 'JSON 파일, 상품 목록 관리 및 장바구니 관리', type: 'external', url: 'https://hong-hj611.github.io/react_shopping/' },
  { id: '5', title: 'API, React Native 등', desc: '날씨앱, 지도앱, React Native- TodoList', type: 'route'  },
  { id: '6', title: 'Next.js', desc: 'login/logout 구현 및 Library 응용(Gsap, Swiper 등)', type: 'external', url: 'https://hong-hj611.github.io/nextall/' },
]

// useRef / useEffect
// map()으로 카드 렌더
// IntersectionObserver는 useEffect
// router.push()로 페이지 이동

const page = () => {
  const cardsRef = useRef<HTMLDivElement[]>([])
  const router = useRouter()
  const {ref, show} = useFadeUp()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('show')
          }
        })
      },
      {
        threshold: 0.2
      }
    )

    cardsRef.current.forEach( card => {
      // if (card) observer.observe(card)
      if (!card) return
      observer.observe(card)
    })

    return () => observer.disconnect()
  },[])

  const handleClick = (skill : Skill) => {
    if (skill.type === 'external') {
      window.open(skill.url, '_blank', 'noopoener,noreferrer')
    }else {
      router.push(`/skills/${skill.id}`)
    }
  }

  return (
    <section ref={ref} className={styles.projects}>
      <h2 className={styles.title}>PROJECT</h2>

      <div className={styles.card_wrap}>
        {
          projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              desc={project.desc}
              onClick={() => handleClick(project)}
              // onClick={() => router.push(`/skills/${project.id}`)} //handleClick 생성
            />
          ))
        }
        {/* {
          projects.map((project, i) => (
            <div key={project.id}
                className={styles.card} ref={item => {if(item) cardsRef.current[i] = item}}
                onClick={() => router.push(`/skills/${project.id}`)}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))
        } */}
      </div>
    </section>
  )
}

export default page