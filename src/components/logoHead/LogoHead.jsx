import React from 'react'
import Logo from './../../assets/bag.svg'

export default function LogoHead() {
  return (
    <h1>
      <div>
        <img src={Logo} alt="logo Learn@Home" />
      </div>
      <span>Learn@home</span>
    </h1>
  )
}
