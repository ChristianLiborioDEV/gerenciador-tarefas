const ItemTarefa = ({ id, titulo, prioridade, realizada, onConcluir, onRemover, onDesfazer}) => {




    return (

        <li className={prioridade}> 
            <span className={realizada ? "realizada" : ""}>
                {titulo} - {prioridade}
            </span>
            <div>
                {!realizada && <button className="btn-concluir" onClick={() => onConcluir(id)}>Concluir</button>}
                <button className="btn-remover" onClick={() => onRemover(id)}>Remover</button>
                {realizada && <button className="btn-desfazer" onClick={() => onDesfazer(id)}>Desfazer</button>}
            </div>
        </li>
    )
};
export default ItemTarefa;