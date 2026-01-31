import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Game from "./Game";
import { CookiesProvider } from "react-cookie";

const App = () => {
    return (
        <CookiesProvider>
        <Router>
            <div className="App">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/game" element={<Game />} />
                    </Routes>
            </div>
        </Router>
        </CookiesProvider>
    );
};

export default App;
