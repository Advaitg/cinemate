import { Card } from "../component"
import { useFetch } from "../hooks/useFetch"

export const MovieList = ({apiPath}) => {
    console.log("movieList ", apiPath)
    const {data: movies} = useFetch(apiPath)

    return (
        <section className="max-w-7xl mx-auto py-7 px-4">
            <div className="flex justify-center flex-wrap">
                {
                    movies.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </section>  
    )
}