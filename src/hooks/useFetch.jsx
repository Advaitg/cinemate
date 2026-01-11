import { useState, useEffect } from "react"

export const useFetch= (apiPath) => {
    const [data, setData] = useState([])
    console.log("fetch ", apiPath)
    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`

    useEffect(()=> {
        async function fetchMovies() {
            const authorization = `Bearer ${import.meta.env.REACT_APP_API_KEY}`
            console.log(authorization)
                
            try{
                const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: {authorization}
                }
                };
                const response =  await fetch(url, options)
                const json = await response.json();
                setData(json.results)
            }
            catch(error) {console.log(error)}
        }
        fetchMovies();
    }, [url])


    return (
        {data}
    )
}