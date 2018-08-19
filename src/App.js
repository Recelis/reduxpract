import React, { Component } from 'react';
import Footer from "./components/Footer"
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <AddTodo/>
          <VisibleTodoList/>
          <Footer/>
      </div>
    );
  }
}

export default App;
