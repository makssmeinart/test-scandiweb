import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-boost"

const uri = process.env.BASE_BACKEND_URI

const httpLink = createHttpLink({
  uri,
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: httpLink,
  cache,
})

export default client
