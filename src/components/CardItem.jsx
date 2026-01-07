function CardItem ({card, addLikes, deleteCard, selectedBoard}){
    return (
        <div className="card-item">
         <p  className="card-item-message">{card.message} </p>
         <ul className="card-item-controls">
            <li><p>{card.likes_count}</p></li>
            <li><p onClick={()=> addLikes(card.id, card.board_id) }>+1</p></li>
            <li> <p onClick={()=> deleteCard(card.board_id, card.id)}>delete</p></li>
        </ul>
        
       
        </div>
    )
}
export default CardItem;