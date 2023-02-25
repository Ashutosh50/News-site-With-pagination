import react ,{useContext} from 'react';
import Stories from './Stories';
import Search from './Search';
import Pagination from './Pagination';
import "./App.css"
//import {AppContext} from './Context';
import {useGlobalContext} from "./Context"
 const App =()=> {
  
  return (
    <div className="App">
      <div>Welcome to tech news</div> 
       <Search/>
       <Pagination/>
       <Stories/>
    </div>
  );
}

export default App;
 