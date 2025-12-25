import { useState } from 'react'
function BoardForm({onAddBoard}) {
    const [dataForm, setDataForm] = useState({ title: '', ownerName: '' })
    const updateDataForm = (event) => {
        setDataForm ((dataForm) => {return {...dataForm, [event.target.name]:event.target.value}})
    }
    // submitBoardForm - handler for this component - data travels up
    const submitBoardForm = (event) => {
        event.preventDefault()
        // onAddBoard - prop -data travels down from App
        if (dataForm.ownerName.trim() && dataForm.title.trim()){
            // trim() removes white spaces from string
        onAddBoard(dataForm)
        setDataForm({ title: '', ownerName: '' })
        } else {alert("Please enter a title and owner.")}} 
    

    return (
        <form onSubmit = {submitBoardForm}>
            <label>title</label>
            <input
                name="title"
                value={dataForm.title}
                onChange={updateDataForm}>
            </input>
            <label>Owner's Name</label>
            <input
                name="ownerName"
                value={dataForm.ownerName}
                onChange={updateDataForm}>
            </input>
            <button type='submit'>Submit Board Form</button>

        </form>
    )
}
export default BoardForm;
