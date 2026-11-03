import {tarefas} from "./src/dados.js"
import {marcarRealizada, removerTarefa} from "./tarefas.js"


export const renderizarTarefas = (arrayTarefas) => {
    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    arrayTarefas.forEach(tarefa => {
        const item = document.createElement("li");
        item.innerHTML = `
        <span>${tarefa.titulo} — ${tarefa.prioridade}</span>
        <div>
        <button class="btn-concluir">Concluir</button>
        <button class="btn-remover">Remover</button>
        </div>
`;
        const btnConcluir = item.querySelector(".btn-concluir");
        const btnRemover = item.querySelector(".btn-remover");

        btnConcluir.addEventListener("click", () => {
            // chama marcarRealizada com o id da tarefa
            marcarRealizada(tarefa.id)

            // depois chama renderizarTarefas(tarefas)
            renderizarTarefas(tarefas)
        });

        btnRemover.addEventListener("click", () => {
            // chama removerTarefa com o id da tarefa
            removerTarefa(tarefa.id)
            // depois chama renderizarTarefas(tarefas)
            renderizarTarefas(tarefas)
        });


        item.classList.add(tarefa.prioridade)
        if(tarefa.realizada) {
          item.classList.add("realizada");  
        }
        lista.appendChild(item);
    });
};