import React, { useState } from 'react'
import IdForm from './components/IdForm'
import RefsForm from './components/RefsForm'

function App() {
  return (
    <>
      <RefsForm />
      <br />
      <RefsForm />
      <hr />
      <IdForm />
      <br />
      <IdForm />
    </>
  )
}

export default App
