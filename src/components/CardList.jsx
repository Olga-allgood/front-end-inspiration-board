import CardItem from './CardItem';
function CardList ({cards, addLikes, deleteCard, selectedBoard}) {
    if (!cards || cards.length === 0) {
    // if (cards.length === 0){
        return <p>There are no cards</p>
    } 
   
    return (
        <ol> 
        <h2>Cards</h2>
        <div className="card-item-container">
        {cards.map(card => <CardItem key={card.id} card={card} addLikes={addLikes} deleteCard={deleteCard} selectedBoard={selectedBoard}/>)}
       </div>
    </ol>)
}
export default CardList;