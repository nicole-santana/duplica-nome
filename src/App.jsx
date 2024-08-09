import { useState } from 'react'

export function App() {
  const [nome, setNome] = useState("Nicole")
  function handleDuplicar() {
    setNome(nome + "e")
  }
  return (
    <div>
      <h1>Nome: {nome}</h1>
      <button onClick={handleDuplicar}>Acrecentar</button>
    </div>
  )
}
