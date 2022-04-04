import React from "react";
import "./App.css";
import Home from "./pages";
import {Routes, Route} from 'react-router-dom'
import Track from "./pages/track";
import Provider from "./state/Provider";
import Collapsible from "./components/navbar/collapsibleBar";

const App = () => {

    return (
        <Provider>
            <Collapsible />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/track/:orderId' element={<Track/>}/>
            </Routes>

        </Provider>
    );
};

export default App;
