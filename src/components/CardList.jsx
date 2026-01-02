import CardItem from './CardItem';
function CardList ({cards, addLikes, deleteCard}) {
    if (cards.length === 0){
        return <p>There are no cards</p>
    } 
   
    return (
        <ol> 
        <h2>Cards</h2>
        <div className="card-item-container">
        {cards.map(card => <CardItem key={card.id} card={card} addLikes={addLikes} deleteCard={deleteCard}/>)}
       </div>
    </ol>)
}
export default CardList;