'use strict';

import axios from 'axios';

/**
 * Fetches the list of next 10 upcoming space launch missions.
 * Calls LaunchLibrary API v1.4 to get the raw data.
 * Processes the raw response from the API and extracts the required information.
 */
class LaunchLibrary
{
	constructor() {}

	async getUpcomingLaunches() {
        let query = 'https://launchlibrary.net/1.4/launch/next/10';
        let result = await axios.get(query);
        let launch_array = result['data']['launches'];
        let result_arr = [];

        //Process the launch array and retreive the required data.
        launch_array.forEach(launch => {
            let launch_obj = {};
            const { name, rocket, net, windowstart, windowend, status, lsp, location, missions } = launch;
            launch_obj['name'] = name;
            launch_obj['rocket_name'] = rocket['name'];
            launch_obj['time_of_launch'] = net;
            launch_obj['window_start'] = windowstart;
            launch_obj['window_end'] = windowend;
            launch_obj['status'] = status;
            launch_obj['lsp'] = lsp['name'];
            launch_obj['location'] = location['pads'][0]['name'];

            //Get the mission data only if missions are present in the reponse. 
            if(missions[0]) {
                launch_obj['mission_name'] = missions[0]['name'];
                launch_obj['mission_wiki'] = missions[0]['wikiURL'];
            }
            
            launch_obj['lsp_wiki'] = lsp['wikiURL'];
            launch_obj['rocket_wiki'] = rocket['wikiURL'];
            launch_obj['rocket_image_url'] = rocket['imageURL'];
            result_arr.push(launch_obj);
        });
        return result_arr;
	}
}

module.exports = LaunchLibrary;