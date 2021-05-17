import React, {FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Detail from "./pages/Detail";
import List from "./pages/List";

type AppProps = {};
const App: FunctionComponent<AppProps> = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/all" component={List} />
                <Route path="/surveys/:id" component={Detail} />
            </Switch>
        </Router>
    );
};

export default App;
