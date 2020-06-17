import React from 'react';
import './App.css';
import CitySearch from './components/citySearch'; 
//import { render } from 'react-dom';


class App extends React.Component{
    render() {
      return (
        <div className="App">
          <CitySearch />
      </div>
      );
    }
  }
 

export default App;

