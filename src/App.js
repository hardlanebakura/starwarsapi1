import React from 'react';
import './App.css';
import Header from './components/Header';
import Video from './components/Video';
import video from "./components/Darth Vader's rage.mp4"

const Pvideo = () => {
  return (
    <div className="container">
      <video autoPlay playsInline muted src={video} />
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <div className="Header">
      api fetching 1
      </div>
      <div className="Video">
        <div className="video-container">
          <Pvideo/>
        </div>
      </div>
      <div className="asd">
        What would you like to see?
       <div className="options">
         Starships
         People
         Planets
         Species
         Vehicles
         Films
       </div>
      </div>
      <div className="exp1">
        <div className="whatisthis">
          <p>What is this?</p>
          We present to you the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!

          We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!
          </div>
        <div className="howcaniuse">
          <p>How can I use it?</p>
          All the data is accessible through our HTTP web API. Consult our documentation if you'd like to get started.

          Helper libraries for popular programming languages are also provided so you can consume swapi in your favourite programming language, in a style that suits you.
        </div>
        <div className="whatisapi">
          <p>What is an API?</p>
          The application programming interface (API) is an interface that defines communication between multiple software intermediaries. 
          It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. 
        </div>
      </div>
    </div>
  );
}

export default App;
