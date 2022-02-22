import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  // counts -> 陣列
  const { products, counts, setCounts } = props

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {products.map((v, i) => {
          return (
            <ProductItem
              key={v.id}
              name={v.name}
              category={v.category}
              image={v.image}
              price={v.price}
              count={counts[i]}
              setCount={(newCount) => {
                //1. 先從原本的陣列拷貝出一個新陣列(在這上面處理)
                // ex. [1,1,1]
                const newCounts = [...counts]

                //2. 運算處理：更新陣列中對應商品數量
                // 更新陣列中本商品索引值，如果小於1以1來更新
                newCounts[i] = newCount < 1 ? 1 : newCount

                //3. 設定回原本的狀態
                setCounts(newCounts)
              }}
            />
          )
        })}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
