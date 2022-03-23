import React,{useState,useEffect} from 'react'
import Modal from '../modal/Modal'

const Main = ({pageNumber,searchValue}) => {
 const [characters,setCharacters] = useState([])
 const [openModal,setOpenModal] = useState(false)
 const [chosenCharacter,setChosenCharacter]= useState({})

 console.log(characters)
 console.log(pageNumber)
 

 const getCharacters = async ()=>{
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    const data = await res.json()
    setCharacters(data.results)
   
}
 useEffect(()=>{
    getCharacters()
 },[characters])

 

 


  return (
    <div  className='character-list'>
     {characters.filter((character)=>{
       return character.name.toLocaleLowerCase().includes(searchValue)
   }).map((character)=>{
         return(
             <div key={character.id} className='character'>
             <img  src={character.image} alt='character' onClick={()=>{
               return (
                setChosenCharacter(character),
                setOpenModal(true))
             }}/>
             <p >{character.name}</p>
             </div>
         )
     })}
     {openModal &&<Modal character={chosenCharacter} setOpen={setOpenModal}/>}
    </div>
  )
}

export default Main