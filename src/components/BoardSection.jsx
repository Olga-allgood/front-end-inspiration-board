import BoardForm from "./BoardForm";
import BoardList from "./BoardList";
function BoardSection({onAddBoard, boards, selectBoard, toggleFormDisplayed, formDisplayed}) {
    return (
        <section className="board-section">
        {/* we have the handler here. the state is passed from the parent */}
        <h2>Inspiration Board</h2>
        {/* we are deciding if we need to show the form. Below if formDisplayed is true, then we are going for the second part*/}
        {formDisplayed && <BoardForm onAddBoard = {onAddBoard}/>}
         <button onClick={toggleFormDisplayed}>{formDisplayed ? "Hide a New Board Form": "Show a New Board Form"}</button>
        <BoardList boards={boards} selectBoard = {selectBoard}/>
        </section>
            
    )
}
export default BoardSection