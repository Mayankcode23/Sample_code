import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dashboard from '../page/Dashboard';
import Login from '../page/Login';
import User from '../page/User';
const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" element={<Login/>} />
                    <Route path="/Dashboard" element={<Dashboard/>} />
                    <Route path="/User" element={<User/>} />
                </Switch>
            </Router>


            {/* <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/Dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router> */}

        </div>
    )
}

export default Routes