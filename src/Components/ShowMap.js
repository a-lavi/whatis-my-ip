import React ,{useState}from 'react'
import { Map, Marker } from "pigeon-maps"
import Countries from './Countries';
import Button from '@mui/material/Button';
import { DateTime } from "luxon";
const ShowMap = ({ipInfo}) => {
  const now = DateTime.now();
  console.log(now)
  const [showInfo, setShowInfo] = useState(false);
  const clickHandler = ()=> {
    setShowInfo (!showInfo)
    
  }
  if(!ipInfo){
    return <p>Map is Loading...</p>
  }
  return (
    <div>
      <div>
        My IP Address is:
        <div>
IPv4: {ipInfo.ip}
        </div>
        IPv6: {!ipInfo.ip6 ? "Not detected" : ipInfo.ip6}
         </div>
      <img
  src={`https://flagcdn.com/h120/${ipInfo.location.country.toLowerCase()}.png`}
  
  height="120"
  alt="South Africa"></img>
  <div className="searchflex">
          <div>Date: {`${now.year}/${now.month}/${now.day}`}</div>
          <div>Time: {`${now.hour}:${now.minute}`}</div>
          <Button variant="contained" to="/search" className="searchButton" onClick={clickHandler}>More Info</Button>
          </div>
          <div>
            <Countries show={showInfo}country={ipInfo.location.country}/>
          </div>
        <Map height={300} defaultCenter={[ipInfo.location.lat, ipInfo.location.lng]} defaultZoom={11}>
      <Marker width={50} anchor={[ipInfo.location.lat, ipInfo.location.lng]} />
    </Map>
    </div>
  )
}

export default ShowMap