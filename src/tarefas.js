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
    const maiorId = tarefas.reduce((maior, t) => Math.max(maior,t.id), 0)
    const novoId = maiorId + 1;
    const novaTarefa = {id: novoId, titulo: titulo, prioridade: prioridade, realizada: false, dataCriacao: new Date()}
    return [...tarefas, novaTarefa]
}


export const tituloValido = (titulo) => titulo.trim().length > 3

export const buscarPorTitulo = (tarefas, busca) => {
        const pesquisarTarefa = tarefas.filter(a => a.titulo.toLowerCase().includes(busca.toLowerCase()))
   return pesquisarTarefa
}

export const desfazerTarefa = (tarefas, id) => {
    return tarefas
        .map(tarefa => {
            if (tarefa.id === id) {
                return { ...tarefa, realizada: false }
            } else {
                return tarefa
            }
        })

}

export const ordenarPorPrioridade = (tarefas) => {
    const ordem = {alta: 1, media: 2, baixa: 3}
    return [...tarefas].sort((a, b) => ordem[a.prioridade] - ordem[b.prioridade])
}