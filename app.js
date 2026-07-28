const tarefas = [
    {id: 1, titulo: "Limpar chão", prioridade: "alta", realizada: false, dataCriacao: new Date()},
    {id: 2, titulo: "lavar fogão", prioridade: "media", realizada: true, dataCriacao: new Date()},
    {id: 3, titulo: "Arrumar cama", prioridade: "baixa", realizada: true, dataCriacao: new Date()},
    {id: 4, titulo: "Levar o cachorro para passear", prioridade: "alta", realizada: false, dataCriacao: new Date()}
];


/* -------------------------------------------------------------------------------------------------------------------------------------*/
//criar Id para tarefa
const gerarId = () => {
    let count = 4;
    return () => {
        count++;
        return count;
    };
};
const proximoId = gerarId();

/* -------------------------------------------------------------------------------------------------------------------------------------*/
// Adicionar nova tarefa
const adicionarTarefa = (titulo, prioridade) => {
    const novaTarefa = {id: proximoId(), titulo: titulo, prioridade: prioridade, realizada: false, dataCriacao: new Date()}
    tarefas.push(novaTarefa)
    return novaTarefa
}
adicionarTarefa("Estudar JavaScript", "alta");

/* -------------------------------------------------------------------------------------------------------------------------------------*/
// Remover tarefas pelo id
const removerTarefa = (id) => {
    const indice = tarefas.findIndex(a => a.id === id)
    if (indice === -1) return null;
    return tarefas.splice(indice, 1)[0];
}
//removerTarefa(15)

/* -------------------------------------------------------------------------------------------------------------------------------------*/
// Marcar tarefa como concluida
const marcarRealizada = (id) => {
    const tarefaIndice = tarefas.findIndex(a => a.id === id)
    if (tarefaIndice === -1) return null;
    tarefas[tarefaIndice] = {...tarefas[tarefaIndice], realizada: !tarefas[tarefaIndice].realizada}
    return tarefas[tarefaIndice]
}
//console.log(marcarRealizada(2));

/* -------------------------------------------------------------------------------------------------------------------------------------*/
//Filtrar por Status
const filtrarPorStatus = (feita) => {
    const tarefaFiltro = tarefas.filter(a => a.realizada === feita)
    return tarefaFiltro
}

/* -------------------------------------------------------------------------------------------------------------------------------------*/
//Ordenar a Prioridade
const ordenarPorPrioridade = () => {
    const ordem = { alta: 1, media: 2, baixa: 3 };
    const ordenarTarefas = [...tarefas].sort((a, b) => ordem[a.prioridade] - ordem[b.prioridade])
    return ordenarTarefas
}
//console.log(ordenarPorPrioridade())

/* -------------------------------------------------------------------------------------------------------------------------------------*/
//Buscar por titulo
const buscarPorTitulo = (titulo) => {
    const tarefaTitulo = tarefas.filter(a => a.titulo.toLowerCase().includes(titulo.toLowerCase()))
    return tarefaTitulo
}

//console.log(buscarPorTitulo("lavar")); 
//console.log(buscarPorTitulo("LAVAR")); 

/* -------------------------------------------------------------------------------------------------------------------------------------*/
//Função que vai receber os dados vindo do html
const renderizarTarefas = (arrayTarefas) => {
    const lista = document.getElementById("listaTarefas")
    lista.innerHTML = "";
    const item = document.createElement("li")
    innerHTML = `<span>${tarefas.titulo}</span>`
    lista.appendChild(item)
}

renderizarTarefas(tarefas)