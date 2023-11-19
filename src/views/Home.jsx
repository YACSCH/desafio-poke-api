import { Container } from 'react-bootstrap'
import pikachu from '../img/pikachu.png'

const Home = () => {
  return (
   
    <div className='pokemon-list'>
        <h1>Bienvenido Maestro pokemon</h1>
        <img src= { pikachu } alt="Imagen de pikachu color amarillo" />
    </div>
  
    
  )
}

export default Home