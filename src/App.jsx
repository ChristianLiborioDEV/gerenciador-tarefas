import ItemTarefa from "./ItemTarefa.jsx"

const App = () => {
    return (
        <div>
            <h1>Gerenciador de Tarefas</h1>
            <ul id="listaTarefas">
            <ItemTarefa 
            id={1} 
            titulo="Estudar React" 
            prioridade="alta" 
            realizada={false}/>
            <ItemTarefa
            id={2}
            titulo="Estudar devOps"
            prioridade="media"
            realizada={true}
            />
            </ul>
        </div>

    )
}

export default App