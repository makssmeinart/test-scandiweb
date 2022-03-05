import React from "react"
import { NavLink } from "react-router-dom"
import s from "../../f1-Containers/Header/styles/style.module.css"
import logo from "../../f5-assets/a1-images/icons/logo.svg"

export class Header extends React.PureComponent {
  render() {
    const isActiveStyle = ({ isActive }) =>
      isActive
        ? `${s.categoriesItems__active} ${s.categoriesItems}`
        : s.categoriesItems

    return (
      <header className={s.header}>
        <div className={s.inner}>
          <div className={s.content}>
            <div className={s.categories}>
              <NavLink to="category/all" className={isActiveStyle}>
                All
              </NavLink>
              <NavLink to="category/tech" className={isActiveStyle}>
                Tech
              </NavLink>
              <NavLink to="category/cloths" className={isActiveStyle}>
                Cloths
              </NavLink>
            </div>
            <div>
              <NavLink to="category/all">
                <img src={logo} alt="Logotype" />
              </NavLink>
            </div>
            <div className={s.optionsWrapper}>
              <div>Currency</div>
              <div>Cart</div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
