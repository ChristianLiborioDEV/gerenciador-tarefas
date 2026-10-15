
// export nomeado -> import com chaves, export default -> import sem chaves, focar em exports nomeados
import {tarefas, proximoId} from "./dados.js"

/* -------------------------------------------------------------------------------------------------------------------------------------*/
// Adicionar nova tarefa
export const adicionarTarefa = (titulo, prioridade) => {
    const novaTarefa = {id: proximoId(), titulo: titulo, prioridade: prioridade, realizada: false, dataCriacao: new Date()}
    tarefas.push(novaTarefa)
    return novaTarefa
}

/* -------------------------------------------------------------------------------------------------------------------------------------*/
// Remover tarefas pelo id
export const removerTarefa = (id) => {
    const indice = tarefas.findIndex(a => a.id === id)
    if (indice === -1) return null;
    return tarefas.splice(indice, 1)[0];
}

/* -------------------------------------------------------------------------------------------------------------------------------------*/
// Marcar tarefa como concluida
export const marcarRealizada = (id) => {
    const tarefaIndice = tarefas.findIndex(a => a.id === id)
    if (tarefaIndice === -1) return null;
    tarefas[tarefaIndice] = {...tarefas[tarefaIndice], realizada: !tarefas[tarefaIndice].realizada}
    return tarefas[tarefaIndice]
}

/* -------------------------------------------------------------------------------------------------------------------------------------*/
//Filtrar por Status
export const filtrarPorStatus = (feita) => {
    const tarefaFiltro = tarefas.filter(a => a.realizada === feita)
    return tarefaFiltro
}

/* -------------------------------------------------------------------------------------------------------------------------------------*/
//Ordenar a Prioridade
export const ordenarPorPrioridade = () => {
    const ordem = { alta: 1, media: 2, baixa: 3 };
    const ordenarTarefas = [...tarefas].sort((a, b) => ordem[a.prioridade] - ordem[b.prioridade])
    return ordenarTarefas
}

/* -------------------------------------------------------------------------------------------------------------------------------------*/
//Buscar por titulo
export const buscarPorTitulo = (titulo) => {
    const tarefaTitulo = tarefas.filter(a => a.titulo.toLowerCase().includes(titulo.toLowerCase()))
    return tarefaTitulo
}
/* -------------------------------------------------------------------------------------------------------------------------------------*/
