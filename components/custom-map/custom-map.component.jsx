import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'                         
import mapStyles from './map-styles'

class CustomMapComponent extends Component {
  state = {
    myMarkers: [
  {latitude: 39.57507182607255, longitude: 2.6601873972192016},
		]
  }
  displayMarkers = () => {                                        
    return this.state.myMarkers.map((mark, index) => {                
      return <Marker id={index} key={`marker-${index}`}  position={{ lat: mark.latitude, lng: mark.longitude }} 
      onClick={() => console.log("You clicked me!",{index})} />          
    })
  }
  render() {
    return (
      <Map google={this.props.google} 
        zoom={15}
        styles={mapStyles}
        initialCenter={{ lat: 39.57507182607255, lng: 2.66018739721920165}}
        disableDefaultUI= {true}>
        {this.displayMarkers()}</Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDRS-ohTFe1vUnBvn8QJC9B5OyEZM3jCns'
  })(CustomMapComponent)