
import React, { useState } from 'react';
import './App.css';





function App() {
  const [Items, setItems] = useState('')
  const [Priority, setPriority] = useState('')
  const [NewList, setNewList] = useState([])
  function onClickPush(e) {
    const currentToDO = {
      todo: Items,
      urgent: Priority
    }
    const newToDo = [...NewList, currentToDO]


    setNewList(newToDo)
    setItems('')
    setPriority('')

  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4> List of to do </h4>
          <ol>
            {NewList.map((Items) => {

              return (
                <li>{Items.todo} {Items.urgent} </li>
              )
            })}
          </ol>
        </div>

        <h4> Add to List </h4>
        <div>
          <label>add a todo: </label>
          <input type='text' onChange={(event) => {
            let value = event.target.value
            setItems(value)

          }} />
          <select name="PriorityList" id="PriorityList" onChange={(event) => {
            let value = event.target.value
            setPriority(value)
          }}>
            <option value=''></option>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
          <button onClick={onClickPush}>Add</button>
        </div>


      </header >
    </div >
  );
}

export default App;
