import React, { useState } from 'react';
import styled from 'styled-components';

// CSS in JS with styled-components

const TodoStyle = styled.li`
  margin: 20px auto;
  display: block;
  margin: 10px;
  padding: 10px;

  & button {
    /* display: inline; */
  }

  & input {
    font-size: 18px;
    text-align: center;
    background-color: aliceblue;
    padding: 5px;
    margin: 8px 10px 8px 40px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.38);
  }

  & input:focus {
    outline: none;
    border: 1.5px solid black;
    box-shadow: 0 0 10px #719ece;
  }
`;

const H1 = styled.h1`
  text-align: left;
  margin: 50px 10px 20px 80px;
  font-size: 50px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const Container = styled.div`
  display: flex;
  margin: 5px;
  border: 1px #005d0e solid;
  max-width: 500px;
  border-radius: 10px;
`;

const Button = styled.button`
  min-width: 90px;
  margin: 5px;
`;

const ButtonTrash = styled.button`
  min-width: 25px;
  margin: 5px;
`;

const Output = styled.div`
  font-size: 2em;
  padding: 5px 15px;
  min-width: 300px;
  display: inline;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const Block = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

// Todo component. Inline styling textdecoration -> change to clasName
// Used functions: completeTodo, deleteTodo,

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <Block>
      <Container
        style={{
          textDecoration: todo.complete ? 'line-through' : '',
          'background-image': todo.complete
            ? 'linear-gradient(90deg, #a9ffb6 0%, wheat 78%)'
            : 'linear-gradient(90deg, #ffb6a9 0%, wheat 78%)'
        }}
      >
        <Output>{todo.text}</Output>
        <Button onClick={() => completeTodo(index)}>
          {todo.complete ? 'Incomplete' : 'Complete'}
        </Button>
        <ButtonTrash onClick={() => deleteTodo(index)}>
          {/* trash-icon imported (link) in index.HTML */}
          <i class="fa fa-trash"></i>
        </ButtonTrash>
        {/* <SetPrio style={{ color: (todo.prio = 3) ? 'red' : 'blue' }} /> */}
        <div></div>
      </Container>
    </Block>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        placeholder="Your Todo..."
        onChange={e => setValue(e.target.value)}
      ></input>
    </form>
  );
}

function SetPrio({ changePrio }) {
  const [prio, setPrio] = useState(3);

  const handleSubmit = e => {
    e.preventDefault();
    changePrio(prio);
    setPrio(3);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={prio}
        type="number"
        name="Prio"
        min="1"
        max="5"
        onChange={e => setPrio(e.target.prio)}
      ></input>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add text to array

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // Function to change complete status

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  // Function to delete file with .slice

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // does not work. :-( When submit

  // const changePrio = prio => {
  //   const newTodos = [...todos];
  //   newTodos = [...newtodos, todo.prio];
  //   setTodos(newTodos);
  // };

  return (
    <div>
      <H1>TODO LIST</H1>
      <ul>
        <TodoStyle>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              // changePrio={changePrio}
            />
          ))}

          <TodoForm addTodo={addTodo} />
        </TodoStyle>
      </ul>
    </div>
  );
}

export default App;
