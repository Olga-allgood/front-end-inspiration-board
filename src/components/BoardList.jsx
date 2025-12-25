import BoardItem from "./BoardItem";

function BoardList({boards, selectBoard}){
    return (
     <ol> 
        <h1>Available Boards</h1>
    {boards.map(board => <BoardItem key={board.id} board={board} selectBoard={selectBoard}/>)}
    </ol>)
}
export default BoardList;