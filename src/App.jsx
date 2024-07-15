import { useState } from 'react'
import './App.css'
import Foodcard from './components/Foodcard';
import Greeting from './components/Greeting';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <div className='container'>
    <Greeting/>
    <Foodcard />
    <Footer/>
    </div>
     
    </>
  )
}

export default App;
