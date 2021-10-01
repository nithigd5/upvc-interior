import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


function MyComponent({coord, size}) {

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB65SX0_4xdj7HPZTqDc13QHh6E5HkFYm8"
    >
      <GoogleMap
        mapContainerStyle={size}
        center={coord}
          zoom={8}
          options= {{
          zoomControl: false,
          fullscreenControl: true,
        }} />
          </LoadScript>
  )
}
        
export default React.memo(MyComponent)