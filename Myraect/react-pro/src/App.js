/*import { useEffect, useState } from 'react'
import { Link, Router } from 'react-router-dom'
import config from './Config'

function MyForm() {
  useEffect(()=>{

  },[])

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyForm
*/
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetail from './pages/ProductDetail'

import Menu from './components/Menu'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        {/* 選單 */}
        <Menu />
        {/* 路由表 */}
        <Switch>
          <Route path="/product-list">
            <ProductList />
          </Route>
          <Route path="/product-detail">
            <ProductDetail />
          </Route>
          {/* <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route> */}
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
