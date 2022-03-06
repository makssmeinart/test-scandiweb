import React from "react"
import { useQuery } from "react-apollo"

export const withQuery = (Child, query, variables) =>
  function (props) {
    const { loading, error, data } = useQuery(query, {variables})

    return <Child {...props} loading={loading} error={error} data={data} />
  }
