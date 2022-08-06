import react, { useState, useEffect } from "react";
import ShowCountries from './ShowCountries'
const Countries = ({ country,show}) => {
  const [data, setData] = useState([]);
  console.log(country);

  const loadCountries = (country) => {
    if (!country) {
      console.log("Problem");
    } else {
      const keyword = country.toUpperCase();

      const options = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: getCountriesQuery(keyword),
        }),
      };
     

      const getMe = async () => {
        const response = await fetch(
          `https://countries.trevorblades.com/`,
          options
        );
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          {
            setData(result);
          }
        }
      };
      getMe();
    }
  };
  const getCountriesQuery = (countryCode) => {
    console.log(countryCode);
  
    return `{     
                country(code: "${countryCode}") {
                  name, 
                  phone,
                  capital,
                  continent {name},
                  emoji,
                  native,
                  currency,
                  languages {name}
                }
}`;
  };
  useEffect(() => {
    loadCountries(country);
  }, []);
  console.log(data);
  return (
    
      <div>
      <ShowCountries show={show} data={data}/>
      </div>
    
  );
};
export default Countries;
