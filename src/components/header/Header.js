import React from 'react'

const Header = (props) => {
   

  return (
    <div className='header'>
        <input type='search' onChange={props.onSearchChange} placeholder='Search'/>
    </div>
  )
}

export default Header