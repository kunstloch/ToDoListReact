import React, { useState } from 'react';
import styled from 'styled-components';
import { interfaceDeclaration } from '@babel/types';

const H1 = styled.h1`
  text-align: center;
  color: #aae346;
  font-family: sans-serif;
  padding-top: 60px;
  opacity: 0.5;
`;

const Header = styled.header`
  margin: auto;
  background-color: #d2eda1;
  width: 250px;
  height: 150px;
  border-radius: 50%;
`;

const Navi = styled.nav`
  display: flex;
  justify-content: flex-end;
  height: 70px;
`;

const BB = styled.div`
  color: red;
  border: none;
  padding-top: 30px;
  padding-right: 30px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  padding-left: 15px;
  width: 300px;
  height: 30px;
`;

function App() {
  const initTask = {
    description: '',
    done: false,
    priority: 'Medium'
  };

  const [todolist, setTodolist] = useState([]);

  const [task, setTask] = useState(initTask);

  return (
    <div>
      <Navi>
        <BB>
          <button>Create a ToDo</button>
          <button>Archive</button>
          <button>Log Out</button>
        </BB>
      </Navi>
      <Header>
        <H1> To Dos </H1>
      </Header>
      <label>Tasks:</label>
      <br />
      <input
        type="text"
        value={task.description}
        onChange={e => setTask({ ...task, description: e.target.value })}
      />
      <br />
      Priority:
      <input
        type="radio"
        value="High"
        checked={task.priority === 'High'}
        onChange={e => setTask({ ...task, priority: e.target.value })}
      />
      <label for="High">High</label>
      <input
        type="radio"
        value="Medium"
        checked={task.priority === 'Medium'}
        onChange={e => setTask({ ...task, priority: e.target.value })}
      />
      <label for="Medium">Medium</label>
      <input
        type="radio"
        value="Low"
        checked={task.priority === 'Low'}
        onChange={e => setTask({ ...task, priority: e.target.value })}
      />
      <label for="Low">Low</label>
      <br />
      <button onClick={() => setTodolist([...todolist, task])}>
        Add Task to the list
      </button>
      <ul>
        {todolist.map((value, index) => (
          <li>
            {' '}
            <input
              type="checkbox"
              checked={value.done === true}
              onChange={() => {
                const newTodolist = [...todolist];
                newTodolist[index].done = !todolist[index].done;

                setTodolist(newTodolist);
              }}
            />
            {value.description}, priority: {value.priority}{' '}
            {value.done && 'True'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
