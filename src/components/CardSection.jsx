import CardForm from './CardForm';
import CardList from './CardList';
function CardSection ({selectedBoard, addCard, addLikes, deleteCard}){
    if (!selectedBoard) {
        return <p>Please select a board.</p>
    }

    return (
        <>
        <CardForm addCard={addCard}/>
        <CardList cards={selectedBoard.cards} addLikes={addLikes} deleteCard={deleteCard}/>
        {/* we are passing only the array with cards dwon as a prop */}
       
        </>
    )

}
export default CardSection;