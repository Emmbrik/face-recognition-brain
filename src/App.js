import React, { Component } from 'react';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'; 
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';


const app = new Clarifai.App({
 apiKey: '18937b6380934fd69920950f928b8557'
});

const particlesOptions = {
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 }
      },
      resize: true
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5
    }
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: ""
  },
  retina_detect: true
}


class App extends Component {

  constructor(){
      super();
      this.state = {
        input: '',
        imageUrl: ''
      }

  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
   }


  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)  
      .then(
      function (response) {
        // response data fetch from FACE_DETECT_MODEL 
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        }
      );
  }

  render(){
    return (
      <div className="App">
      <Particles className='particles'
        options={particlesOptions} />
      <Navigation />
      <Logo />
      < Rank />
        <ImageLinkForm
          onInputChange = {this.onInputChange}
          onButtonSubmit = {this.onButtonSubmit}
          />
      <FaceRecognition imageUrl ={this.state.imageUrl}/>
      </div>
    );
}
}

export default App;
