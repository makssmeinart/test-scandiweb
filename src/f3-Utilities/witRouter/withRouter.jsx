import { useLocation, useNavigate, useParams } from "react-router-dom"
import React from "react"

// Since Im using React-router-dom v6 withRouter is unavailable,
// This is just one of the many ways you can access and manipulate url

export const withRouter = Child =>
  function (props) {
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    return (
      <Child
        {...props}
        params={params}
        navigate={navigate}
        location={location}
      />
    )
  }
