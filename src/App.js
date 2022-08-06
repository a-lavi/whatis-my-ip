import React from "react";
import ShowMap from "./components/Map";
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes,Navigate } from "react-router-dom";

function App() {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_OG5OaGTGRirg0y6bZpWuS9Y2VgAH9&ipAddress`;
  const [ipInfo, setIpInfo] = useState([]);
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
      <h1>{ipInfo.ip} </h1>
      {/* <Routes>
        <Route path="/" element={<ShowMap ipInfo={ipInfo} />} />
         <Route path="/" element={<Countries data={data} setData={setData}/>} />
        </Routes> */}
        
      
    </div>
  );
}

export default App;
