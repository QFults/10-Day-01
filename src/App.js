import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    axios.get('https://www.omdbapi.com/?apikey=trilogy&t=Rocky%20Horror')
      .then(({ data }) => {
        setMovie(data)
        setTimeout(() => {
          axios.get('https://www.omdbapi.com/?apikey=trilogy&t=Goodfellas')
            .then(({ data: movie }) => setMovie(movie))
        }, 3000)
      })
  }, [])

  return (
    <h1>{movie.Title}</h1>
  )
}

export default App
