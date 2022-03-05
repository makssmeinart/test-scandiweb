import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HeaderContainer } from "./f1-Containers"
import {
  COLLECTION_CATEGORY_TYPE,
  COLLECTION_ITEM,
  SHOPPING_CART,
} from "./f6-Dal/routes/routes"
import s from "./app.module.css"
import commonS from "./commonStyles.css"

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <section className={s.wrapper} >
          <HeaderContainer />
          <div className={commonS.container}>
            <Routes>
              <Route
                path={COLLECTION_CATEGORY_TYPE}
                element={<h1>Category Page</h1>}
              />
              <Route path={COLLECTION_ITEM} element={<h1>Current Item</h1>} />
              <Route path={SHOPPING_CART} element={<h1>Cart</h1>} />
            </Routes>
          </div>
        </section>
      </Router>
    )
  }
}

export default App
