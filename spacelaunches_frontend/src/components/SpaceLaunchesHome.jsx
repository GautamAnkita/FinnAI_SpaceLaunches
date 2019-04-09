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
                    {spaceLaunches.map((launch) => (
                        <div>
                            <div>Name: {launch.name}</div>
                            <div>Rocket Name: {launch.rocket_name}</div>
                            <div>Time of Launch: {launch.time_of_launch}</div>
                            <div>Start Date/Time of Launch: {launch.window_start}</div>
                            <div>End Date/Time of Launch: {launch.window_end}</div>
                            <div>Launch Service Provider: {launch.lsp}</div>
                            <div>Launch Status: {launch.status}</div>
                            <div>Launch Location: {launch.location}</div>
                            <div>Launch Location Wiki: {launch.location_wiki}</div>
                            <div>Launch Service Provider Wiki: {launch.lsp_wiki}</div>
                            <div>Rocket Wiki: {launch.rocket_wiki}</div>
                            <hr/>
                        </div>
                    ))}
                </div>
        );
    }
};

export default SpaceLaunchesHome;