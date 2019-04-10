import {BASE_URL} from "./config";

/*
* Responsible for making API calls to communicate with the backend server.
*/
const LaunchLibrary = {
    getUpcomingLaunches(){
        return fetch(`${BASE_URL}`, { credentials: "include" }).then(
            res => res.json()
        );
    }
};

export default LaunchLibrary;