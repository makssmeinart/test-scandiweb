import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import commonS from "../../commonStyles.module.css"
import {
  COLLECTION_CATEGORY_TYPE,
  COLLECTION_ITEM,
  ON_PAGE_LOAD,
  PAGE_NOT_FOUND,
  SHOPPING_CART,
} from "../../f6-Dal/routes/routes"
import { CategoryContainerWithData } from "../../f1-Containers/Category/CategoryContainer"

export class PageHolder extends React.PureComponent {
  render() {
    return (
      <div className={commonS.container}>
        <Routes>
          <Route path={ON_PAGE_LOAD} element={<Navigate to="category/all" />} />
          <Route
            path={COLLECTION_CATEGORY_TYPE}
            element={<CategoryContainerWithData />}
          />
          <Route path={COLLECTION_ITEM} element={<h1>Current Item</h1>} />
          <Route path={SHOPPING_CART} element={<h1>Cart</h1>} />
          <Route path={PAGE_NOT_FOUND} element={<h1>Page not found</h1>} />
          <Route path="*" element={<Navigate to={PAGE_NOT_FOUND} />} />
        </Routes>
      </div>
    )
  }
}
