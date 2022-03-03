import React from 'react'

function Home(props) {
  const { auth } = props
  return (
    <>
      <div>首頁</div>
      {auth ? '已登入' : '未登入'}
    </>
  )
}

export default Home
