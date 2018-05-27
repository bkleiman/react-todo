import React, { Component } from 'react';
 import './App.css';
 import ToDo from './components/ToDo.js';

<<<<<<< HEAD
 class App extends Component {
   render() {
     return (
       <div className="App">
        <ul>
          <ToDo />
          <ToDo />
        </ul>
       </div>
     );
   }
 }
||||||| merged common ancestors
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
=======
 class App extends Component {
   render() {
     return (
       <div className="App">
        <ul>
          <ToDo />
          <ToDo />
        </ul>
       </div>
     );
   }
 }

 export default App;
>>>>>>> 65900ddd5c39f170c447b0493d68950b860d5a1a

<<<<<<< HEAD
 export default App;
||||||| merged common ancestors
export default App;
=======
>>>>>>> 65900ddd5c39f170c447b0493d68950b860d5a1a
