import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

function AdminIndex(props) {
  const [step, setStep] = useState(1)

  const history = useHistory()
  const { stepType = 'cart' } = useParams()

  //console.log(props.match.params.stepType)
  const matchStepsTable = ['cart', 'shipping', 'payment', 'detail']

  useEffect(() => {
    const initStep = matchStepsTable.indexOf(stepType) + 1

    if (initStep > 0 && initStep < 5) {
      setStep(initStep)
    }
  }, [stepType])

  const cart = (
    <>
      <h2>個人資料管理</h2>
      <p>1111</p>
    </>
  )

  const shippingForm = (
    <>
      <h2>大頭照上傳管理</h2>
    </>
  )

  const paymentForm = (
    <>
      <h2>訂單管理</h2>
    </>
  )

  const orderDetail = (
    <>
      <h2>活動管理</h2>
    </>
  )

  const switchStep = (step) => {
    switch (step) {
      case 1:
        return cart
      case 2:
        return shippingForm
      case 3:
        return paymentForm
      case 4:
        return orderDetail
      default:
        return cart
    }
  }

  const changeStep = (isAdded = true) => {
    if (isAdded && step < 4) {
      const newStep = step + 1
      //setStep(newStep)
      history.push('/order-steps/' + matchStepsTable[newStep - 1])
    }

    if (!isAdded && step > 1) {
      const newStep = step - 1
      //setStep(newStep)
      history.push('/order-steps/' + matchStepsTable[newStep - 1])
    }
  }

  return (
    <div className="container">
      <div className="row">
        <Sidebar matchStepsTable={matchStepsTable} />
        <div class="main">
          <h1>會員管理區</h1>
          <div>{switchStep(step)}</div>
        </div>
      </div>
    </div>
  )
}

export default AdminIndex
