import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Navegacion } from './Componente/Navegacion'
import { ImagenInicio } from './Componente/ImagenInicio'
import { Porque } from './Componente/Porque'
import { CardInves } from './Componente/CardInves'
import { Card2 } from './Componente/Card2'
import { Card3 } from './Componente/Card3'
import { FooterP } from './Componente/FooterP'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Navegacion/>
        <ImagenInicio/>
        <Porque/>
        <CardInves/>
        <Card2/>
        <Card3/>
        <FooterP/>
      </div>
      
  
  )
}

export default App
