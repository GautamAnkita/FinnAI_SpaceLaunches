import React, { Component } from "react";
import LaunchLibrary from "../requests/launchlibrary";

class SpaceLaunchesHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            spaceLaunches: []
        };
    }
    
    componentDidMount(){
        LaunchLibrary.getUpcomingLaunches()
        .then(response => {
            console.log("Received response:"+ JSON.stringify(response));
            this.setState({ loading: false, spaceLaunches: response });
        })
        .catch(() => {
            this.setState({ loading: false });
        });
    }
    render(){
        const { loading, spaceLaunches } = this.state;
        if(loading){
            return(
                <main>
                    <h2>Loading...</h2>
                </main>
            );
        }
        return(
                <div>
                    <h1>Welcome</h1>
                    <h5>{spaceLaunches}</h5>
                </div>
        );
    }
};

export default SpaceLaunchesHome;