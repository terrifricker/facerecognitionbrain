import './App.css'
import { useState } from 'react'
import Navigation from './components/Navigation/Navigation.js'
import Registration from './components/Registration/Registration.js'
import SignIn from './components/SignIn/SignIn.js'
import Logo from './components/Logo/Logo.js'
import Rank from './components/Rank/Rank.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Image from './components/Image/Image.js'

export default function App() {
  const [input, setInput] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('signin')
  // current route possibilites are signin, register, and home

  function handleSignIn() {
    // setRoute('home')
    fetch('http://localhost:3000')
      .then(response => response.json)
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }

  function handleNeedToRegister() {
    setRoute('register')
  }
  function handleRegister() {
    setRoute('home')
  }

  function handleSignOut() {
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
  }

  if (route === 'signin') {
    return (
      <div className="App">
        <SignIn 
          handleSignIn={handleSignIn}
          handleNeedToRegister={handleNeedToRegister}
        />
      </div>
    )
  }
  if (route === 'register') {
    return(
      <div className="App">
        <Registration 
          handleRegister={handleRegister}
        />
      </div>
    )
  }
  if (route === 'home')
  return (
    <div className="App">
      <Navigation 
        handleSignOut={handleSignOut}
      />
      <Logo />
      <Rank />
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
