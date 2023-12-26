import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'

function navBar() {
  return (
    <div className='navBar'>
        <div className="logo">
            <Image className='logo' src={logo} alt=''/>
        </div>

        <div className="linksDiv">
            <Link href="/"><div className="link">Home</div></Link>
            <div className="link">Risky Items</div>
            <Link href="/riskyMovements"><div className="link">Risky Movements</div></Link>
            <Link href="/faceRecognition"><div className="link">Face Recognition</div></Link>
            <div className="link">Alerts</div>
        </div>
    </div>
  )
}

export default navBar