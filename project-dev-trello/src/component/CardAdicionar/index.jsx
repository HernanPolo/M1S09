import { useState } from "react"

function CardAdicionar(){
 
  const [textoTarefa, setTextoTarefa]= useState("")

  return(
    <div>
     <input type="text"value={textoTarefa} onChange={(evento)=>setTextoTarefa(evento.target.value)} placeholder="Digite a tarefa"  />
     <button onClick={()=>{}}>Adiccionar</button>
    </div>
  )

}


export default CardAdicionar