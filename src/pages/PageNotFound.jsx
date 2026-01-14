import { useEffect } from "react"
import { Link } from "react-router-dom"
import  PageNotFoundImage  from "../assets/PageNotFound.jpg"
import { Button } from "../component"

export const PageNotFound = () => {

    useEffect(()=>{
        document.title = `Page not Found / Cinemate`
    })

    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center text-7xl my-3">
                    <p className="text-gray-700 my-6 font-bold dark:text-white">404, Oops!</p>
                    <img className="max-w-lg " src={PageNotFoundImage}></img>
                </div>
                <div className="flex justify-center">
                    <Link to="/">
                        <Button>Back to Cinemate</Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}