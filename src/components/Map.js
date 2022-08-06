import React from 'react'
import { Map, Marker } from "pigeon-maps"
const ShowMap = ({ipInfo}) => {
  return (
    <div>
        <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[ipInfo.location.lat, ipInfo.location.lng]} />
    </Map>
    </div>
  )
}

export default ShowMap