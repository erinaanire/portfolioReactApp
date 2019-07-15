import React from 'react';
import Logo from './logo';
import Navbarlist from './Navbarlist'
import './Navbar.css';
class Navbar extends React.Component {
  constructor(props){
   super(props)

  }
    render() {
      return<div className="navbar-router clearfix">
        
        <Logo logodata={this.props.navdata.logo} />
        <Navbarlist navbarlistdata={this.props.navdata.navlist}/>
        </div>
      
      
    }
}
  export default Navbar;