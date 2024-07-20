import { useState } from 'react'
import './App.css'
import FoodCard from './components/Foodcard';
import Greeting from './components/Greeting';
import CategorySelector from './components/Category';


function App() {


  return (
    <>
   
    <Greeting/>
    <FoodCard />
    <CategorySelector/>
  
     
    </>
  )
}

export default App;
