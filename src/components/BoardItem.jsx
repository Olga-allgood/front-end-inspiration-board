function BoardItem({board, selectBoard})
{
    const onSelectBoard = () => {
        selectBoard(board.id)
    }
    return (<li onClick={onSelectBoard}>{board.title} {board.ownerName}</li>)
}
export default BoardItem;