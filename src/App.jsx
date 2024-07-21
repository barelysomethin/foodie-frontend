
import './App.css'
import FoodCard from './components/Foodcard';
import Greeting from './components/Greeting';
import CategorySelector from './components/Category';


function App() {


  return (
    <>
   
    <Greeting/>
    <CategorySelector/>
    <div className='recommend'>your recommendations</div>
    <FoodCard />
    <button className='chosen'>previous choices</button>
  
     
    </>
  )
}

export default App;
