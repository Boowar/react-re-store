import React from "react"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"

import ShopHeader from "../shop-header"
import { HomePage, CartPage } from "../pages"

import "./app.css"

const App = ({ items, total }) => {
  console.log()
  return (
    <main role='main' className='container'>
      <ShopHeader
        numItems={items.map(item => item.count).reduce((a, b) => a + b, 0)}
        total={total}
      />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/cart/' component={CartPage} />
      </Switch>
    </main>
  )
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  }
}

export default connect(mapStateToProps)(App)
