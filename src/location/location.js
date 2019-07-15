import React from 'react';
import Map from './map';
import './location.css';
class Location extends React.Component {
    render() {
      return <div className="locationmap">
        <h2>Locate Us</h2>
        <Map/>
          </div>
    
    }
  }
  export default Location;