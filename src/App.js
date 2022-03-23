import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import React,{useState} from 'react'
function App() {
  const [searchValue,setSearchValue]= useState('')
   console.log(searchValue)
          

   const onSearchChange = (e)=>{
       const newSearchValue =e.target.value
       setSearchValue(newSearchValue)
   }
  return (
    <div className="App">
     <Header onSearchChange={onSearchChange} />
     <Main className='main' searchValue={searchValue}  />
    </div>
  );
}

export default App;
