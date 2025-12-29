function CardItem({ card, addLikes, deleteCard }) {
    return (
        <>
            <h2>{card.message} {card.likes}</h2>
            <button onClick={() => addLikes(card.id)}>+1</button>
            <button onClick={() => deleteCard(card.id)}>delete</button>
        </>
    )
}
export default CardItem;