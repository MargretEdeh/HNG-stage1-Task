import React from 'react'
import shareAvatar from './shareAvatar.svg'
import Links from './Links'
// import Footer from './Footer'

export default function Header() {
  return (
    <div>
        <main className='body'>
  <div className='content'>
<div className='profile-section'>
  <img src='https://avatars.githubusercontent.com/u/109107291?v=4' className='profile-img' id='profile__img' alt='profile-img'/>
 <div className='name-sec'>
 <h4 id='twitter' className='name'>Edeh Margret</h4>
 <div className='share-div'>
<img src={shareAvatar} className='share'/>
 </div>
  </div> 
  {/* <h3 id='slack' >Margret Edeh</h3> */}
</div>
<Links/>
</div>

</main>
      
    </div>
  )
}
