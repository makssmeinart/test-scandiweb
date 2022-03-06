import React from "react"
import s from "./styles/style.module.css"

export class Products extends React.PureComponent {
  render() {
    const { data } = this.props

    console.log(data.category.products)

    return <ul className={s.products}>123123</ul>
  }
}
