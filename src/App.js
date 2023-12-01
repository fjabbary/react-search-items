import './App.css';
import React, { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

const App = () => {
  console.log('object');
  const [monsters, setMonsters] = useState([])
  const [initialMonsters, setInitialMonsters] = useState([])
  const [title, setTitle] = useState("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setMonsters(users)
        setInitialMonsters(users)
      })
  }, [])


  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    const filteredArr = initialMonsters.filter(monster => monster.name.toLowerCase().includes(query))
    setMonsters(filteredArr)
  }

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <h1 className='app-title'>Monsters Rolodex ({monsters.length})</h1>
      <SearchBox handleSearch={handleSearch} placeholder="Search Monsters" className="monsters-search-box" />
      <SearchBox handleSearch={handleTitle} placeholder="Title Monsters" className="title-search-box" />
      <br />
      <CardList monsters={monsters} />
    </div>
  )
}

export default App;
