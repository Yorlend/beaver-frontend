import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PhotosetsPage from "./Pages/PhotosetsPage";
import DevicesPage from "./Pages/DevicesPage";
import PhotosetPage from "./Pages/PhotosetPage";
import NewPhotosetPage from "./Pages/NewPhotosetPage";

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
                    <Route exact path="/photosets" component={PhotosetsPage}/>
                    <Route exact path="/photoset/new" component={NewPhotosetPage}/>
                    <Route exact path="/photoset/:id" component={PhotosetPage}/>
                    <Route exact path="/devices" component={DevicesPage}/>
                </Switch>
                <Footer/>
            </Router>

        </div>
    );
}

export default App;
