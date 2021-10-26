/* eslint-disable no-unused-vars */
import "./App.css";
import "./key";
import Axios from 'axios';
import {useState} from "react";
import RecipePath from "./RecipePath";
function App() {
  const [query,setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [healthLabel, setHealthLabel] = useState("vegan")
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  const url = `https://api.edamam.com/search?q=${query}&app_id=e31e24e5&app_key=9c7c8df5c922de7d005ce3af35a5f25f&health=alcohol-free`;
  

 async function getRecipes(){
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
      <h1  >Food Recipe Making </h1>
      <form className='app__searchForm' onSubmit={onSubmit}>
        <input type="text" className='app__input' placeholder='enter ingredient' value={query} onChange = {(e) => setQuery(e.target.value)}/>
        <input type="submit" value="Search" className='app__submit'  />


        <select className='app__healthLabels'>
          <option  onClick={()=> setHealthLabel('vegan')}>Vegan</option>
          <option  onClick={()=> setHealthLabel('vegitirian')}>Vegitirian</option>
          <option  onClick={()=> setHealthLabel('dairyfree')}>Dairy Free</option>
          <option  onClick={()=> setHealthLabel('gluttenfree')}>Glutten Free</option>
          <option  onClick={()=> setHealthLabel('wheatfree')}>Wheat Free'</option>
          <option onClick={()=> setHealthLabel('eggfree')}>Egg Free'</option>
          <option  onClick={()=> setHealthLabel('peanutfree')}>Peanut Free'</option>
        </select>
      </form>
     

     
      <div className='app__recipes'>
      {recipes.map((recipe) => {
        return <RecipePath recipe={recipe}/>
      })}
      </div>
    </div>
  );
}

export default App;
