import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import React,{useState} from 'react'
import Footer from './components/footer/Footer';
function App() {
  const [searchValue,setSearchValue]= useState('')
  const [pageNumber,setPageNumber] = useState(1)
  

   console.log(searchValue)
          

   const onSearchChange = (e)=>{
       const newSearchValue =e.target.value
       setSearchValue(newSearchValue)
   }

   const nextPage = ()=>{
     setPageNumber(pageNumber + 1)
     
   }
   const previousPage = ()=>{
    setPageNumber(pageNumber - 1)
   
  }

   
  return (
    <div className="App">
     <Header onSearchChange={onSearchChange} />
     <Main className='main' searchValue={searchValue}  pageNumber={pageNumber} />
     <Footer nextPage={nextPage}  previousPage={previousPage}/>
    </div>
  );
}

export default App;
