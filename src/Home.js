import React from 'react'
import "./App.css"
// import Footer from './components/Footer'
import Header from './components/Header'
// import shareAvatar from "./components/shareAvatar.svg"
import Links from './components/Links'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import SocialLinks from './components/SocialLinks'

export default function Home() {
  return (
    <div>
         <Header/>
      <Links link='https://twitter.com/EdehMargret' id='twitter' name='Twitter Link'/>
<Links link='https://training.zuri.team/' id='btn__zuri' name='Zuri Team' />
<Links link=' http://books.zuri.team' id='books' name='Zuri Books'/>
<Links link='https://books.zuri.team/python-for-beginners?ref_id=<MargretEdeh>' id='book__python' name='Python Books' />
<Links link='https://background.zuri.team' id='pitch' name='Background Check for Coders' />
<Links link='https://books.zuri.team/design-rules' id='book__design' name='Design Book' />
<Links link='/contact' id='contact' name='Contacts'/>
<SocialLinks/>
   <Footer/>   
    </div>
  )
}
