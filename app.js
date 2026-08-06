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
    alert("acionada")
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

renderizarTarefas(tarefas)

// Pegar os elementos do HTML
const inputTitulo = document.getElementById("tituloTarefa");
const btnAdicionar = document.querySelector("#divEnvio button");

// Evento de clique no botão adicionar
btnAdicionar.addEventListener("click", () => {
    const titulo = inputTitulo.value;
    const prioridadeSelecionada = document.querySelector('input[name="prioridade"]:checked');
    // 1. verificar se titulo não está vazio e se uma prioridade foi selecionada    
    // 2. chamar adicionarTarefa com os valores certos
    // 3. limpar o input (inputTitulo.value = "")
    // 4. chamar renderizarTarefas(tarefas)
    if(titulo.trim().length > 3 && prioridadeSelecionada){
        adicionarTarefa(titulo, prioridadeSelecionada.value)
        inputTitulo.value=""
        renderizarTarefas(tarefas)
    } else {
        alert("Titulo inválido ou prioridade não selecionada")
    }
});
