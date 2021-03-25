import React from "react"
// import Display from "./Display";

export const NumberContext = React.createContext()

function DaveCeddia() {
    return (
        <NumberContext.Provider value={42}>
            <Display/>
        </NumberContext.Provider>
    )
}

function Display() {
    const value = React.useContext(NumberContext)
    return <div>The answer is {value}</div>
}

export default DaveCeddia