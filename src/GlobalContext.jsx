import { createContext, useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API
const authorization = import.meta.env.VITE_API_AUTHORIZATION
const apiKey = import.meta.env.VITE_API_KEY

const genreMovies = {
  28: "Ação",
  12: "Aventura",
  16: "Animação",
  35: "Comédia",
  80: "Crime",
  99: "Documentário",
  18: "Drama",
  10751: "Família",
  14: "Fantasia",
  36: "História",
  27: "Terror",
  10402: "Música",
  9648: "Mistério",
  10749: "Romance",
  878: "Ficção científica",
  10770: "Filme para TV",
  53: "Suspense",
  10752: "Guerra",
  37: "Faroeste"
}
const genreTv = {
  10759: "Ação e aventura",
  16: "Animação",
  35: "Comédia",
  80: "Crime",
  99: "Documentário",
  18: "Drama",
  10751: "Família",
  10762: "Infantil",
  10763: "Notícias",
  10764: "Reality",
  10765: "Ficção científica e fantasia",
  10766: "Novela",
  10767: "Talk Show",
  10768: "Guerra e política",
  37: "Faroeste"
}
export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
     
    const [topMovies, setTopMovies] = useState(null)

    const getTopRatedMovies = async (url, options) => {
        const response = await fetch(url, options)
        console.log(response)
        const data = await response.json()
        console.log(data)
        setTopMovies(data)
    }

    useEffect(() => {
        const topRatedURL = `${moviesURL}?api_key=${apiKey}`

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${authorization}`
            }
        }

        getTopRatedMovies(topRatedURL, options)

    }, [])

    return (
        <GlobalContext.Provider value={{ topMovies, genreMovies, genreTv }}>
            {children}
        </GlobalContext.Provider>
    )
}