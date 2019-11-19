import React, { useState } from 'react';
import styled from 'styled-components';

const AddToDo = styled.input`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 3px;
  margin: 15px 20px;
`;

const toDoList = [];

function App() {
  const [todo, setTodo] = useState({
    content: 'blabla',
    finished: false,
    prio: false
  });

  const [toDoArray, setArray] = useState(['ToDoes']);
  console.log(toDoArray.length);
  let i;
  return (
    <>
      <h1>TODOES</h1>
      <label>Add a new Todo: </label>
      <AddToDo value={todo.content} onChange={e => ...todo, setTodo(e.target.value)} />
      <ul>
        <li>{todo.content}</li>
        <li>{toDoArray}</li>
      </ul>

      <button onClick={() => setArray([...toDoArray, todo.content])}>
        Add to you list
      </button>

      <ul>
        {toDoArray.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
