// maubot - A plugin-based Matrix bot system.
// Copyright (C) 2018 Tulir Asokan
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Home from "./Home"
import Login from "./Login"

class MaubotRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: localStorage.accessToken !== undefined,
        }
    }

    render() {
        return <Router>
            <div className={`maubot-wrapper ${this.state.authed ? "authenticated" : ""}`}>
                <Route path="/" exact render={() => <Redirect to={{ pathname: "/dashboard" }}/>}/>
                <PrivateRoute path="/dashboard" component={Home} authed={this.state.authed}/>
                <Route path="/login" component={Login}/>
            </div>
        </Router>
    }
}

export default MaubotRouter
