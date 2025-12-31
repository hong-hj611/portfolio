'use client'
import React from 'react'

const Api = () => {
   return (
    <section style={{textAlign:'center', marginTop: 100}}>
      <h1>API 활용 및 React Native</h1>
      <div style={{marginTop: 100}}>
        <p style={{margin: 20, fontSize:20, fontWeight:'bold'}}>API 활용</p>
        <p><a href="https://hong-hj611.github.io/API/api_openWeather.html" target='_blank'>오픈웨더 날씨API : https://hong-hj611.github.io/API/api_openWeather.html</a></p><br />
        <p><a href="https://hong-hj611.github.io/API/api_kakaoMap.html" target='_blank'>카카오 지도맵 : https://hong-hj611.github.io/API/api_kakaoMap.html</a></p><br />  
        <p><a href="https://hong-hj611.github.io/API/api_googleNews.html" target='_blank'>구글 검색엔진 : https://hong-hj611.github.io/API/api_googleNews.html</a></p>

        <p style={{margin: 50, fontSize:20, fontWeight:'bold'}}>React Native - TodoList</p>
        <video src="/images/todolist.mp4" autoPlay loop muted></video>
      </div>
    </section>
  )
}

export default Api