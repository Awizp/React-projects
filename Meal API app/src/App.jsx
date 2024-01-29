import { useState, useEffect } from "react"
import useFetch from "./hooks/useFetch"

import './App.css'

function App() {

  const [inputValue, setinutValue] = useState("")
  const [url, setUrl] = useState(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)

  const customUrl = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
    console.log(url)
  }

  const meals = useFetch(url)
  console.log(meals)

  return (
    <>
      <div className="content">
        <h1>Just put a character to fetch the all meals with start of this letter</h1>
        <input type="text"
          value={inputValue}
          onChange={(e) => setinutValue(e.target.value)}
        />
        <button onClick={customUrl}>Get Meals</button>
      </div>

      <div className="meals">
        {meals.map((meal) => (
          <div className="card" key={meal.idMeal}>
            <p>{meal.strMeal}</p>
            <img src={meal.strMealThumb} alt="meal-img" />
            <a href={meal.strYoutube}>Prepare</a>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
