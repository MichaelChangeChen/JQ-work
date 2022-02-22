import './App.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

function App() {
  return (
    <div className="card">
      <div className="row">
        <OrderList />
        <Summary />
      </div>
    </div>
  )
}

export default App
