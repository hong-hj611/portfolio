'use client'
import React from 'react'
import styles from './Api.module.css'

const Api = () => {
   return (
    <section className={styles.apiSection}>
      <h1>API 활용 및 React Native</h1>
      <div className={styles.apiWrap}>
        <article>
          <p className={styles.subtitle}>React Native - TodoList</p>
          <div className={styles.video}>
            <video src="/images/todolist.mp4" autoPlay loop muted></video>
          </div>
        </article>

        <article>
          <p className={styles.subtitle}>API 활용</p>
          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/API/api_openWeather.html" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/weather.png" alt="weather" />
              </div>
              <p>오픈웨더 날씨API</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/API/api_kakaoMap.html" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/kkomap.png" alt="kkomap" />
              </div>
              <p>카카오 지도맵</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://hong-hj611.github.io/API/api_googleNews.html" target='_blank'>
              <div className={styles.imgBox}>
                <img src="/images/googlesearch.png" alt="search" />
              </div>
              <p>구글 검색엔진</p>
            </a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Api