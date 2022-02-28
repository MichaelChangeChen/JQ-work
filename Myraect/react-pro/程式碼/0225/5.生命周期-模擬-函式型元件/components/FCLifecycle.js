import { useEffect, useState } from 'react'

function FCLifecycle() {
  const [total, setTotal] = useState(0)

  // didMount
  useEffect(() => {
    console.log('didMount')
  }, [])

  // didUpdate + didMount
  useEffect(() => {
    console.log('didMount + didUpdate')
  }, [total])

  // willUnmount
  useEffect(() => {
    return () => {
      console.log('willUnmount')
    }
  }, [])

  return (
    <>
      <h1
        onClick={() => {
          const newTotal = total + 1
          setTotal(newTotal)
          console.log(newTotal)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FCLifecycle
