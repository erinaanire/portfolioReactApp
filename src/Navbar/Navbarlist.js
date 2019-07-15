import React from 'react';
import './Navbar.css';
class Navbarlist extends React.Component {
  constructor(props){
    super(props)
    console.log("hi",props.navbarlistdata);

  }
    render() {
      
      let newRows = this.props.navbarlistdata.map(function(data, index){
        return <li>{data}</li>
      })
      
      return <ul className="navbarlist clearfix">
          {newRows}
      </ul>
    }
  }
  export default Navbarlist;