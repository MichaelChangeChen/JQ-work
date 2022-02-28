import React, { useState } from 'react'
import IdForm from './components/IdForm'
import RefsForm from './components/RefsForm'

function App() {
  return (
    <>
    <h2>REF</h2>
      <RefsForm />
      <br />
      <RefsForm />
      <hr />
      <h2>getElementById</h2>
      <IdForm />
      <br />
      <IdForm />
    </>
  )
}

export default App
