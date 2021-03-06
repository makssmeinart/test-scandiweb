import { gql } from "apollo-boost"

export const GET_ALL_PRODUCTS = gql`
  query category($input: CategoryInput) {
    category(input: $input) {
      products {
        name
          id
          inStock
          gallery
          prices {
              currency{
                  label
                  symbol
              }
              amount
          }
      }
    }
  }
`
