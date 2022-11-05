import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='form'>
    <div className='heading'>
    <h1> Contact Me</h1>
    <p className='ptag1'>Hi there, contact me to ask me about anything you have in mind.</p>
    </div>
    <section className='the-form'>
      <form className='inputfield'>
        <div className='small1'>
        <div className='small'>
        <label htmlFor='input' >First Name</label> 
        <input type='text' name='firstName' className='name-input' placeholder='Enter your first name'/>

        </div>
        <div className='small'>
        <label htmlFor='inputfield'>Last name </label>
       <input type='text' name='lastname' className='name-input' placeholder='Enter your last name'/>

        </div>


        </div>
        
       <div className='large'>
       <label htmlFor='email'>Email</label>
       <input type='email' name='email' className='large-input' placeholder='yourname@gmail.com'/>
       </div>
      <div className='large'>
      <label htmlFor='message'>Message</label>
       <textarea type='text' name='message'  className='large-inputt' placeholder='Send me a message and i will reply as soon as possible'/>

      </div>
      <div className='largee'>
      <input type='checkbox' name='checkbox' className='checkbox' />
       <label htmlFor='checkbox'>You agree to providing your data to MargretEdeh who may contact you</label>
      </div>
     <button className='buton'>Send message</button>
      
      </form>
    </section>
    </div>
  )
}
