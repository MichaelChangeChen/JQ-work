import { useState } from 'react'
import './練習題/test01/menu.css'

const initState = (items) => {
  const menuItems = []
  for (let i = 0; i < items.length; i++) {
    menuItems.push({
      id: i + 1,
      name: items[i],
      active: false,
    })
  }

  return menuItems
}

// const defaultMenuItems = [
//   {
//     id: 1,
//     name: '首頁',
//     active: false,
//   },
//   {
//     id: 2,
//     name: '關於我們',
//     active: false,
//   },
//   {
//     id: 3,
//     name: '產品',
//     active: false,
//   },
// ]

function App() {
  // 目前的所有的選單項目
  const items = ['首頁', '關於我們', '產品']

  const defaultMenuItems = initState(items)
  // 一開始沒有被按的項目, active全為false
  const [menuItems, setmenuItems] = useState(defaultMenuItems)

  return (
    <ul>
      {menuItems.map((v, i, array) => {
        return (
          <li
            key={i}
            onClick={() => {
              const newMenuItems = [...defaultMenuItems]
              newMenuItems[i].active = true
              setmenuItems(newMenuItems)
            }}
          >
            <a href="#/" className={v.active ? 'active' : ''}>
              {v.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default App
