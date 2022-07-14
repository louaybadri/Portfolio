import React from 'react'
import items from "./data/data"
import NavBar from "../v3/navBar/navBar"
const App = (props) => {
    return (<div>
        {items(0).map((value) => {
            return <div>

                {value.page}
            </div>


        })
        }
        <NavBar />
    </div>
    )
}

export default App