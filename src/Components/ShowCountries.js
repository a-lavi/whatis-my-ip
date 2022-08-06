

const ShowCountries = ({ data }) => {
    let countriesJsx = () => {

        if (data.length === 0 || data == NaN) {

            return (<p>none</p>)
        }

        return (
            <>
            <h1>{data.continent.name}</h1>
            {data.continent.countries.map((country, index) => (
                <div key={index} className="country-row">
                    <div>Country Code: {country.code}</div>
                    <div>Name: {country.name}</div>
                    <div>Capital: {country.capital}</div>
                </div>
            ))
        }
        </>)
    }
    const text = countriesJsx()
    return (
        <>

            {/*   {data.length ===0 || data ==NaN ? ( <p>none</p>) : (
    
           data.continent.countries.map((country, index) => (
        <div key={index} className="country-row">
            <div>Country Code: {country.code}</div>
            <div>Name: {country.name}</div>
            <div>Capital: {country.capital}</div>
        </div>
    )))}
        */}



            <div>{text}</div>

        </>

    )
}
export default ShowCountries