import React from 'react'
import items from "./data/data"

const App = () => {
    return (<div>
        {items(0).map((value) => {
            return <div>
                {value.page}

            </div>


        })
        }
    </div>
    )
}

export default App