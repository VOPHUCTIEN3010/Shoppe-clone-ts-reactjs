import userRouteElement from "./userRouteElement"


function App() {
    const routesElements = userRouteElement()
    return (
        <div className="App">
            {routesElements}
        </div>
    )
}

export default App
