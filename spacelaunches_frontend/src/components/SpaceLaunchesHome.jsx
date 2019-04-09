import React, { Component } from "react";
import LaunchLibrary from "../requests/launchlibrary";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


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
                            <Card style={{ width: '50rem'}}>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>{launch.name}</Card.Title>
                                    <Card.Text>{launch.rocket_name}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{launch.time_of_launch}</ListGroupItem>
                                    <ListGroupItem>{launch.window_start} - {launch.window_end}</ListGroupItem>
                                    <ListGroupItem>{launch.lsp}</ListGroupItem>
                                    <ListGroupItem>{launch.status}</ListGroupItem>
                                    <ListGroupItem>{launch.location}</ListGroupItem>
                                    <ListGroupItem>{launch.lsp}</ListGroupItem>
                                    <ListGroupItem>
                                        <Card.Link href={launch.location_wiki}>{launch.location_wiki}</Card.Link>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Card.Link href={launch.lsp_wiki}>{launch.lsp_wiki}</Card.Link>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Card.Link href={launch.rocket_wiki}>{launch.rocket_wiki}</Card.Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </div>
                    ))}
                    
                </div>
        );
    }
};

export default SpaceLaunchesHome;