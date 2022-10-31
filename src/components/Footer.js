import React from 'react'
import './links.css'
import zuri from './zuri.svg'
import footerText from './footerText.svg'
import I4G from './I4G.svg' 

export default function Footer() {
  return (
    <div className='footer' >
      <div className='footer-container' >
        <img src={zuri} className='fLogo'/>
        <img src={footerText} className='fLogo'/>
        <img src={I4G} className='fLogo'/>


      </div>
    </div>
  )
}
