import { useState, useEffect } from "react"

export const useFetch= (apiPath, queryTerm="") => {
    const [data, setData] = useState([])
    
    console.log("fetch ", apiPath, queryTerm)
    const url = queryTerm ? `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}&include_adult=false&language=en-US&page=1`: 
        `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`
    console.log(url)

    useEffect(()=> {
        async function fetchMovies() {
            const authorization = `Bearer ${import.meta.env.VITE_API_KEY}`

            try{
                const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: authorization
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