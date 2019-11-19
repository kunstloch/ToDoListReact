import React, { useState } from 'react';
import styled from 'styled-components';

const AddToDo = styled.input`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 3px;
  margin: 15px 20px;
`;

function App() {
  const initialState = {
    content: '',
    finished: false,
    prio: false
  };
  const [todo, setTodo] = useState(initialState);
  const [toDoArray, setArray] = useState([]);

  // Just to see what console says :-)
  console.log(toDoArray.length);
  console.log(todo);
  console.log(toDoArray);

  let i;
  return (
    <>
      <h1>TODO - LIST</h1>
      <label>Add a new Todo: </label>
      <div>
        <AddToDo
          value={todo.content}
          placeholder="New Todo"
          onChange={e => setTodo({ ...todo, content: e.target.value })}
        />
      </div>

      <button
        onClick={() => {
          if (todo.content !== '') {
            setArray([...toDoArray, todo.content]);
            setTodo(initialState);
          }
        }}
      >
        Add to you list
      </button>

      {toDoArray.map((value, index) => {
        return (
          <li
            style={{ textDecoration: todo.finished ? 'line-through' : '' }}
            key={index}
          >
            {value}
            <button
              onClick={() => {
                const newtoDoArray = [...toDoArray];
                newtoDoArray[index].finished = !toDoArray[index].finished;
                setArray(newtoDoArray);
              }}
            >
              Complete
            </button>
          </li>
        );
      })}
    </>
  );
}

export default App;
