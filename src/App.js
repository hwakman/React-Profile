import React, { Component } from 'react';
import Content from './pages/contentStatus';
import Header from './component/header';
import './App.css';

class App extends Component {
  state = {
    value: 0
  }

  handleChange = (value) => {
    this.setState({value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Content />
        </header>
      </div>
    );
  }
}

export default App;
