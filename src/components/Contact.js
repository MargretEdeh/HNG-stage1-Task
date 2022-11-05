import React, {useRef} from 'react'
import './contact.css'
import {useForm } from "react-hook-form"


export default function Contact() {
  const formref= useRef(null)
  const {register, handleSubmit, formState:{errors}}= useForm();
  const onSubmit= (data, event)=>{
    let form = event.target;
    form.reset();
    console.log(data)
  }
  return (
    <div className='form'>
    <div className='heading'>
    <h1> Contact Me</h1>
    <p className='ptag1'>Hi there, contact me to ask me about anything you have in mind.</p>
    </div>
    <section className='the-form'>
      <form  ref={formref} onSubmit={handleSubmit(onSubmit)} className='inputfield'>
        <div className='small1'>
        <div className='small'>
        <label htmlFor='input' >First Name</label> 
        <input type='text' name='firstName' className='name-input'
        {...register("firstName", {required: true, maxLength:15 })} placeholder='Enter your first name'/>
        {errors.firstName && <p className='red'>Please check the First Name</p>}
      
        </div>
        <div className='small'>
        <label htmlFor='inputfield'>Last name </label>
       <input type='text' name='lastname' className='name-input'
        {...register("lastName", {required: true, maxLength:15 })} placeholder='Enter your last name'/>
        {errors.lastName && <p className='red'>Please check the last Name</p>}
       
        </div>


        </div>
        
       <div className='large'>
       <label htmlFor='email'>Email</label>
       <input type='email' name='email' className='large-input'placeholder='yourname@gmail.com'
        {...register("email", {required: true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
        {/* })} /> */}
        {errors.email && <p className='red'>Please check the email</p>}
       </div>
      <div className='large'>
      <label htmlFor='message'>Message</label>
       <textarea type='text' name='message'  className='large-inputt'
        {...register("message", {required: true, maxLength:15 })} placeholder='Send me a message and i will reply as soon as possible'/>
        {errors.message && <p className='red'>Please check the message</p>}
        
      </div>
      <div className='largee'>
      <input type='checkbox' name='checkbox'  {...register("checkbox", {required: true })} className='checkbox' />
       <label htmlFor='checkbox'>You agree to providing your data to MargretEdeh who may contact you</label>
       {errors.message && <p className='red'>Please check the box</p>}

      </div>
     <button type='submit' className='buton'>Send message</button>
      
      </form>
    </section>
    </div>
  )
}
