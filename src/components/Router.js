import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import App from "./App";
import StorePicker from "./StorePicker";
import NotFound from "./NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    component={StorePicker}
                    exact
                    path="/"
                />
                <Route
                    component={App}
                    exact
                    path="/store/:storeId"
                />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;