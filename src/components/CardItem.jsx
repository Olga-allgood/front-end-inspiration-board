function CardItem ({card, addLikes, deleteCard}){
    return (
        <div className="card-item">
         <p  className="card-item-message">{card.message} </p>
         <ul className="card-item-controls">
            <li><p>{card.likes}</p></li>
            <li><p onClick={()=> addLikes(card.id) }>+1</p></li>
            <li> <p onClick={()=> deleteCard(card.id)}>delete</p></li>
        </ul>
        
       
        </div>
    )
}
export default CardItem;