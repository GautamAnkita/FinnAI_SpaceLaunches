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
    let launch_array = result['data']['launches'];
    let result_arr = [];
    launch_array.forEach(launch => {
        let launch_obj = {};
        launch_obj['name'] = launch['name'];
        launch_obj['rocket_name'] = launch['rocket']['name'];
        launch_obj['time_of_launch'] = launch['net'];
        launch_obj['window_start'] = launch['windowstart'];
        launch_obj['window_end'] = launch['windowend'];
        launch_obj['status'] = launch['status'];
        launch_obj['lsp'] = launch['lsp']['name'];
        launch_obj['location'] = launch['location']['pads'][0]['name'];
        launch_obj['location_wiki'] = launch['location']['pads'][0]['wikiURL'];
        launch_obj['lsp_wiki'] = launch['lsp']['wikiURL'];
        launch_obj['rocket_wiki'] = launch['rocket']['wikiURL'];
        result_arr.push(launch_obj);
    });
    return result_arr;
}

module.exports = {
    getUpcomingLaunches
}