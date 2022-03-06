import React from "react"
import s from "./styles/styles.module.css"
import { withRouter } from "../../f3-Utilities/witRouter/withRouter"
import { withQuery } from "../../f3-Utilities/withQuery/withQuery"
import { GET_ALL_PRODUCTS } from "../../f4-graphql/g1-Queries/getProductsByCategory"
import { Products } from "../../f2-Components"

export class CategoryContainerClass extends React.PureComponent {
  render() {
    const { params, data } = this.props

    return (
      <section className={s.wrapper}>
        <h1 className={s.title}>{params.categoryType}</h1>
        <div>{JSON.stringify(data)}</div>
      </section>
    )
  }
}

export const CategoryContainer = withRouter(CategoryContainerClass)
export const CategoryContainerWithData = withQuery(
  CategoryContainer,
  GET_ALL_PRODUCTS,
  {
    "input": {
      "title": "clothes"
    }
  }
)
