import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Location from "./Location";
import InformationBox from "./InformationBox";

require('dotenv').config()


const Map = ({eventData, center, zoom}) => {

  const [locationInfo, setLocationInfo] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY


  const markers = eventData.map(event => {
    if (event.categories[0].id === 15) {
      return <Location
        lat={event.geometries[0].coordinates[1]}
        lng={event.geometries[0].coordinates[0]}
        onClick={() => setLocationInfo({id: event.id, title: event.title})}
      />

    }
    return null;
  })

  return(
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <InformationBox info={locationInfo}/>}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 40.0000,
    lng: 40.0000
  },
  zoom: 1
}

export default Map