import React from 'react'
import Boton from './components/Boton'
import Navegation from './components/Navegation'
import ListaPaciente from './pages/ListaPaciente'
import Login from './pages/Login'
import Registrar from './pages/Registrar'

const App = () => {
  return (
    <div>
          <Boton></Boton>
          <Navegation></Navegation>
          <ListaPaciente/>
          <Registrar/>
          <Login/>
    </div>  
    
)
}

export default App