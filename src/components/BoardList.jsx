import BoardItem from "./BoardItem";

function BoardList({ boards, selectBoard }) {
    return (
        <section>
        <h2>Available Boards</h2>
     <ol className="board-list-container"> 
        

    {boards.map(board => <BoardItem key={board.id} board={board} selectBoard={selectBoard}/>)}
    
    </ol>
 </section >)

}
export default BoardList;