import { useState } from 'react'

function ChildB(props) {
  console.log(props)
  const [childBData, setChildBData] = useState('ChildB Data')
  //childBData用來傳送資料回給Parent的setData
  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(childBData)
          //透過(Parent的)setData將childBData寫入其中,傳回給Parent
          //但由於是(SET),所以必須透過一個事件觸發(cllback)傳送
        }}
      >
        送資料回Parent
      </button>
    </>
  )
}

export default ChildB
