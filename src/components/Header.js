import React from 'react'
import shareAvatar from './shareAvatar.svg'
import Links from './Links'
import Icon from './Icon.svg'
import hoverIcon from './hoverIcon.svg'
// import Footer from './Footer'

export default function Header() {
  return (
    <div>
        <main className='body'>
  <div className='content'>
<div className='profile-section'>
  <img src='https://avatars.githubusercontent.com/u/109107291?v=4' className='profile-img' id='profile__img' alt='profile-img'/>
  <div className='profile-hov'>
    <img src={Icon} className='img-icon'/>
  </div>
   <div className='name-sec'>
 <h4 id='twitter' className='name'>Edeh Margret</h4>
 <h4 id='slack' style={{display : 'none'}}>Margret Edeh</h4>
 
 {/* <div className='share-div'> */}
{/* <img src={shareAvatar} alt='share icon'/> */}
{/* <div className='tooltip'> */}
  {/* <span className='tool'> Click to share</span> */}
{/* </div> */}

{/* <div>
<img src={hoverIcon} className='share-hov'/>

</div> */}
 {/* </div> */}

  </div> 
  {/* <h3 id='slack' >Margret Edeh</h3> */}
</div>
</div>

</main>
      
    </div>
  )
}
