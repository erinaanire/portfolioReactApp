import React from 'react';
import './Navbar.css';
class Logo extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
      return <div className="logo-outer">
        {this.props.logodata}
      </div>;
    }
  }
  export default Logo;