import React from 'react'

const Footer = ({next,previous}) => {
  return (
    <div className='footer'>
        <button onClick={previous}><i className="fa-solid fa-chevron-left fa-2x"></i></button>
        <button onClick={next}> <i className="fa-solid fa-chevron-right fa-2x"></i></button>
        
       
    </div>
  )
}

export default Footer