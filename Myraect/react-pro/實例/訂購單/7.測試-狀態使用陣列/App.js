import React, { useState } from 'react'
import './App.css'

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '黑色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 200,
  },
  {
    id: 3,
    name: 'y色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 100,
  },
]

// 初始化狀態用
const initState = (array) => {
  const state = []
  for (let i = 0; i < array.length; i++) {
    state.push(1)
  }
  return state
}

function App() {
  // [1,1] 代表產品初始各買一個
  const [counts, setCounts] = useState(initState(products))
  //const [counts, setCounts] = useState(Array(products.length).fill(1))

  const setCount = (newCount, i) => {
    //1. 拷貝原狀態陣列
    const newCounts = [...counts]
    //2. 在拷貝出來的陣列上修改
    newCounts[i] = newCount
    //3. 設定回原狀態
    setCounts(newCounts)
  }

  const totalNumber = () => {
    let tNumber = 0
    for (let i = 0; i < counts.length; i++) {
      tNumber += counts[i]
    }

    return tNumber
  }

  const totalPrice = () => {
    let tPrice = 0
    for (let i = 0; i < counts.length; i++) {
      tPrice += counts[i] * products[i].price
    }

    return tPrice
  }

  return (
    <>
      <h2>總數量：{totalNumber()}</h2>
      <h2>總價：{totalPrice()}</h2>
      <hr />
      {products.map((v, i) => {
        return (
          <React.Fragment key={v.id}>
            <h2>
              商品1:{v.name}/{v.price}
            </h2>
            <button
              onClick={() => {
                setCount(counts[i] + 1, i)
              }}
            >
              +
            </button>
            <p>{counts[i]}</p>
            <button
              onClick={() => {
                setCount(counts[i] - 1, i)
              }}
            >
              -
            </button>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default App
