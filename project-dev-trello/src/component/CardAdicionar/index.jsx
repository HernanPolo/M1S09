import { useState } from "react"

function CardAdicionar(props){
 
  const [textoTarefa, setTextoTarefa]= useState("")

  return(
    <div>
    
     <input type="text"value={textoTarefa} onChange={(evento)=>setTextoTarefa(evento.target.value)} placeholder="Digite a tarefa"  />
     <button onClick={()=>props.adicionarTarefa(textoTarefa)}>Adiccionar</button>
    </div>
  )

}


export default CardAdicionar