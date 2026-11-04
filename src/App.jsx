import { useState } from 'react';
import ItemTarefa from "./componentes/ItemTarefa.jsx"
import { tarefas as tarefasIniciais } from "./dados.js"
import { concluirTarefa, removerTarefa, adicionarTarefa } from './tarefas.js';
import Formulario from './componentes/Formulario.jsx';

const App = () => {

    const [tarefas, setTarefas] = useState(tarefasIniciais)

    const handleRemover = (id) => {
        setTarefas(removerTarefa(tarefas, id))
    }

    const handleConcluir = (id) => {
        setTarefas(concluirTarefa(tarefas, id))
    }

    const handleAdicionar = (titulo, prioridade) => {
    setTarefas(adicionarTarefa(tarefas, titulo, prioridade))
}
    return (
        <div>
            <h1>Gerenciador de Tarefas</h1>
            <Formulario onAdicionar={handleAdicionar}/>
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