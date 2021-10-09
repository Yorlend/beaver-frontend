import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@brainhubeu/react-carousel/lib/style.css';
import './App.css';

function App() {
    return (
        <div id="app" className="position-relative">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
                <Footer/>
            </Router>

        </div>
    );
}

export default App;
