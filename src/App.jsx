import {useState} from 'react';
import ItemTarefa from "./ItemTarefa.jsx"
import {tarefas as tarefasIniciais} from "./dados.js"

const App = () => {

    const [tarefas, setTarefas] = useState(tarefasIniciais)


    return (
        <div>
            <h1>Gerenciador de Tarefas</h1>
            <ul id="listaTarefas">
             {tarefas.map(tarefa => (<ItemTarefa
             key={tarefa.id}
             id={tarefa.id}
             titulo={tarefa.titulo}
             prioridade={tarefa.prioridade}
             realizada={tarefa.realizada}/>))}
            </ul>
        </div>
    )
}

export default App