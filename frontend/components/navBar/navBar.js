import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'

function navBar() {
  return (
    <div className='navBar'>
        <div className="logo">
            <Image className='logo' src={logo} alt=''/>
        </div>

        <div className="linksDiv">
            <div className="link">Home</div>
            <div className="link">Risky Items</div>
            <div className="link">Risky Movements</div>
            <div className="link">Alerts</div>
        </div>
    </div>
  )
}

export default navBar