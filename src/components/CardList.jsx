import CardItem from './CardItem';
function CardList ({cards, addLikes, deleteCard}) {
    if (cards.length === 0){
        return <p>There are no cards</p>
    } 
   
    return (
        <ol> 
        <h1>Cards</h1>
    {cards.map(card => <CardItem key={card.id} card={card} addLikes={addLikes} deleteCard={deleteCard}/>)}
    </ol>)
}
export default CardList;