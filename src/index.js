import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Info from'./Information/Information';
import Location from './location/location';
import Config from './config/config';

class App extends React.Component {
    render(){
      return(
    
      <div>
        <Navbar navdata={Config.navbar}/>
        <Banner bannerdata={Config.banner}/>
        <Info infodata={Config.information}/>
        <Location/>
        
      
      </div>
      );
      
    }

  }
  ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
