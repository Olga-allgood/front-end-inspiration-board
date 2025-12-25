import BoardForm from "./BoardForm";
import BoardList from "./BoardList";
function BoardSection({onAddBoard, boards, selectBoard}) {
    return (
        <>
        <BoardForm onAddBoard = {onAddBoard}/>
        <BoardList boards={boards} selectBoard = {selectBoard}/>
        </>
            
    )
}
export default BoardSection