import {Routes, Route} from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
    return (
        <div className="dark:bg-gray-800">
            <Routes>
                <Route path="/" element={<MovieList apiPath="movie/now_playing"/>} />
                <Route path="movie/:id" element={<MovieDetails />} />
                <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>} />
                <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>} />
                <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>} />
                <Route path="search" element={<Search />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}