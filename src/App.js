import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import React,{useState,useEffect} from 'react'
import Footer from './components/footer/Footer';
function App() {
 const [url,setUrl] = useState(`https://rickandmortyapi.com/api/character/`)
 const[pageInfo,setPageInfo]= useState({})
 const [characters,setCharacters] = useState([])
 const [searchValue,setSearchValue]= useState('')
 const [filteredCharacters,setFilteredCharacters]=useState(characters)
 console.log('filtered',filteredCharacters)
 console.log('characters from app',characters)


  
 useEffect(()=>{
  const getCharacters = async ()=>{
    const res = await fetch(url)
    const data = await res.json()
    setCharacters(data.results)
    setFilteredCharacters()
    setPageInfo(data.info)
    
   
}
    getCharacters()
 },[url])
      

   const onSearchChange = (e)=>{
       const newSearchValue =e.target.value
       setSearchValue(newSearchValue)
   }

   const nextPage = ()=>{
     if (pageInfo.next===null) return null
     else setUrl(pageInfo.next)

     
   }
   const previousPage = ()=>{
    if (pageInfo.prev===null) return null
    else setUrl(pageInfo.prev)
   
  }
  
  

 

 
  return (
    <div className="App">
     <Header onSearchChange={onSearchChange} />
     <Main className='main' searchValue={searchValue}  characters={characters}  />
     <Footer  next= {nextPage} previous = {previousPage}/>
    </div>
  );
}

export default App;
