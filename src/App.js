// IMPORTO I COMPONENTI NECESSARI PER LE ROTTE E IL CSS (comune a tutti i componenti)
// npm install --save react-router-dom

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Blog from './component/Blog';
import Post from './component/Post';
import Todolist from './component/Todolist';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* Lo SWITCH farà vedere un componente per volta */}
          {/* exact: il percorso deve essere esattamente quello */}
          <Route path='/' exact component={Home}></Route>
          <Route path='/todo' exact component={Todolist}></Route>
          <Route path='/blog' exact component={Blog}></Route>
          <Route path='/blog/:id' component={Post}></Route>
          {/* :id  percepisce il cambiamento */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
