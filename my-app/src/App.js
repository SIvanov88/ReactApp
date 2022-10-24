import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Counter from './components/Counter.jsx';
import Task from './components/Task.jsx';
import Cv from './components/Cv.jsx';
import Education from './components/Education';
import Api from './components/Api.jsx';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import ItemDetails from './components/ItemDetails';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {


  

  

  return (
    <div className="App">
      <div className='App-header'>
        <Header  />
      </div>
      <main className='App-mainContent'>
        <Switch>
          <Route path='/' exact component={Cv} />
          <Route path='/cv' component={Cv} />
          <Route path='/education' component={Education} />
          <Route path='/task' component={Task} />
          <Route path='/counter' component={Counter} />
          <Route path='/api' exact component={Api} />
          <Route path='/api/:id' component={ItemDetails} />
        </Switch>
      </main>
      <div className='App-footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
