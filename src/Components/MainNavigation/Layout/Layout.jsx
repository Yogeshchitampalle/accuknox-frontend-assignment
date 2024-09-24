import React from 'react'
import Mainnavigation from '../Mainnavigation'

const Layout = (props) => {
  return (
    <div className='relative'>
      <Mainnavigation/>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
