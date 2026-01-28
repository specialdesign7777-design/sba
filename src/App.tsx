import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Game from "./Game";

const App = () => {
    return (
        <Router>
            <div className="App">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/game" element={<Game />} />
                    </Routes>
            </div>
        </Router>
    );
};

export default App;
