import React from "react"
import s from "./styles/style.module.css"
import { Product } from "../Product/Product"

export class Products extends React.PureComponent {
  render() {
    const { data } = this.props
    const temp = data.category.products

    return (
      <ul className={s.products}>
        {temp.map(product => {
          return <Product key={product.name} data={product} />
        })}
      </ul>
    )
  }
}
