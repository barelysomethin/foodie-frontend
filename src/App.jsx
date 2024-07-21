
import './App.css'
import FoodCard from './components/Foodcard';
import Greeting from './components/Greeting';
import CategorySelector from './components/Category';


function App() {


  return (
    <>
   
    <Greeting/>
    <CategorySelector/>
    <div className='recommend'>recommendations</div>
    <FoodCard />
    <button className='chosen'>your choices</button>
  
     
    </>
  )
}

export default App;
