'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Clone from '../_subcom/Clone'
import Link from 'next/link'
import Javascript from '../_subcom/Javascript'
import Node from '../_subcom/Node'
import Reactshop from '../_subcom/Reactshop'
import Api from '../_subcom/Api'
import Next from '../_subcom/Next'

const page = () => {
  // 세부적으로 이동을 위한 파라메타
  const params = useParams()
  // 배열인지 아닌지 판단( 배열이면 id의 0번째, 배열아니면 id 갖고오도록)
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  // switch 문을 이용하여 id값에 따라 다르게 작업하도록
  const subcom = () => {
    switch (id) {
      case '1' :        // Clone 컴포넌트 만들어 넣기
        return <Clone />
      case '2' :        // Javascript 컴포넌트 만들어 넣기
        return <Javascript />
      case '3' :        // Node 컴포넌트 만들어 넣기
        return <Node />
      case '4' :        // Reactshop 컴포넌트 만들어 넣기
        // return <link href="https://hong-hj611.github.io/react_shopping/" target="_blank" />
        return <Reactshop />
      case '5' :        // Api 컴포넌트 만들어 넣기
        return <Api />
      case '6' :        // Next 컴포넌트 만들어 넣기
        return <Next />
      default :
        return <p>존재하지 않습니다</p>
    }
  }

  return (
    <div>
      {/* 이곳에 연결된 상세 페이지 나타남 */}
      {subcom()}
    </div>
  )
}

export default page