import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
   <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
    <span className="font-bold">
      Stock Site
    </span>
    <span>
      <Link to='/' className="mr-2">Table</Link>
      <Link to='/about'>Compare</Link>
    </span>
   </nav>
  )
}