import React from 'react'
import Background from "./Components/Background.jsx";
import Foreground from "./Components/Foreground.jsx";
const App = () => {
    return (
        <div className="relative w-full h-screen bg-zinc-800">
            <Background/>
            <Foreground/>
        </div>
    )
}
export default App
