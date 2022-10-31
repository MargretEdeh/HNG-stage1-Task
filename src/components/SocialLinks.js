import React from 'react'
import giticon from './giticon.svg'
import slack from './slack.svg'

export default function SocialLinks() {
  return (
    <div>
      <div className='social-section'>
                <img src={giticon}/>
                <img src={slack} className='logo'/>


            </div>
    </div>
  )
}
