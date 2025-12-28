import CardForm from './CardForm';
// import CardList from './CardList';
function CardSection ({selectedBoard, addCard}){

    return (
        <>
        {/* <CardList selectedBoard={selectedBoard}/> */}
        <CardForm addCard={addCard}/>
        </>
    )

}
export default CardForm;