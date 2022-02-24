import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
//Parent到ChildA  與  ChildB到Parent資料傳遞
function Parent() {
  const [pData, setPData] = useState('Parent Data')
  //給ChildB設定回資料用的狀態
  const [data, setData] = useState('')
  //藉由setData傳到ChildB經過ChildB的childBData狀態改變data的值
  return (
    <>
      <h2>Parent</h2>
      <p>來自ChildB資料:{data}</p>
      <ChildB setData={setData}/>
      <ChildA pData={pData} />
    </>
  )
}

export default Parent
