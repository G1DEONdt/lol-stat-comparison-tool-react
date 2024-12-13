import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function NotFoundPage() {
  return (
    <>
        <Header />
        <div className="row-start-3 row-span-full col-span-full flex flex-col items-center gap-6">
            <h1 className="text-8xl text-amber-600">You've gotten lost! <span className="text-xl">somehow...</span></h1>
            <Link className="border border-amber-600 px-8 py-4 text-white text-2xl hover:bg-amber-600 hover:text-black" to="/">Go Home!</Link>
        </div>
    </>
  )
}
