import { useState } from 'react'

function ChildB(props) {
  console.log(props)
  const [childBData, setChildBData] = useState('ChildB Data')

  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(childBData)
        }}
      >
        送資料回Parent
      </button>
    </>
  )
}

export default ChildB
