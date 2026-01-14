import { Card } from "../component"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"

export const MovieList = ({apiPath, title}) => {

    const movieTitle = useTitle(title)

    console.log("movieList ", apiPath)
    const {data: movies} = useFetch(apiPath)
    console.log(movies)

    return (
        <section className="max-w-7xl mx-auto py-7 px-4">
            <div className="flex justify-evenly flex-wrap">
                {
                    movies.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </section>  
    )
}