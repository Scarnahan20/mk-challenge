import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';


function App() {
  const [name, setName] = useState({
    error: true,
    text: "",
    helper: ""
  });
  const [email, setEmail] = useState({
    error: true,
    text: "",
    helper: ""
  });
  const [message, setMessage] = useState({
    error: true,
    text: "",
    helper: ""
  });
  const [password, setPassword] = useState({
    error: true,
    text: "",
    helper: ""
  });

  function handleSubmit(event) {
    event.preventDefault()
    if(checkFields) {
      
    }
  }

  function checkFields(){
    
    if (name.error && email.error && message.error && password.error){
      return true;
    } else {
      return false;
    }
  }

  function handleChange(event) {
    const fieldName = event.target.name;
    const currValue = event.target.value;
    if (fieldName === 'name'){
      setName(prevValue => {
        return {
          ...prevValue,
          text: currValue
        };
      });

      
    } else if (fieldName === 'email') {
      setEmail(prevValue => {
        return {
          ...prevValue,
          text: currValue
        };
      });

      if (email.text.trim() === ''){
        setEmail(prevValue => {
          return {
            ...prevValue,
            error: true,
            helper: 'Email is required.'
          };
        });
      } else {
        setEmail(prevValue => {
          return {
            ...prevValue,
            error: false,
            helper: ''
          };
        });
      }
    } else if (fieldName === 'message') {
      setMessage(prevValue => {
        return {
          ...prevValue,
          text: currValue
        };
      });

      if (message.text.trim() === ''){
        setMessage(prevValue => {
          return {
            ...prevValue,
            error: true,
            helper: 'Message is required.'
          };
        });
      } else {
        setMessage(prevValue => {
          return {
            ...prevValue,
            error: false,
            helper: ''
          };
        });
      }
    } else if (fieldName === 'password'){
      setPassword(prevValue => {
        return {
          ...prevValue,
          text: currValue
        };
      });

      if (password.text.trim() === ''){
        setPassword(prevValue => {
          return {
            ...prevValue,
            error: true,
            helper: 'Password is required.'
          };
        });
      } else {
        setPassword(prevValue => {
          return {
            ...prevValue,
            error: false,
            helper: ''
          };
        });
      }
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <div>
          <TextField
            error={name.error}
            helperText={name.helper}
            name="name"
            label="Name"
            onChange={handleChange}
            value={name.text}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error={email.error}
            helperText={email.helper}
            name="email"
            label="Email"
            onChange={handleChange}
            style={{margin: 4}}
            value={email.text}
            variant="filled"
          />
        </div>
        <div>
          <TextField 
            error={message.error}
            helperText={message.helper}
            name="message"
            label="Message"
            multiline
            onChange={handleChange}
            rows="4"
            style={{margin: 4}}
            value={message.text}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error={password.error}
            helperText={password.helper}
            name="password"
            label="Password"
            onChange={handleChange}
            style={{margin: 4}}
            type="password"
            value={password.text}
            variant="filled"
          />
        </div>
          <Button color="primary" type="submit" variant="contained">
            Submit
          </Button>
      </form>
    </div>
  );
}

export default App;
