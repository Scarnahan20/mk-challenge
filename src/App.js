import React from 'react';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App">
      <form name="LoginForm">
        <TextField id="username" label="Username"/>
        <TextField id="email" label="Email"/>
        <TextField id="message" label="Message" multiline />
        <TextField id="password" label="Password" type="password" />
      </form>
    </div>
  );
}

export default App;
