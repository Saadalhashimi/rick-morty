import React from 'react'
import { Dropdown,Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
   

  return (
    <div className='header'>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    Species
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Human</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Alien</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Unknown</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    <input type='search' onChange={props.onSearchChange} placeholder='Search'/>

    <div className='checkbox'>
    <Form.Check aria-label="option 1" label="Alive" className='checkbox-element'/>
    <Form.Check aria-label="option 2" label= 'Dead' className='checkbox-element'/>
    </div>

    </div>
  )
}

export default Header