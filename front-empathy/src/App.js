import React from 'react';
import Main from "./pages/Main/Main";
import EventDetail from "./pages/EventDetail/EventDetail";
import LocationDetail from "./pages/LocationDetail/LocationDetail";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddData from "./pages/AddData/AddData";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <Main/>
                    </Route>
                    <Route path={"/event/:id"}>
                        <EventDetail/>
                    </Route>
                    <Route path={"/location/:id"}>
                        <LocationDetail/>
                    </Route>
                    <Route path={"/add-data"}>
                        <AddData/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
