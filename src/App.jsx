
import './App.css'
import BoardSection from './components/BoardSection';
import CardSection from './components/CardSection';
import { useState } from 'react'



function App() {
  const [boards, setBoards] = useState([])
  const [selectedBoardId, setBoardId] = useState(null)
  const [formDisplayed, setFormDisplay] = useState(true)
  console.log(boards);
  // we are taking the old state and toggling the old state. We need to pass it to the BoardSection and then to BoardForm
  const toggleFormDisplayed = () => setFormDisplay(prev => !prev)

  const addBoard = ({ title, ownerName }) => {
    const newBoard = {
      id: Date.now(),
      title,
      ownerName,
      cards: []
    };
    setBoards(boards => [...boards, newBoard])
  }
  const selectBoard = (id) => {
    setBoardId(id);
  }
  const selectedBoard = boards.find(board => board.id === selectedBoardId);
  console.log(selectedBoard);

  // the event is called here from CardForm 
  // message is a parameter that is a state that's coming from CardForm
  const addCard = (message) => {
    setBoards(boards => boards.map(board => board.id === selectedBoardId ?
      { ...board, cards: [...board.cards, { message, id: Date.now(), likes: 0 }] } :
      board));
  }

  const addLikes = (cardId) => {
    setBoards(boards => boards.map(board => board.id === selectedBoardId ?
      {
        ...board, cards: board.cards.map(card => card.id === cardId ?
          { ...card, likes: card.likes + 1 } : card
        )
      } : board));
  }

  const deleteCard = (cardId) => {
    setBoards(boards => boards.map(board => board.id === selectedBoardId ?
      {
        ...board, cards: board.cards.filter(card => card.id !== cardId
        )
      } : board));
  }



  return (

    <div className='app-container'>
      <BoardSection onAddBoard={addBoard} boards={boards} selectBoard={selectBoard} toggleFormDisplayed={toggleFormDisplayed} formDisplayed={formDisplayed} />
      <CardSection selectedBoard={selectedBoard} addCard={addCard} addLikes={addLikes} deleteCard={deleteCard} />
      {/* addCard is traveling as a prop down to the cardForm */}

    </div>


  )
}

export default App