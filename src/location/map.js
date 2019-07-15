import React from 'react';
import './location.css';
import osm from 'osm';
class Map extends React.Component {
    constructor(props){
        super(props)
        this.map = osm().position(47.88038, 10.6222475).radius(0.008);
        this.map.iframe.width = "100%";
        this.map.iframe.height = "100%";
        this.mapRef = React.createRef();
    }

    componentDidMount(){
        
        console.log("this is mapref",this.mapRef);
        const node = this.mapRef.current;
        console.log("2",node);
        node.appendChild(this.map.show());
    }

    render(){
      return <div ref={this.mapRef} className="map">

         </div>
    }
}

  export default Map;