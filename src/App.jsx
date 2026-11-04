import { useState } from 'react';
import ItemTarefa from "./componente/ItemTarefa.jsx"
import { tarefas as tarefasIniciais } from "./dados.js"
import { concluirTarefa, removerTarefa, adicionarTarefa, tituloValido } from './tarefas.js';

const App = () => {

    const [tarefas, setTarefas] = useState(tarefasIniciais)
    const [titulo, setTitulo] = useState("")
    const [prioridade, setPrioridade] = useState("alta")

    const handleRemover = (id) => {
        setTarefas(removerTarefa(tarefas, id))
    }

    const handleConcluir = (id) => {
        setTarefas(concluirTarefa(tarefas, id))
    }

    const handleAdicionar = () => {
        if (tituloValido(titulo)) {
            setTarefas(adicionarTarefa(tarefas, titulo, prioridade))
            setTitulo("")
        } else {
            alert("Titulo Invalido")
        }

    }

    return (
        <div>
            <h1>Gerenciador de Tarefas</h1>
            <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="Insira o titulo da tarefa" />
            <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baixa">Baixa</option>
            </select>
            <button onClick={handleAdicionar}>Adicionar</button>
            <ul id="listaTarefas">
                {tarefas.map(tarefa => (<ItemTarefa
                    key={tarefa.id}
                    id={tarefa.id}
                    titulo={tarefa.titulo}
                    prioridade={tarefa.prioridade}
                    realizada={tarefa.realizada}
                    onConcluir={handleConcluir}
                    onRemover={handleRemover} />))}
            </ul>
        </div>
    )
}

export default App