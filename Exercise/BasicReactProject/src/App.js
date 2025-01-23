import React from "react"
import ReactDOM from "react-dom"
import Myinfo from "./MyInfo"
import SearchParams from "./searchParams"

const App = () => {
    return (<div>
        <h1>Hi</h1>
        <Myinfo name="Chetan"/>
        <SearchParams/>
    </div>
    );
}
ReactDOM.render(React.createElement(App),document.getElementById("root"))