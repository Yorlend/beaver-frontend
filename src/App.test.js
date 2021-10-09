import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from "./Pages/HomePage";
import PhotosetsPage from "./Pages/PhotosetsPage";
import PhotosetPage from "./Pages/PhotosetPage";
import DevicesPage from "./Pages/DevicesPage";
import NewPhotosetPage from "./Pages/NewPhotosetPage";
import {MemoryRouter as Router, Route} from "react-router-dom";
import {act} from "@testing-library/react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Mock Photoset
jest.mock("./Models/Photoset", () => {

    function Photoset(id) {
        this.fillIn = obj => {
            for (let key in obj) {
                this[key] = obj[key];
            }
            return this;
        }
        this.retrieve = () => {
            const data = {
                uuid: "uuid",
                name: "name",
                created_at: {format: () => new Date().toISOString()},
                images_count: 100,
            }
            return new Promise((resolve, reject) => {
                resolve(this.fillIn(data));
            })
        }
        this.images = () => {
            return new Promise((resolve, reject) => {
                resolve([{path: "/logo.png", uuid: "uuid"}]);
            });
        }

        this.video = () => {
            return new Promise((resolve, reject) => {
                resolve({path: "/test.mp4", uuid: "uuid"})
            })
        }
    }

    Photoset.list = () => new Promise((resolve, reject) => {
        resolve([
            {
                uuid: 12,
                name: "Первый",
                created_at: new Date().getTime(),
                images_count: new Date().getTime() % 100
            },
            {
                uuid: 100,
                name: "Второй",
                created_at: new Date().getTime(),
                images_count: new Date().getTime() % 100
            }
        ])
    });

    Photoset.newInstance = () => {
        return new Photoset();
    };

    return Photoset;
});

// Mock Device
jest.mock("./Models/Device", () => {
    return {
        list() {
            return new Promise((resolve, reject) => {
                resolve([
                    {
                        uuid: "1",
                        name: "My device 1",
                        created_at: {
                            format: () => new Date().toISOString(),
                        },
                        online_at: {
                            format: () => new Date().toISOString(),
                            isSameOrAfter(other) {
                                return Math.random() > 0.5;
                            }
                        },
                    }
                ])
            })
        }
    }
});

// testing HomePage
it('renders HomePage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router initialEntries={["/"]}>
        <Route path="/" exact component={HomePage}/>
    </Router>, div);
});

it('renders NewPhotosetPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router initialEntries={["/photoset/new"]}>
        <Route path="/photoset/new" exact component={NewPhotosetPage}/>
    </Router>, div);
})

// testing PhotosetsPage
it('renders PhotosetsPage without crashing', async () => {

    const div = document.createElement('div');
    await act(async () => {
        ReactDOM.render(<Router initialEntries={["/photosets"]}>
            <Route path="/photosets" exact component={PhotosetsPage}/>
        </Router>, div);
    });
});

// testing DevicesPage
it('renders DevicesPage without crashing', async () => {
    const div = document.createElement('div');
    await act(async () => {
        ReactDOM.render(<Router initialEntries={["/devices"]}>
            <Route path="/devices" exact component={DevicesPage}/>
        </Router>, div);
    });
});

// testing PhotosetPage
it('renders PhotosetPage without crashing', async () => {
    const div = document.createElement('div');
    await act(async () => {
        ReactDOM.render(<Router initialEntries={["/photoset/99"]}>
            <Route path="/photoset/:id" exact component={PhotosetPage}/>
        </Router>, div);
    });
})

// testing Header
it("renders Header without crashing", () => {
    ReactDOM.render(<Router><Header/></Router>, document.createElement("div"));
})

// testing Header
it("renders Footer without crashing", () => {
    ReactDOM.render(<Router><Footer/></Router>, document.createElement("div"));
})
