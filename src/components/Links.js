import React from 'react'
import './links.css'

export default function Links(props) {
  return (
    <div className='links-section'>
            <a href={props.ink} id={props.id} > {props.name} </a>
       

    </div>
  )
}
