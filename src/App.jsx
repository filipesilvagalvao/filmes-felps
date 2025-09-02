import './App.css'
import { GlobalStorage } from './GlobalContext'
import Categories from './components/Categories'
import Header from './components/Header'
import Home from './components/Home'
import Slider from './components/Slider'
import Movie from './components/Movie'

function App() {
  return (

    <GlobalStorage>
      <>
        <Header />
        <Slider />
        <Categories />
        <Home />
        {/* <Movie /> */}
      </>
    </GlobalStorage>
  )
}

export default App
