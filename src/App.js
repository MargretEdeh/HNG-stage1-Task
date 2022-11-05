import React from 'react'
import "./App.css"
// import Footer from './components/Footer'
import Header from './components/Header'
// import shareAvatar from "./components/shareAvatar.svg"
import Links from './components/Links'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import SocialLinks from './components/SocialLinks'
import {Route, Routes, Navigate } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './Home'


export default function App() {
  return (
    <div className='App'>
 {/* <Header/>
<Links link='https://twitter.com/EdehMargret' id='twitter' name='Twitter Link'/>
<Links link='https://training.zuri.team/' id='btn__zuri' name='Zuri Team' />
<Links link=' http://books.zuri.team' id='books' name='Zuri Books'/>
<Links link='https://books.zuri.team/python-for-beginners?ref_id=<MargretEdeh>' id='book__python' name='Phython Books' />
<Links link='https://background.zuri.team' id='pitch' name='Background Check for Coders' />
<Links link='https://books.zuri.team/design-rules' id='book__design' name='Design Book' />
<Links link='/contact' id='contact' name='Contacts'/>

<SocialLinks/> */}
   {/* <Footer/>    */}
   {/* <Home/> */}
<Routes>
  <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/> }/>
    {/* <Route path='/redirect' element={ <Navigate to='/contact'/>}/> */}
   </Routes>
    </div>
  )
}
