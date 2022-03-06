import React from "react"
import { Query } from "react-apollo"
import s from "./styles/styles.module.css"
import { withRouter } from "../../f3-Utilities/witRouter/withRouter"
import { GET_ALL_PRODUCTS } from "../../f4-graphql/g1-Queries/getProductsByCategory"
import { Products } from "../../f2-Components"

export class CategoryContainerClass extends React.PureComponent {
  render() {
    const { params, data } = this.props

    return (
      <section className={s.wrapper}>
        <h1 className={s.title}>{params.categoryType}</h1>
        <Query
          query={GET_ALL_PRODUCTS}
          variables={{
            input: {
              title: params.categoryType,
            },
          }}
        >
          {({ data, loading, error }) => {
            if (loading) {
              return <h1>Spinner</h1>
            }
            return <Products data={data} />
          }}
        </Query>
      </section>
    )
  }
}

export const CategoryContainer = withRouter(CategoryContainerClass)
