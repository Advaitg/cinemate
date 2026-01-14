export const Button = ({children}) => {
    return (
        <button className="rounded-lg my-2 p-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
                            {children}
        </button>
    )
}