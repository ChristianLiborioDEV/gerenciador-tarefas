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


export const tituloValido = (titulo) => titulo.trim().length > 3

export const buscarPorTitulo = (tarefas, busca) => {
        const pesquisarTarefa = tarefas.filter(a => a.titulo.toLowerCase().includes(busca.toLowerCase()))
   return pesquisarTarefa
}