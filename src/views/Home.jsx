import { Container } from 'react-bootstrap'
import pikachu from '../img/pikachu.png'

const Home = () => {
  return (
    <>
    <Container className='m-3'>
        <h1>Bienvenido Maestro pokemon</h1>
        <img src= { pikachu } alt="Imagen de pikachu color amarillo" />
    </Container>
    </>
    
  )
}

export default Home