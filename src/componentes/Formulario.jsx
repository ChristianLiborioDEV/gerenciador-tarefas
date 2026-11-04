import { useState } from "react"
import { tituloValido } from "../tarefas"

const Formulario = ({ onAdicionar }) => {
    const [titulo, setTitulo] = useState("")
    const [prioridade, setPrioridade] = useState("alta")

    const handleClick = () => {
        if (tituloValido(titulo)) {
            onAdicionar(titulo, prioridade)
            setTitulo("")
        } else {
            alert("Titulo invalido")
        }
    }

    return (<div>
        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="Insira o titulo da tarefa" />
        <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baixa">Baixa</option>
        </select>
        <button onClick={handleClick}>Adicionar</button>
    </div>)
}

export default Formulario

