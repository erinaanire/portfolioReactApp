import React from 'react';
import bag from '../images/bag.jpg';
class Firstfile extends React.Component {
    render() {
      return <div className="firstfile">
        <h5 className="info-title">Innovation for your future</h5>
        <p className="textprops">The main goal of the company is to deliver the best quality software.
        The main goal of the company is to deliver the best quality software.
        The main goal of the company is to deliver the best quality software
        </p>
        
    
        <ul className="filelist">
          <li className="clearfix"><img src={bag} alt="hii"/><p>hi this is a bag.</p></li>
          <li className="clearfix"><img src={bag} alt="hii"/><p>hi this is a bag.</p></li>
          </ul>
          </div>
    
    }
  }
  export default Firstfile;