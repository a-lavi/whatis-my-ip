import react, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
const Countries = ({ data, setData }) => {

    let { codeId } = useParams();
    

    const [code, setCode] = useState({code :"",
check:false})

    const changeHandler = (event) => {
        console.log("")
        if(!event.target.value){
            setCode({code:"",
                check: false}) 
                
                  }else {
            console.log(event)
            setCode({code:event.target.value,
            check: true})
        }
        

    }
    const loadCountries = (e) => {
        console.log(e)
        e.preventDefault();

if(!code.check){
setData([])

}else {

        const keyword = code.code.toUpperCase();

        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: getCountriesQuery(keyword)
            })
        };
        /* 
                fetch(`https://countries.trevorblades.com/`, options)
                    .then(res => res.json())
                    .then(res => {setData(res)}); */

        const getMe = async () => {
            const response = await fetch(`https://countries.trevorblades.com/`, options)
            if (response.ok) {
                const result = await response.json()
                console.log(result)
                {setData(result.data)}
            }

        };
        getMe();
    }
    }
        const getCountriesQuery = (countryCode) => {
            console.log(countryCode)
            return (
                `{
    continent (code: "${countryCode}") {
        name,
        countries {
          code,
          name,
          capital
        }
    }
    
  }`)

        }
    
    console.log(code)
    return (
        <form onSubmit={loadCountries}>
            <div>
                <label>Search Continent  </label>
                <input type="text" placeholder="Please enter a co tinet" onChange={changeHandler} />
            </div>
            <div>
                <button  >Search</button>

            </div>
        </form>
    )
}
export default Countries