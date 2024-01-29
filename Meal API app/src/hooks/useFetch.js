import { useState, useEffect } from 'react'
import axios from "axios"

const useFetch = (url) => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios.get(url).then(res => setMeals(res.data.meals)).catch((err) => console.error(err))
        }, 2000)
    }, [url])

    return meals
}

export default useFetch
