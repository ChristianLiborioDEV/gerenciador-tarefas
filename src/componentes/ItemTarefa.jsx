const ItemTarefa = ({ id, titulo, prioridade, realizada, onConcluir, onRemover }) => {




    return (

        <li className={`${prioridade} ${realizada ? "realizada" : ""}`}>
            <span>
                {titulo} - {prioridade}
            </span>
            <div>
                {!realizada && <button className="btn-concluir" onClick={() => onConcluir(id)}>Concluir</button>}
                <button className="btn-remover" onClick={() => onRemover(id)}>Remover</button>
            </div>
        </li>
    )
};
export default ItemTarefa;