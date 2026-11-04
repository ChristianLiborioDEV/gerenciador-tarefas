import { useState } from 'react';
import ItemTarefa from "./ItemTarefa.jsx"
import { tarefas as tarefasIniciais } from "./dados.js"

const App = () => {

    const [tarefas, setTarefas] = useState(tarefasIniciais)

    const concluirTarefa = (id) => {
        const tarefaConcluida = tarefas
            .map(tarefa => {
                if (tarefa.id === id) {
                    return {...tarefa, realizada: true}
                } else {
                    return tarefa
                }
             }) 
             
             console.log("ok")

        setTarefas(tarefaConcluida)
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
                    onConcluir={concluirTarefa} />))}
            </ul>
        </div>
    )
}

export default App