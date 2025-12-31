'use client'
import React from 'react'

const Javascript = () => {
  return (
    <section style={{textAlign:'center', marginTop: 100}}>
      <h1>JavaScript로 구현한 코드 모음</h1>
      <div style={{marginTop: 100}}>
        <p style={{margin: 20, fontSize:20, fontWeight:'bold'}}>Canvas</p>
        <p><a href="https://hong-hj611.github.io/canvas/canvas_particle.html" target='_blank'>배경화면 파티클 : https://hong-hj611.github.io/canvas/canvas_particle.html</a></p><br />
        <p><a href="https://hong-hj611.github.io/canvas/canvas_ball.html" target='_blank'>움직이는 공 : https://hong-hj611.github.io/canvas/canvas_ball.html</a></p><br />
        
        <p style={{marginTop: 50, marginBottom:10, fontSize:20, fontWeight:'bold'}}>지하철 노선(추가, 삭제, 수정)</p>
        <p><a href="https://hong-hj611.github.io/subway/" target='_blank'>지하철 : https://hong-hj611.github.io/subway/</a></p>
        <p style={{marginTop: 50, marginBottom:10, fontSize:20, fontWeight:'bold'}}>계산기</p>
        <p><a href="https://hong-hj611.github.io/calculator/" target='_blank'>계산기 : https://hong-hj611.github.io/calculator/</a></p>
        <p style={{marginTop: 50, marginBottom:10, fontSize:20, fontWeight:'bold'}}>게임</p>
        <p><a href="https://hong-hj611.github.io/games/breakout.html" target='_blank'>벽돌깨기 게임 : https://hong-hj611.github.io/games/breakout.html</a></p>
      </div>
    </section>
  )
}

export default Javascript