import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function App() {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

useEffect(() => {
  //this fires when app loads  
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
  })
}, [])

const addTodo = (event) => {
  //This will fire when we clcik the botton
  event.preventDefault(); //stops refresh

  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setTodos([...todos, input]);
  setInput(''); //makes text box blank after hitting enterCCC
}

  return (
    <div className="App">
      <h1>Hello World!! </h1>
      <form>
      
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
      {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
          //<li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
