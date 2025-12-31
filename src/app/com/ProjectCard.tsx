'use client'
import React from 'react'
import { useFadeUp } from '../hook/useFadeUp'
import styles from '../(site)/skills/page.module.css'

type ProjectCardType = {
  title: string
  desc: string
  onClick: () => void
}

const ProjectCard = ({ title, desc, onClick} : ProjectCardType) => {
  const { ref, show } = useFadeUp()

  return (
    <div
      ref={ref}
      className={`${styles.card} ${show ? styles.show : ''}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default ProjectCard