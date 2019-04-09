'use strict';

import express from 'express';
const router = express.Router();
import launchlibrary from '../services/launchlibrary';


/**
 * Business logic for Get /
 * Gets the upcoming space launch missions around the world.  
 */
router.get('/', async function(req,res,next) { 
    try{
        console.log("Getting Upcoming Space Launches!");
        let result = await launchlibrary.getUpcomingLaunches();
        res.status(200).json(result);
    } catch(e){
        next(e)
    }  
});

module.exports = router;