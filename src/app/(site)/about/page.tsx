'use client'

import { motion } from 'framer-motion'
import styles from './page.module.scss'

const lines = [
  '사용자 경험을 중심에 두는 프론트엔드 개발자입니다.',
  '기능 구현뿐 아니라 화면의 흐름과 반응을 중요하게 생각합니다.',
  'React와 JavaScript로 인터랙션을 구현합니다.',
  'Canvas와 애니메이션을 활용한 UI 표현에 관심이 많습니다.',
  'Next.js로 간단한 서버 통신 구현으로 백엔드를 경험했습니다.'
]

const page = () => {

  return (
    <section className={styles.container}>
      <div className={styles.photoBox}><img src="/images/workroom.jpg" alt="사진" /></div>
      <article>
        {lines.map((text, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: idx * 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={styles.line}
          >
            {text}
          </motion.p>
        ))}
      </article>
    </section>
  )
}

export default page