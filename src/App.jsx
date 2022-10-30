import { Container } from 'react-bootstrap'
import Formulario from './componets/Formulario'
import ListadoBebidas from './componets/ListadoBebidas'
import ModalBebida from './componets/ModalBebida'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className='py-5'>
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className='mt-5'>
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
