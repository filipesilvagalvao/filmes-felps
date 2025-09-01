import './App.css'
import Categories from './components/Categories'
import Header from './components/Header'
import Home from './components/Home'
import Player from './components/Player'
import Slider from './components/Slider'
import Movie from './components/Movie'

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Home />
      {/* <Movie /> */}
    </>
  )
}

export default App
