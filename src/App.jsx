import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import PokemonList from './views/PokemonList' 
import PokemonDetail from './views/PokemonDetail'
import  NotFound  from './views/NotFound'

import NavBar from './components/NavBar'
import './App.css'



function App() {
 
  return (
    <>
     <BrowserRouter>
      <NavBar />
       <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/pokemones/" element={ <PokemonList /> }/>
        <Route path="/pokemones/:name" element={ <PokemonDetail /> }/>
        <Route path='*' element={<NotFound />} />
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
