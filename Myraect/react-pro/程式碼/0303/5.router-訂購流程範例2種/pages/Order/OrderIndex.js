import React, { useState } from 'react'

import OrderDetail from './OrderDetail'
import PaymentForm from './PaymentForm'
import ShippingForm from './ShippingForm'
import Cart from './Cart'

function OrderIndex(props) {
  const [step, setStep] = useState(1)

  const switchStep = (step) => {
    switch (step) {
      case 1:
        return <Cart />
      case 2:
        return <ShippingForm />
      case 3:
        return <PaymentForm />
      case 4:
        return <OrderDetail />
      default:
        return <Cart />
    }
  }

  const changeStep = (isAdded = true) => {
    if (isAdded && step < 4) setStep(step + 1)
    if (!isAdded && step > 1) setStep(step - 1)
  }

  return (
    <>
      <h1>訂購流程表單</h1>
      <div>{switchStep(step)}</div>
      {step !== 1 && (
        <button
          onClick={() => {
            changeStep(false)
          }}
        >
          上一步
        </button>
      )}
      {step !== 4 && (
        <button
          onClick={() => {
            changeStep(true)
          }}
        >
          下一步
        </button>
      )}
    </>
  )
}

export default OrderIndex
