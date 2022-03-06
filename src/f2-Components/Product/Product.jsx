import React from "react"
import { NavLink } from "react-router-dom"
import commonS from "../../commonStyles.module.css"
import s from "./styles/style.module.css"
import cartIcon from "../../f5-assets/a1-images/icons/whiteShoppingTrolley.svg"

export class Product extends React.PureComponent {
  render() {
    const { data } = this.props

    return (
      <li className={s.item}>
        <article>
          <NavLink to={`item/${data.id}`}>
            <img className={s.cover} src={data.gallery[0]} alt="Product" />
          </NavLink>
          <div className={s.info}>
            <h2 className={commonS.product_name_small}>{data.name}</h2>
            <p className={commonS.product_price_small}>
              {data.prices[0].currency.label} {data.prices[0].amount}
            </p>
            <span className={s.cartIcon}>
              <img src={cartIcon} alt="Shopping-Cart" />
            </span>
          </div>
        </article>
      </li>
    )
  }
}
