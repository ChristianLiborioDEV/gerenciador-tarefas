import { useState, useEffect } from 'react';
import ItemTarefa from "./componentes/ItemTarefa.jsx"
import { tarefas as tarefasIniciais } from "./dados.js"
import { concluirTarefa, removerTarefa, adicionarTarefa, buscarPorTitulo, desfazerTarefa, ordenarPorPrioridade } from './tarefas.js';
import Formulario from './componentes/Formulario.jsx';

const App = () => {

    const [tarefas, setTarefas] = useState(() => {
        const salvas = localStorage.getItem("tarefas")
        return salvas ? JSON.parse(salvas) : tarefasIniciais
    })

    const [busca, setBusca] = useState("")
    const [somentePendentes, setSomentePendentes] = useState(false)
    const [ordenado, setOrdenado] = useState(false)

    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }, [tarefas])

    const handleRemover = (id) => {
        setTarefas(removerTarefa(tarefas, id))
    }

    const handleConcluir = (id) => {
        setTarefas(concluirTarefa(tarefas, id))
    }

    const handleAdicionar = (titulo, prioridade) => {
        setTarefas(adicionarTarefa(tarefas, titulo, prioridade))
    }

    const handleDesfazer = (id) => {
        setTarefas(desfazerTarefa(tarefas, id))
    }


    const pendentes = tarefas.filter(tarefa => !tarefa.realizada).length

    const resultadoBusca = buscarPorTitulo(tarefas, busca)



    const filtradas = somentePendentes
        ? resultadoBusca.filter(tarefa => !tarefa.realizada)
        : resultadoBusca


    const tarefasVisiveis = ordenado ? ordenarPorPrioridade(filtradas) : filtradas



    return (
        <div>
            <h1>Gerenciador de Tarefas</h1>
            <p id='pendentes'>Pendentes: {pendentes}</p>
            <div id='divEnvio'>
                <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Busque uma tarefa"></input>
                <button onClick={() => setSomentePendentes(!somentePendentes)}>
                    {somentePendentes ? "Mostrar todas" : "Mostrar pendentes"}
                </button>
                <button onClick={() => setOrdenado(!ordenado)}>{ordenado ? "Ordem original" : "Ordenar por prioridade"}</button>
            </div>
            <Formulario onAdicionar={handleAdicionar}/>
            <ul id="listaTarefas">
                {tarefasVisiveis.map(tarefa => (<ItemTarefa
                    key={tarefa.id}
                    id={tarefa.id}
                    titulo={tarefa.titulo}
                    prioridade={tarefa.prioridade}
                    realizada={tarefa.realizada}
                    onConcluir={handleConcluir}
                    onRemover={handleRemover}
                    onDesfazer={handleDesfazer} />))}
            </ul>
        </div>
    )
}

export default App