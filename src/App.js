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
  const [toDoArray, setArray] = useState(['ToDoes']);
  console.log(toDoArray.length);
  let i;
  return (
    <>
      <div>todos</div>
      <label>Add a new Todo: </label>
      <AddToDo value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={() => setArray([...toDoArray, todo])}>
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
