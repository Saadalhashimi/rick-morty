import React from 'react'

const Footer = ({nextPage,previousPage}) => {
  return (
    <div className='footer'>
        <button onClick={previousPage}><i class="fa-solid fa-chevron-left fa-2x"></i></button>
        <button onClick={nextPage}> <i class="fa-solid fa-chevron-right fa-2x"></i></button>
        
       
    </div>
  )
}

export default Footer