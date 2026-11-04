import {proximoId} from "./dados.js"


export const concluirTarefa = (tarefas, id) => {
    return tarefas
        .map(tarefa => {
            if (tarefa.id === id) {
                return { ...tarefa, realizada: true }
            } else {
                return tarefa
            }
        })
}

export const removerTarefa = (tarefas, id) => {
    return tarefas.filter(tarefa => tarefa.id !== id)
}

export const adicionarTarefa = (tarefas, titulo, prioridade) => {
    const novaTarefa = {id: proximoId(), titulo: titulo, prioridade: prioridade, realizada: false, dataCriacao: new Date()}
    return [...tarefas, novaTarefa]
}