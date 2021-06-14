import React from 'react'
import Header from '../Header/index'
import MenuHeader from '../MenuHeader'
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <>
        <Header></Header>
        <MenuHeader></MenuHeader>
        {props.children}
      </>
   )

 }

export default Layout