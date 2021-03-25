import React from "react"
import NumberContext from "./number-context"

function Display() {
    const value = React.useContext(NumberContext)
    return <div>The answer is {value}</div>
}

export default Display