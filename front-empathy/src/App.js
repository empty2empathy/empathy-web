import React from 'react';
import Main from "./pages/Main/Main";
import EventDetail from "./pages/EventDetail/EventDetail";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
                </Switch>
            </Router>
        </>
    );
}

export default App;
