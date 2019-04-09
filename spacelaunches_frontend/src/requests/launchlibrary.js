import {BASE_URL} from "./config";

const LaunchLibrary = {
    getUpcomingLaunches(){
        return fetch(`${BASE_URL}`, { credentials: "include" }).then(
            res => res.json()
        );
    }
};

export default LaunchLibrary;