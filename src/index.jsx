import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import App from "./App"
import client from "./f4-graphql/g3-Config/config"
import "./global.css"
import "./colorPellete.css"

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

