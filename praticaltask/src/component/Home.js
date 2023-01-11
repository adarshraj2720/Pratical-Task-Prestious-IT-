
import { NavLink } from "react-router-dom";

export default function Home(){
    return(
        <>
            <h1>Home Component</h1>
            <NavLink to="/about">
                <button>About </button>
            </NavLink>
            <NavLink to="/headtail">
                <button>Head Tail </button>
            </NavLink>
        </>
    )
}