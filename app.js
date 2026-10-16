import {tarefas} from "./dados.js"
import {adicionarTarefa, buscarPorTitulo, filtrarPorStatus} from "./tarefas.js"
import {renderizarTarefas} from "./interface.js"


// botão adicionar
const inputTitulo = document.getElementById("tituloTarefa");
const btnAdicionar = document.querySelector("#divEnvio button");


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



const inputPesquisa = document.getElementById("buscarTarefa")
const btnPesquisa = document.getElementById("pesquisa");
const btnMostrarPendentes = document.getElementById("pendentes")

btnMostrarPendentes.addEventListener("click", () => {
    const tarefaEmAberto = filtrarPorStatus(false)
    renderizarTarefas(tarefaEmAberto)
})

btnPesquisa.addEventListener("click", () => {
    const tarefaPesquisar = inputPesquisa.value;
    if(tarefaPesquisar.trim().length > 3){
       const resultado = buscarPorTitulo(tarefaPesquisar)
       renderizarTarefas(resultado)
    } else {
        alert("Campo vazio ou preenchido incorretamente")
    }
});

renderizarTarefas(tarefas)