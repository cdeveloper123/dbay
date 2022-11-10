/*
    All functions that communicate via maxima are held in this file
*/

import { getListingById } from './db';

export function sendListing(id, sendListingCallback){
    function listingCallback(error, data){
        if (data) {
            //send listing
            sendData(data, sendCallback);
        } else {
            console.error(error);
        }
    }
    function sendCallback(error, success){
        if (success) {
            sendListingCallback(success);
        } else {
            sendListingCallback(error);
        }
    }
    //get listing
    getListingById(id, listingCallback);

    //return OK or Error 
}

export function sendData(jsondata) {
    debugger;
    /*
    //Convert to a string..
    const datastr = JSON.stringify(jsondata);

    //And now convert to HEX
    const hexstr = "0x" + utf8ToHex(datastr).toUpperCase().trim();

    //Create the function..
    const fullfunc = "maxima action:send publickey:" + CURRENT_ROOM_PUBLICKEY + " application:maxsolo data:" + hexstr;

    //Send the message via Maxima!..
    MDS.cmd(fullfunc, function (resp) {
        if (resp.status == false) {
            alert(resp.error);
            MDS.log(JSON.stringify(resp));
        } else if (resp.response.delivered == false) {
            alert(resp.response.error);
            MDS.log(JSON.stringify(resp));
        } else {
            //And add it to Our DB..
            insertMessage(CURRENT_ROOM_NAME, CURRENT_ROOM_PUBLICKEY, MY_NAME,
                jsondata.type, jsondata.message, jsondata.filedata,
                function () {

                    //Load all the messages
                    loadMessages(CURRENT_ROOM_PUBLICKEY);

                });
        }

        //Enable send button again
        document.getElementById("sendbutton").disabled = false;
    });
    */
}