import React from "react"
import s from "./styles/styles.module.css"
import { Products } from "../../f2-Components"
import { withRouter } from "../../f3-Utilities/witRouter/withRouter"

export class CategoryContainerClass extends React.PureComponent {

  componentDidMount() {
    
  }

  render() {
    const { params } = this.props

    return (
      <section className={s.wrapper}>
        <h1 className={s.title}>{params.categoryType}</h1>
        <Products />
      </section>
    )
  }
}

export const CategoryContainer = withRouter(CategoryContainerClass)
