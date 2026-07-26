const tarefas = [
    {id: 1, titulo: "Limpar chão", prioridade: "alta", realizada: false, dataCriacao: new Date()},
    {id: 2, titulo: "lavar fogão", prioridade: "media", realizada: true, dataCriacao: new Date()},
    {id: 3, titulo: "Arrumar cama", prioridade: "baixa", realizada: true, dataCriacao: new Date()},
    {id: 4, titulo: "Levar o cachorro para passear", prioridade: "alta", realizada: false, dataCriacao: new Date()}
];


//criar Id para tarefa
const gerarId = () => {
    let count = 4;
    return () => {
        count++;
        return count;
    };
};

const proximoId = gerarId();

// Adicionar nova tarefa
const adicionarTarefa = (titulo, prioridade) => {
    const novaTarefa = {id: proximoId(), titulo: titulo, prioridade: prioridade, realizada: false, dataCriacao: new Date()}
    tarefas.push(novaTarefa)
    return novaTarefa
}

adicionarTarefa("Estudar JavaScript", "alta");

// Remover tarefas pelo id
const removerTarefa = (id) => {
    const indice = tarefas.findIndex(a => a.id === id)
    if (indice === -1) return null;
    return tarefas.splice(indice, 1)[0];
}

removerTarefa(3)
//console.log(tarefas);

// Marcar tarefa como concluida
const marcarRealizada = (id) => {
    const tarefaStatus = tarefas.find(a => a.id === id)
    return (tarefaAtualizada) => ({...tarefas, realizada: tarefaStatus.realizada? false : true})
}

console.log(tarefas[0].realizada); // false
marcarRealizada(2);
console.log(tarefas[0].realizada); // true