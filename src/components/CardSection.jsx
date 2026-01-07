import CardForm from './CardForm';
import CardList from './CardList';

function CardSection ({selectedBoard, addCard, addLikes, deleteCard, deleteBoard, cards}){
    if (!selectedBoard){
        return <p>Please select a board.</p>
    }

    return (
        <div className="card-section">
        <CardForm addCard={addCard} boardId={selectedBoard.id}/>
        <button onClick={()=> deleteBoard(selectedBoard.id)}>Delete a board</button>
        <CardList cards={cards} addLikes={addLikes} deleteCard={deleteCard} selectedBoard={selectedBoard}/>
      
        {/* passing only the array with cards down as a prop */}
        
        </div>
    )

}
export default CardSection;