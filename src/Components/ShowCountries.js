

const ShowCountries = ({ data }) => {
    console.log(data)
    let countriesJsx = () => {

        if (data.length === 0 || data == NaN) {

            return (<p>none</p>)
        }

        return (
            <>
            <h1>{data.data.country.name}</h1>
            
                <div  className="country-row">
                    <div>Continent: {data.data.country.continent.name}</div>
                    
                    <div>Capital: {data.data.country.capital}</div>
                </div>
            
        
        </>)
    }
    const text = countriesJsx()
    return (
        <>



            <div>{text}</div>

        </>

    )
}
export default ShowCountries