import * as React from "react"

import Nav from "./modules/Nav"

interface MainLayoutProps {
  children: React.ReactChild | React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Nav />
      {children}
    </div>
  )
}

export default MainLayout
