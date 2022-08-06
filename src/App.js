import React from "react";
import ShowMap from "./Components/ShowMap";
import "./App.css";
import Button from '@material-ui/core/Button';
import { useState, useEffect } from "react";
import { Route, Routes,Navigate } from "react-router-dom";

function App() {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_MY_API_KEY}&ipAddress`;
  const [ipInfo, setIpInfo] = useState(false);
  const [queryString, setQueryString] = useState(url);
  const [data, setData] = useState([])
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 
  const getData = async () => {
    try {setLoading(true);
    const response = await fetch(queryString);
    let result = ""
   console.log(response)
    if (response.ok) {
      result = await response.json();
     
       setIpInfo(result);
       
      console.log(ipInfo);
    }
  }catch(error){
    console.log("something went wrong",error)
  }finally {
    setLoading(false);
 }

  };
  console.log(ipInfo);
  useEffect(() => {
    getData ()
  },[queryString] );

  return (
    <div className="App">
      
      
 
      <Button variant="text">Text</Button>
      <Routes>
        <Route path="/" element={<ShowMap ipInfo={ipInfo} />} />
         {/* <Route path="/" element={<Countries data={data} setData={setData}/>} /> */}
        </Routes> 
        
      
      
    </div>
  );
}

export default App;
