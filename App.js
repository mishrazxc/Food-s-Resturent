import Checkout from './components/Checkout';
import Login from './components/Login';
import Registration from './components/Registration';
import Start from './components/Start';
import Food from './components/Food';
import Home from './components/Home';
import './App.css';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);
  let item = null;
  if(page === 0){
    item = <Home setPage = {setPage}/>
  }
  else if(page === 1){
    item = <Registration setPage = {setPage}/>
  }
  else if(page === 2){
    item = <Login setPage = {setPage}/>
  }
  else if(page === 3){
    item = <Start setPage = {setPage}/>
  }
  else if(page === 4){
    item = <Food setPage = {setPage}/>
  }
  else{
    item = <Checkout setPage = {setPage}/>
  }
  return (
    <div className="App">
      <div className='Top'>
      <h1>Food's Restaurant</h1>
      </div>
      {item}
    </div>
  );
}

export default App;
