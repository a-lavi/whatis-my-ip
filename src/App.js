
import './App.css';
import { useState, useEffect } from "react";
function App() {
  const url= `https://geo.ipify.org/api/v2/country?apiKey=at_OG5OaGTGRirg0y6bZpWuS9Y2VgAH9&ipAddress`
  const [queryString, setQueryString] = useState(url)
  const [ipInfo,setIpInfo] = useState({})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => { getData() }, [queryString])
  const getData = async () => {
    setLoading(true)
    const response = await fetch(queryString)
    let result = ""
    console.log(response)
  try{
    if (response.ok) {
      result = await response.json();
      }
      if (result.length === 0) {
        alert("!!!")
      }
      console.log(result)
      setIpInfo(() => result)
      

    } catch (error) {
      console.error("2!!!")
      setError("3!!!");}}
  return (
    <div className="App">
     <h1>{ipInfo.ip}</h1>
    </div>
  );
}

export default App;
