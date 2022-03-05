import React from "react"
import { NavLink } from "react-router-dom"
import commonS from "../../commonStyles.module.css"
import s from "./styles/style.module.css"
import cartIcon from "../../f5-assets/a1-images/icons/whiteShoppingTrolley.svg"

export class Product extends React.PureComponent {
  render() {
    return (
      <li className={s.item}>
        <article>
          <NavLink to="item/123123as">
            <img
              className={s.cover}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFSpQKxWQAHfnkaiy94XVzi3xG75WoyJE5w&usqp=CAU"
              alt="Product"
            />
          </NavLink>
          <div className={s.info}>
            <h2 className={commonS.product_name_small}>Apollo Running Short</h2>
            <p className={commonS.product_price_small}>$50.00</p>
            <span className={s.cartIcon}>
              <img src={cartIcon} alt="Shopping-Cart" />
            </span>
          </div>
        </article>
      </li>
    )
  }
}
