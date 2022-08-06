

const ShowCountries = ({ data, show }) => {
    console.log(show)
    let countriesJsx = () => {

        if (data.length === 0 || data == NaN) {

            return (<p>none</p>)
        }

        return (
            <>
            <h1>{data.data.country.name}</h1>
            
                <div  style={{visibility: !show ? "hidden": "unset" }} className="country-row">
                    <div>Continent: {data.data.country.continent.name}</div>
                    <div>Capital: {data.data.country.capital}</div>
                    <div>Currency: {data.data.country.currency}</div>
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