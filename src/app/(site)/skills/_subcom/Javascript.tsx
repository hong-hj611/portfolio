'use client'
import React from 'react'
import styles from './Javascript.module.css'

const Javascript = () => {
  return (
    <section className={styles.jsSection}>
      <h1>JavaScript로 구현한 코드 모음</h1>
      <div className={styles.jsWrap}>

        <article className={styles.article}>
          <p className={styles.subtitle}>계산기</p>

          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/calculator/" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/calculator.png" alt="calculator" />
              </div>
              <p>계산기</p>
            </a>
          </div>
        </article>

        <article className={styles.article}>
          <p className={styles.subtitle}>Canvas</p>

          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/canvas/canvas_particle.html" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/particle.png" alt="particle" />
              </div>
              <p>배경화면 파티클</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/canvas/canvas_ball.html" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/movingball.png" alt="movingball" />
              </div>
              <p>움직이는 공</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/games/breakout.html" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/breakout.png" alt="breakout" />
              </div>
              <p>벽돌 깨기</p>
            </a>
          </div>
        </article>
        
        

        <article className={styles.article}>
          <p className={styles.subtitle}>Queue & Stack 활용</p>

          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/subway/" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/subway.png" alt="subway" />
              </div>
              <p>지하철 노선 (추가, 수정, 삭제)</p>
            </a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Javascript