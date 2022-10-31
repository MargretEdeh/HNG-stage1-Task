import React from 'react'
import './links.css'
import giticon from './giticon.svg'
import slack from './slack.svg'

export default function Links() {
  return (
    <div className='links-section'>
        <div className='links' >
            <a href='https://twitter.com/EdehMargret' id=''>Twitter Link</a>
        </div>
       
        <div className='links' >
            <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
        </div>
        <div className='links' >
            <a href=' http://books.zuri.team ' id='books'>Zuri Books</a>
        </div>
        <div className='links' >
            <a href='https://books.zuri.team/python-for-beginners?ref_id=<MargretEdeh> ' id='book__python'>Zuri Books</a>
        </div>
        <div className='links' >
            <a href='https://background.zuri.team ' id='pitch'>Background check</a>
        </div>
        <div className='links' >
            <a href='https://books.zuri.team/design-rules ' id='book__design'>Zuri design rule book</a>
        </div>
        <div className='social-section'>
            <div className='social-logo'>
                <img src={giticon} className='logo'/>
                <img src={slack} className='logo'/>


            </div>

        </div>

    </div>
  )
}
