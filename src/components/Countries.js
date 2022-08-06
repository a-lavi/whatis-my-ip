import react, { useState, useEffect } from "react";

const Countries = ({ country }) => {
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
        {country
        }
      </div>
    
  );
};
export default Countries;
