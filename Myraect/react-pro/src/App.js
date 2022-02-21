import './menu.css'

function App() {
  const [act, setAct] = useState({class:'active'})
  const ActSty = ()=>{}
  return (
    <>
      <ul>
        <li>
          <a onClick={ActSty}>首頁</a>
        </li>
        <li>
          <a>關於我們</a>
        </li>
        <li>
          <a>產品</a>
        </li>
      </ul>
    </>
  )
}

export default App
