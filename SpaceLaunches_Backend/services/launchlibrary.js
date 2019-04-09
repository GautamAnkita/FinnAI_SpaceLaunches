'use strict';

import axios from 'axios';

/**
 * Fetches the list of next 10 upcoming space launch missions.
 * Calls LaunchLibrary API v1.4 to get the raw data.
 * Processes the raw response from the API and extracts the required information.
 */
async function getUpcomingLaunches(){
    let query = 'https://launchlibrary.net/1.4/launch/next/10';
    let result = await axios.get(query);
    return result;
}

module.exports = {
    getUpcomingLaunches
}