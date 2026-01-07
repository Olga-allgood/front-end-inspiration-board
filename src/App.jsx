
import './App.css'
import BoardSection from './components/BoardSection';
import CardSection from './components/CardSection';
import { useEffect, useState } from 'react'
import axios from 'axios';

const BASE_URL = 'https://back-end-inspiration-board-1-1pb6.onrender.com'

const getAllBoardsAPI = () => {
  return axios.get(`${BASE_URL}/boards`)
      //  .then(res => res.data)
      //  .catch(err => console.error(err));
}

const getOneBoardAPI = (boardId) => {
  return axios.get(`${BASE_URL}/boards/${boardId}`)
      // .then(res => res.data)
      // .catch(err => console.error(err));
}
// integrate
const getAllCardsAPI = (boardId) => {
  return axios.get(`${BASE_URL}/boards/${boardId}/cards`)
        // .then(res => res.data)
        // .catch(err => console.error(err));

}
// integrate 
const getOneCardAPI = (cardId) => {
  return axios.get(`${BASE_URL}/cards/${cardId}`)
    //  .then(res => res.data)
    //  .catch(err => console.error(err));

}
// implement 
const createBoardAPI = (title, owner) => {
  return axios.post(`${BASE_URL}/boards`, {"title": title, "owner": owner})
      //  .then(res => res.data)
      //  .catch(err => console.error(err));

}

const createCardAPI = (boardId, message) => {
  return axios.post(`${BASE_URL}/cards`, {"message": message, "board_id": boardId})
      // .then(res => res.data)
      // .catch(err => console.error(err));
}

const deleteCardAPI = (boardId, cardId) => {
  return axios.delete(`${BASE_URL}/cards/${cardId}`)
    //  .then(res => res.data)
    //  .catch(err => console.error(err));
}

const deleteBoardAPI = (boardId) => {
  return axios.delete(`${BASE_URL}/boards/${boardId}`)
    //  .then(res => res.data)
    //  .catch(err => console.error(err));
}

const likeCardAPI = (cardId) => {
  return axios.patch(`${BASE_URL}/cards/${cardId}/like`)
      // .then(res => res.data)
      // .catch(err => console.error(err));
}

function App() {
  const [boards, setBoards] = useState([])
  const [selectedBoardId, setBoardId] = useState(null)
  const [formDisplayed, setFormDisplay] = useState(true)
  const [selectedBoard, setSelectedBoard] = useState(null)
  const [cards, setCards] = useState([])
  console.log(boards);
  // we are taking the old state and toggling the old state. We need to pass it to the BoardSection and then to BoardForm
  const toggleFormDisplayed = () => setFormDisplay(prev => !prev)

//   const createCardAPI = (boardId, message) => {
//   return axios.post(`${BASE_URL}/cards`, {
//     message: message,
//     board_id: boardId
//   })
//   .then(res => res.data)
//   .catch(err => {
//     console.error(err);
//     throw err;
//   });
// };

// THIS FUNCTION UPDATES THE STATE and BOARDS
// res.data is not the correct approach here for setBoards
  const setBoardsAPI = () => {
    getAllBoardsAPI()
    .then(res => setBoards(res.data))
    .catch(err => console.error(err));
}
  useEffect(() => setBoardsAPI(), []);

  const deleteBoard = (boardId) => {
    deleteBoardAPI(boardId)
    .then(() => setBoardsAPI())
    .catch(err => console.error(err));

  }
  const addBoard = ({ title, ownerName }) => {
    createBoardAPI(title, ownerName)
    .then(res => setBoards(boards => [...boards, res.data]))
    .catch(err => console.error(err)); }
  //   const newBoard = {
  //     id: Date.now(),
  //     title,
  //     ownerName,
  //     cards: []
  //   };
  //   setBoards(boards => [...boards, newBoard])
  // }
  const selectBoard = (id) => {
    setBoardId(id); 
    getAllCards(id);
  }
  console.log(cards)
  // const selectedBoard = boards.find(board => board.id === selectedBoardId);
  // console.log(selectedBoard);

// RETHINK WHEN THIS FUNCTION RUNS.IT SHOULD NOT BE RUNNING EVERY TIME THE PAGE 
  // const selectedBoard = getOneBoardAPI(selectedBoardId)

  useEffect(() => {
  if (!selectedBoardId) return;

  getOneBoardAPI(selectedBoardId)
    .then(res => setSelectedBoard(res.data))
    .catch(err => console.error(err));
}, [selectedBoardId]);

  // the event is called here from CardForm 
  // message is a parameter that is a state that's coming from CardForm
  // const addCard = (boardId, message) => {
  //   createCardAPI(boardId, message)
  //      .then(() => setBoardsAPI())
  //      .catch(err => console.error(err));
    // setBoards(boards => boards.map(board => board.id === selectedBoardId ?
    //   { ...board, cards: [...board.cards, { message, id: Date.now(), likes: 0 }] } :
    //   board));

 
  const addCard = (boardId, message) => {
  createCardAPI(boardId, message)
    .then(() => getAllCards(boardId))
    .catch(err => console.error(err)) 
  };
  const getAllCards = (boardId) => {
    getAllCardsAPI(boardId)
    .then(res => setCards(res.data.cards))
    .catch(err => console.error(err))
  };  
  // useEffect(() => getAllCards(), []);
  

    // .then(data => setSelectedBoard(data))
    // .catch(err => console.error(err));

// BACKEND NEEDS TO HAVE CORRECT ENDPOINT
  const addLikes = (cardId, boardId) => {
    likeCardAPI(cardId)
    .then((res) => {
      // Update the card with the response data from the backend
      setCards(cards => cards.map(card => 
        card.id === cardId ? res.data : card
      ))
    })
    .catch(err => console.error(err))
    // setBoards(boards => boards.map(board => board.id === selectedBoardId ?
    //   {
    //     ...board, cards: board.cards.map(card => card.id === cardId ?
    //       { ...card, likes: card.likes + 1 } : card
    //     )
    //   } : board));
  }
// BACKEND NEEDS TO HAVE CORRECT ENDPOINT
  const deleteCard = (boardId, cardId) => {
    deleteCardAPI(boardId, cardId)
    .then(() => {
      // Remove the card from the cards array without refetching
      setCards(cards => cards.filter(card => card.id !== cardId))
    })
    .catch(err => console.error(err))
    // setBoards(boards => boards.map(board => board.id === selectedBoardId ?
    //   {
    //     ...board, cards: board.cards.filter(card => card.id !== cardId
    //     )
    //   } : board));
  }

console.log(document.querySelector(".form-container"))


  return (

    <div className='app-container'>
      <BoardSection onAddBoard={addBoard} boards={boards} selectBoard={selectBoard} toggleFormDisplayed={toggleFormDisplayed} formDisplayed={formDisplayed} />
      <CardSection selectedBoard={selectedBoard} addCard={addCard} addLikes={addLikes} deleteCard={deleteCard} deleteBoard = {deleteBoard} cards={cards}/>
      {/* addCard is traveling as a prop down to the cardForm */}

    </div>


  )
}



export default App