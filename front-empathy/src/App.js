import React from 'react';
import Main from "./pages/Main/Main";
import EventDetail from "./pages/EventDetail/EventDetail";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/event/:id"}>
                        <EventDetail/>
                    </Route>
                    <Route path={"/"}>
                        <Main/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
