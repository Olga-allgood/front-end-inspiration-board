import { useState } from 'react'
function CardForm({addCard, boardId}) {
    const [message, setMessage] = useState('')

    // submitCardForm - handler for this component - data travels up
    const submitCardForm = (event) => {
        event.preventDefault()
        // - prop -data travels down from App
        if (message.trim()){
            // trim() removes white spaces from string
        addCard(boardId, message);
        setMessage('')
        } else {alert("Please type your message.")}} 
    
    return (
        // when user id done typing and the state here updates, user clicks onSubmit 
        // and event travels up
        <form onSubmit= {submitCardForm}>
            <h2>Create a New Card</h2>
            <label>Message</label>
            <input 
            name="message"
            value={message} 
            onChange={event => setMessage(event.target.value)}/>
            <p>{`Preview: ${message}`}</p>
            <button type='submit'>Add a card</button>

        </form>
    )
}
export default CardForm;