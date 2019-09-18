import React, { useState } from 'react';
import styled from 'styled-components';

const AddToDo = styled.input`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 3px;
  padding: 15px 20px;
  display: flex;
`;

const toDoList = [];

function App() {
  const [todo, setTodo] = useState('');
  const [toDoArrey, setArrey] = useState[''];

  return (
    <>
      <div>todos</div>
      <label>Add a new Todo: </label>
      <AddToDo value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={() => setArrey.push(todo)}>X</button>
      <ul>
        <li>{todo}</li>
      </ul>
    </>
  );
}

export default App;

<AddToDo value={todo} onChange={e => setTodo(e.target.value)} />;
