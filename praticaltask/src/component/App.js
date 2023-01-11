import { Switch, Route } from "react-router-dom";

import Home from "./Home"
import About from './About'
import Headtail from "./Headtail";



export default function App() {
    return (
        <>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/about' >
                    <About />
                </Route>
                <Route path='/headtail' >
                    <Headtail />
                </Route>
            </Switch>
        </>
    )
}