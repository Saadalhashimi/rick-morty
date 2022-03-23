import React,{useState,useEffect} from 'react'

const Main = (props) => {
 const [characters,setCharacters] = useState([])
 

 const getCharacters = async ()=>{
    const res = await fetch(`https://rickandmortyapi.com/api/character/`)
    const data = await res.json()
    setCharacters(data.results)
   
}
 useEffect(()=>{
    getCharacters()
 },[])

 

 


  return (
    <div  className='character-list'>
     {characters.filter((character)=>{
       return character.name.toLocaleLowerCase().includes(props.searchValue)
   }).map((character)=>{
         return(
             <div key={character.id} className='character'>
             <img  src={character.image} alt='character'/>
             <p >{character.name}</p>
             </div>
         )
     })}
    </div>
  )
}

export default Main