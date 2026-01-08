'use client'
import React from 'react'
import styles from './Clone.module.scss'

const Clone = () => {
  return (
    <section className={styles.cloneSection}>
      <h1>HTML + CSS + JavaScript로 구현한 COPY SITE</h1>
      <div className={styles.clonewrap}>
        <p className={styles.subtitle}>Copy Site</p>
        <article className={styles.article}>
          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/erom/" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/erom.png" alt="erom" />
              </div>
              <p>이롬- erom</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/woodin/" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/woodin.png" alt="woodin" />
              </div>
              <p>우딘- woodin</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/guess/hyunjin_guess_fade.html" target='_blank'>
              <div className={styles.imgBox}><img src="/images/guess.png" alt="guess" /></div>
              <p>게스- guess</p>
            </a>
          </div>
        </article>
        
        
        <article className={styles.article}>
          <div className={styles.card}>
            <p className={styles.subtitle}>개인(2month) Project</p>
            <a href="https://hong-hj611.github.io/santiago/" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/santiago.png" alt="santiago" />
              </div>
              <p>산티아고 순례길- santiago</p>
            </a>
          </div>

          <div className={styles.card}>
            <p className={styles.subtitle}>Team Project</p>
            <a href="https://hh-suyeon.github.io/line-vyor/" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/vyor.png" alt="line-vyor" />
              </div>
              <p>비오르- vyor</p>
            </a>
          </div>
        </article>
        
{/*         
        <article className={styles.article}>
          
          <div className={styles.card}>
            <p className={styles.subtitle}>Team Project</p>
            <a href="https://hh-suyeon.github.io/line-vyor/" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/vyor.png" alt="line-vyor" />
              </div>
              <p>비오르- vyor</p>
            </a>
          </div>
        </article> */}
        
      </div>
    </section>
  )
}

export default Clone
