import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';


function App() {
  const request = new Request("https://grpuv0upxe.execute-api.us-west-2.amazonaws.com");
  const finished = false;

  const [name, setName] = useState({
    error: false,
    text: "",
    helper: ""
  });
  const [email, setEmail] = useState({
    error: false,
    text: "",
    helper: ""
  });
  const [message, setMessage] = useState({
    error: false,
    text: "",
    helper: ""
  });

  function handleSubmit(event) {
    event.preventDefault()
    if(checkFields) {
      const submitted = {
        "subject": name,
        "recipient": email,
        "body": message
      };
      fetch(request, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitted),
      })
        .catch((error) => {
          console.error('Error:', error);
        });
        finished = true;
    }
  }

  function checkFields(){
    
    if (name.error && email.error && message.error){
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

      if (name.text.trim() === ''){
        setName(prevValue => {
          return {
            ...prevValue,
            error: true,
            helper: 'Name is required.'
          };
        });
      } else {
        setName(prevValue => {
          return {
            ...prevValue,
            error: false,
            helper: ''
          };
        });
      }
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
    }
  }

  return (
    <div className="App">
      <h1>Contact Us</h1>
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
        </div>
          <Button color="primary" type="submit" variant="contained">
            Submit
          </Button>
          {finished? <p>Thank you for your submission.</p>: null}
      </form>
    </div>
  );
}

export default App;
