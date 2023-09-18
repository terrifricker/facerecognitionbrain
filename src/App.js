import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import Rank from './components/Rank/Rank.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'

export default function App() {

  function handleOnChange(event) {
    console.log(event.target.value)
  }

  function handleClick(event) {
    console.log('clicked', event.target)
    // Clarifai constants
    const PAT = '73efbfec471a4b578501aff88a982de8';
    const USER_ID = 'clarifai';       
    const APP_ID = 'main';
    const MODEL_ID = 'face-detection';
    const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

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
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        handleOnChange={handleOnChange}
        handleClick={handleClick}
      />
      <FaceRecognition />
    </div>
  );
}
