export const tarefas = [
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
export const proximoId = gerarId();

