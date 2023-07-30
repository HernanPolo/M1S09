import { useState } from "react"
import './App.css'
import CardAdicionar from './component/CardAdicionar'

function App(){

  const [listaTarefas, setListaTarefas]= useState([
    {texttoTarefa:"tarefa 1", finalizado:false }
  ])
return (
  <>
      <CardAdicionar/>
 </>
)
}
export default App
