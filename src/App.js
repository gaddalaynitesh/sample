import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookData from './data.json'


function App(){
  return <div className="App">
    <SearchBar placeholder="search something" data={BookData}/>
  </div>;
}

export default App;
