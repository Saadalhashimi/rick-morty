import React from 'react'

const Modal = ({character,setOpen}) => {
  return (
    <>
    <div className='overlay'></div>
    <div className='modal-container'>
      <button onClick={()=> setOpen(false)}>X</button>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name}/>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
    </div>
    </>
  )
}

export default Modal