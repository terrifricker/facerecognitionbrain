import './App.css'
import { useState } from 'react'
import SignOut from './components/SignOut/SignOut.js'
import Header from './components/Header/Header.js'
import Registration from './components/Registration/Registration.js'
import SignIn from './components/SignIn/SignIn.js'
import Logo from './components/Logo/Logo.js'
import Rank from './components/Rank/Rank.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Image from './components/Image/Image.js'

export default function App() {

  // declare state variables
  const [input, setInput] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('landing')
  // current route possibilites are landing, signin, register, and home
  const [user, setUser] = useState({})

  // declare event handler functions
  function handleGoToSignIn() {
    setRoute('signin')
  }
  function handleGoToRegister() {
    setRoute('register')
  }
  function handleRegister(data) {
    setUser(data)
    setRoute('home')
  }
  function handleSignIn(data) {
    setUser(data)
    setRoute('home')
  }
  function handleSignOut() {
    setUser({})
    setRoute('signin')
  }
  function handleOnChange(event) {
    setInput(event.target.value)
  }
  function handleClick() {
    // Clarifai constants
    const PAT = '73efbfec471a4b578501aff88a982de8';
    const USER_ID = 'clarifai';       
    const APP_ID = 'main';
    const MODEL_ID = 'face-detection';
    const IMAGE_URL = input;
    // create http request body
    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          { "data": { "image": { "url": IMAGE_URL }}}
      ]
    });
    // create http request options
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => setBox(result.outputs[0].data.regions[0].region_info.bounding_box))
    .catch(error => console.log('error', error));

    //incremement user count
    fetch('https://find-a-face-backend.onrender.com/image', { 
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          id: user.id
      })
    })
    .then(response => response.json())
    .then(result => {
      if(result !== 'User not found') {
        setUser(Object.assign(user, {entries: result}))
      }
    })
    .catch(error => console.log('error', error));
  }

  // routing
  if (route === 'landing') {
    return (
      <div className="App">
        <Header
          handleGoToSignIn={handleGoToSignIn}
          handleGoToRegister={handleGoToRegister}
          handleSignIn={handleSignIn}
        />
      </div>
    )
  }
  if (route === 'signin') {
    return (
      <div className="App">
        <SignIn 
          handleSignIn={handleSignIn}
          handleGoToRegister={handleGoToRegister}
        />
      </div>
    )
  }
  if (route === 'register') {
    return(
      <div className="App">
        <Registration 
          handleRegister={handleRegister}
          handleGoToSignIn={handleGoToSignIn}
        />
      </div>
    )
  }
  if (route === 'home')
  return (
    <div className="App">
      <SignOut 
        handleSignOut={handleSignOut}
      />
      <Logo />
      <Rank 
        name={user.name}
        entries={user.entries}
      />
      <ImageLinkForm 
        handleOnChange={handleOnChange}
        handleClick={handleClick}
      />
      <Image 
        imageUrl={input}
        box={box}
      />
    </div>
  );
}