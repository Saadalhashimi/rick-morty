import React,{useState} from 'react'

const Header = (props) => {
   
    console.log('props', props)
  return (
    <div className='header'>
        <input type='search' onChange={props.onSearchChange} placeholder='Search'/>
    </div>
  )
}

export default Header