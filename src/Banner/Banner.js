import React from 'react';

class Banner extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
      return <div className="imagestructure"><img src={this.props.bannerdata.image} alt="Hi"/></div>;
        
    }
  }
  export default Banner;