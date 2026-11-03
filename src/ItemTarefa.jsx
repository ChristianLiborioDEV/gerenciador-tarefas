const ItemTarefa = ({id, titulo, prioridade, realizada, onConcluir, onRemover}) => {
    return(
        
            <li className={`${prioridade} ${realizada ? "realizada" : ""}`}>
                <span>
                    {titulo} - {prioridade}
                </span>
                <div>
                    <button className="btn-concluir">Concluir</button>
                    <button className="btn-remover">Remover</button>
                </div>
            </li>
    )
};
export default ItemTarefa;