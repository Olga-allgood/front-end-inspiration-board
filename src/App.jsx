
import './App.css'
import './components/BoardSection'
import './components/CardSection'
import useState from 'react'



function App() {
  const [boards, setBoards] = useState([])
  const [selectedBoardId, setBoardId] = useState(null)
  
  function addBoard = ({title, ownerName}) => {
    const newBoard = {title,
                    ownerName, 
                    cards:[]}
                    

  }}




  return (
   
    <div>
      <h1>Get Inspired!</h1>
      <BoardSection onAddBoard = {addBoard}/>
      <CardSection />
    </div>
      
  
  )


export default App
