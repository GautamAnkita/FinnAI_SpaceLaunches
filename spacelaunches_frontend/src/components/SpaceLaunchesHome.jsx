import React, { Component } from "react";
import LaunchLibrary from "../requests/launchlibrary";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SpaceLaunchesHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            spaceLaunches: []
        };
    }
    
    componentDidMount(){
        //Call the LaunchLibrary to fetch the upcoming space launches from backend server.
        LaunchLibrary.getUpcomingLaunches()
        .then(response => {
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
                <div className="bg-dark" >
                    <br/>
                    <center><text className="text-white">Here are the upcoming space launches...</text></center>
                    <br/>
                    <Container>
                    {spaceLaunches.map((launch) => (
                        <Row className="justify-content-md-center mb-4">
                            <Col md="auto">
                                <Card style={{ width: '50rem'}} bg="light" border="secondary">
                                    <Card.Header className="font-weight-bold">{new Date(launch.time_of_launch).toDateString()}</Card.Header>
                                    {launch.rocket_image_url && (
                                        <Card.Img variant="top" src={launch.rocket_image_url} height="400" width="300"/>
                                    )}
                                    
                                    <Card.Body >
                                        <Card.Title>{launch.name}</Card.Title>
                                        <Card.Text>Rocket: {launch.rocket_name} | <Card.Link href={launch.rocket_wiki}>WikiLink</Card.Link></Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Launch Date/Time: {launch.time_of_launch}</ListGroupItem>
                                            {launch.window_start == launch.window_end ? (
                                                    <ListGroupItem>{launch.window_start}</ListGroupItem>
                                                ) : (        
                                                    <ListGroupItem>{launch.window_start} - {launch.window_end}</ListGroupItem>
                                                )
                                            }
                                        <ListGroupItem>Status: {launch.status == 1? (<text className="text-success">GREEN</text>): (<text className="text-danger">TBD</text>)}</ListGroupItem>
                                        {launch.mission_wiki && (
                                                 <ListGroupItem>Mission: {launch.mission_name} | <Card.Link href={launch.mission_wiki}>WikiLink</Card.Link></ListGroupItem>
                                        )}
                                        
                                        <ListGroupItem>Agency: {launch.lsp} | <Card.Link href={launch.lsp_wiki}>WikiLink</Card.Link></ListGroupItem>
                                        <ListGroupItem>Location: {launch.location}</ListGroupItem>

                                    </ListGroup>
                                    
                                </Card>
                            </Col>
                        </Row>
                    ))}
                    </Container>
                </div>
        );
    }
};

export default SpaceLaunchesHome;