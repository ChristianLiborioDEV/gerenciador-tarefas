import { useState } from 'react';
import ItemTarefa from "./ItemTarefa.jsx"
import { tarefas as tarefasIniciais } from "./dados.js"

const App = () => {

    const [tarefas, setTarefas] = useState(tarefasIniciais)

    const concluirTarefa = (id) => {
        const tarefaConcluida = tarefas
            .map(tarefa => {
                if (tarefa.id === id) {
                    return { ...tarefa, realizada: true }
                } else {
                    return tarefa
                }
            })
        setTarefas(tarefaConcluida)
    }


    const removerTarefa = (id) => {
        const tarefasRestantes = tarefas.filter(tarefa => tarefa.id !== id)
        setTarefas(tarefasRestantes)
    }


    return (
        <div>
            <h1>Gerenciador de Tarefas</h1>
            <ul id="listaTarefas">
                {tarefas.map(tarefa => (<ItemTarefa
                    key={tarefa.id}
                    id={tarefa.id}
                    titulo={tarefa.titulo}
                    prioridade={tarefa.prioridade}
                    realizada={tarefa.realizada}
                    onConcluir={concluirTarefa}
                    onRemover={removerTarefa} />))}
            </ul>
        </div>
    )
}

export default App