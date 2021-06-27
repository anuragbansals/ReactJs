import './App.css';
import './key'
import axios from 'axios'
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const [query,setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  // const [healthLabel, setHealthLabel] =  useState('vegan')

  const YOUR_APP_ID = "3be86d42";
  const YOUR_APP_KEY = "21f19b0498a743b523ec3ca4a4890246"

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const  getRecipes = async () => {
    var result = await axios.get(url);
    setRecipes(result.data.hits)
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Food Recipe Plaza</h1>
      <form className="app_searchForm" onSubmit={onSubmit} >
        <input 
          type="text" 
          placeholder="Enter ingredient" 
          value={query} 
          className="app_input"
          onChange={(e)=> setQuery(e.target.value)} />
        <input className="app_submit" type="submit" value="search" />

        
      </form>
      <div className="app_recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
