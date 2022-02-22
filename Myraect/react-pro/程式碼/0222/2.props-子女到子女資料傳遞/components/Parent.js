import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  //給ChildB設定回資料用的狀態
  const [data, setData] = useState('')

  return (
    <>
      <h2>Parent</h2>
      <ChildB setData={setData} />
      <ChildA data={data} />
    </>
  )
}

export default Parent
