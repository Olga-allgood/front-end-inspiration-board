import { useState } from 'react'
function CardForm({addCard}) {
    const [message, setMessage] = useState('')

    // submitCardForm - handler for this component - data travels up
    const submitCardForm = (event) => {
        event.preventDefault()
        // - prop -data travels down from App
        if (message.trim()){
            // trim() removes white spaces from string
        addCard(message);
        setMessage('')
        } else {alert("Please type your message.")}} 
    
    return (
        <form onSubmit= {submitCardForm}>
            <h1>Create a New Card</h1>
            <label>Message</label>
            <input 
            name="message"
            value={message} 
            onChange={event => setMessage(event.target.value)}/>
        
            <button type='submit'>Add a card</button>
        </form>
    )
}
export default CardForm;