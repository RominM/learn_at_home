import React from 'react'
import Logo from './../../assets/images/bag.svg'
import './logoHead.scss'

const LogoHead = () => {
  return (
    <div className="head-login">
      <div>
        <img src={Logo} alt="logo Learn@Home" />
      </div>
      <h1>Learn@home</h1>
    </div>
  )
}

export default LogoHead