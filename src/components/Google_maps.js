import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
    
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey
    }
  ))(MapContainer)

  function apikey(){
    const [map, setMap] =useState(flase);
    return (
        <>
       <GoogleApiWrapper apiKey='AIzaSyAgiEuIFsUIz0foa1JQNicp6EgR8XBX0A0' />
        </>
    )
  }
  
