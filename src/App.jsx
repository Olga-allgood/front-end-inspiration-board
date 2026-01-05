
import './App.css'
import BoardSection from './components/BoardSection';
import CardSection from './components/CardSection';
import { useState } from 'react'
import axios from 'axios';

const BASE_URL = 'https://back-end-inspiration-board-1-1pb6.onrender.com'

const getAllBoardsAPI = () => {
  return axios.get(`${BASE_URL}/boards`)
       .then(res => res.data)
       .catch(err => console.error(err));
}

const getOneBoardAPI = (boardId) => {
  return axios.get(`${BASE_URL}/boards/${boardId}`)
      .then(res => res.data)
      .catch(err => console.error(err));
}
// integrate
const getAllCardsAPI = (boardId) => {
  return axios.get(`${BASE_URL}/boards/${boardId}/cards`)
        .then(res => res.data)
        .catch(err => console.error(err));

}
// integrate 
const getOneCardAPI = (cardId) => {
  return axios.get(`${BASE_URL}/cards/${cardId}`)
     .then(res => res.data)
     .catch(err => console.error(err));

}
// implement 
const createBoardAPI = (title, owner) => {
  return axios.post(`${BASE_URL}/boards`, {"title": title, "owner": owner})
       .then(res => res.data)
       .catch(err => console.error(err));

}

const createCardAPI = (boardId, message) => {
  return axios.post(`${BASE_URL}/cards`, {"message": message, "board_id": boardId})
      .then(res => res.data)
      .catch(err => console.error(err));
}

const deleteBoardAPI = (boardId) => {
  return axios.delete(`${BASE_URL}/boards/${boardId}`)
     .then(res => res.data)
     .catch(err => console.error(err));
}

const likeCardAPI = (cardId) => {
  return axios.patch(`${BASE_URL}/cards/${cardId}/like`)
      .then(res => res.data)
      .catch(err => console.error(err));
}

function App() {
  const [boards, setBoards] = useState([getAllBoardsAPI()])
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
  // const selectedBoard = boards.find(board => board.id === selectedBoardId);
  // console.log(selectedBoard);

  const selectedBoard = getOneBoardAPI(selectedBoardId)

  // the event is called here from CardForm 
  // message is a parameter that is a state that's coming from CardForm
  const addCard = (boardId, message) => {
    createCardAPI(boardId, message)
    // setBoards(boards => boards.map(board => board.id === selectedBoardId ?
    //   { ...board, cards: [...board.cards, { message, id: Date.now(), likes: 0 }] } :
    //   board));
  }

  const addLikes = (cardId) => {
    likeCardAPI(cardId);
    // setBoards(boards => boards.map(board => board.id === selectedBoardId ?
    //   {
    //     ...board, cards: board.cards.map(card => card.id === cardId ?
    //       { ...card, likes: card.likes + 1 } : card
    //     )
    //   } : board));
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
      <CardSection selectedBoard={selectedBoard} addCard={addCard} addLikes={addLikes} deleteCard={deleteCard} deleteBoard = {deleteBoardAPI} />
      {/* addCard is traveling as a prop down to the cardForm */}

    </div>


  )
}

export default App