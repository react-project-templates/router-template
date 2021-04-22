import * as React from "react"

import { Link } from "react-router-dom"

const Nav: React.FC = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  )
}

export default Nav
