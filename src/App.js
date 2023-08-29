// import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import Rank from './components/Rank/Rank.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'

function App() {
  // const [imageUrl, setImageUrl] = useState('');

  const handleOnChange = (event) => {
    console.log(event.target.value)
  }
  function handleClick() {
    console.log('clicked')
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

export default App;
