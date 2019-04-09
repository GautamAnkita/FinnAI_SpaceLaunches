import React, { Component } from "react";
import SpaceLaunchesHome from "./SpaceLaunchesHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={SpaceLaunchesHome} />
                    </Switch>
                </div>
            </Router>          
        );
    }
};

export default App;