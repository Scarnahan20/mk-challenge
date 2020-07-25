import React, { useState } from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';
import './App.css';

function App() {
  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    messageError: false,
    passwordError: false
  });

  const [nameText, setNameText] = useState("");
  const [nameHelper, setNameHelper] = useState("");
  const [emailText, setEmailText] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messageHelper, setMessageHelper] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("");

  function handleSubmit() {
    if(checkFields) {
      //submit
    }
  }

  function checkFields(){
    if (errors.nameError && errors.emailError && errors.messageError && errors.passwordError){
      return true;
    } else {
      return false;
    }
  }

  function handleName(event) {
    const currValue = event.target.value;
    setNameText(currValue);

    if(currValue === ''){
      setErrors(prevValue => {
        return {
          ...prevValue,
          nameError: true
        };
      });
      setNameHelper("Name is required.");
    } else {
      setErrors(prevValue => {
        return {
          ...prevValue,
          nameError: false
        };
      });
      setNameHelper("");
    }
  }

  function handleEmail(event) {
    const currValue = event.target.value;
    setEmailText(currValue);

    if(currValue === ''){
      setErrors(prevValue => {
        return {
          ...prevValue,
          emailError: true
        };
      });
      setEmailHelper("Email is required.");
    } else {
      setErrors(prevValue => {
        return {
          ...prevValue,
          emailError: false
        };
      });
      setEmailHelper("");
    }
  }

  function handleMessage(event) {
    const currValue = event.target.value;
    setMessageText(currValue);

    if(currValue === ''){
      setErrors(prevValue => {
        return {
          ...prevValue,
          messageError: true
        };
      });
      setMessageHelper("Message is required.");
    } else {
      setErrors(prevValue => {
        return {
          ...prevValue,
          messageError: false
        };
      });
      setMessageHelper("");
    }
  }

  function handlePassword(event) {
    const currValue = event.target.value;
    setPasswordText(currValue);

    if(currValue === ''){
      setErrors(prevValue => {
        return {
          ...prevValue,
          passwordError: true
        };
      });
      setPasswordHelper("Password is required.");
    } else {
      setErrors(prevValue => {
        return {
          ...prevValue,
          passwordError: false
        };
      });
      setPasswordHelper("");
    }
  }

  return (
    <div className="App">
      <FormControl onSubmit={handleSubmit} >
        <div>
          <TextField
            error={errors.nameError}
            helperText={nameHelper}
            id="name"
            label="Name"
            onChange={handleName}
            value={nameText}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error={errors.emailError}
            helperText={emailHelper}
            id="email"
            label="Email"
            onChange={handleEmail}
            style={{margin: 4}}
            value={emailText}
            variant="filled"
          />
        </div>
        <div>
          <TextField 
            error={errors.messageError}
            helperText={messageHelper}
            id="message"
            label="Message"
            multiline
            onChange={handleMessage}
            rows="4"
            style={{margin: 4}}
            value={messageText}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error={errors.passwordError}
            helperText={passwordHelper}
            id="password"
            label="Password"
            onChange={handlePassword}
            style={{margin: 4}}
            type="password"
            value={passwordText}
            variant="filled"
          />
        </div>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Login
        </Button>
      </FormControl>
    </div>
  );
}

export default App;
