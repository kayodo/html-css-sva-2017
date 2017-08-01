import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(raw => raw.json())
      .then(photos => {
        this.setState({photos: photos.slice(110, 120)})
      });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my gallery</h2>
        </div>
        <Gallery
        photos={this.state.photos}
        width={600}
        />
      </div>
    );
  }
}

export default App;
