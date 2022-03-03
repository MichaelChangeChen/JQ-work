import React from 'react'
import { withRouter } from 'react-router-dom'

function Home(props) {
  console.log(props)

  const { auth } = props
  return (
    <>
      <h1>首頁</h1>
      {auth ? '已登入' : '未登入'}
    </>
  )
}

export default Home
