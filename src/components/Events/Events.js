import React, { useState } from 'react';
import MapEvents from './MapEvents/MapEvents';
import ListEvents from './ListEvents/ListEvents';
import data from './data.json';


//Have class load in data 
export default function Events() {
    // Probably should change name for toggle
    const [showMap, setShowMap] = useState(true);
    // Perhaps an issue since using previous state. Look into prevstate Options
    const changeEventView = () => setShowMap(!showMap);
    // Can be used in both map events and list events -- maybe not best design choice but we'll see lol
    const [selectedEvent,setSelectedEvent] = useState(null);
    //When viewing an event in list view and want to view in map view click check location
    const onCheckLocationClick =(event)=> (e) =>{
        // First set the selected event.
        setSelectedEvent(event);
        // Switch to map view
        setShowMap(true);

    }
    return (
        <div className="container-fluid">
            <div className='row' id='header'>
                <h1>Current Events in Area!</h1>
            </div>
            <div className='row mb-3'>
                <div className='col-1'>
                    <button className="btn btn-primary btn-sm" onClick={changeEventView}>Change View</button>
                </div>
                <div className='col-4'>
                    <button className="btn btn-success btn-sm">Create Event</button>
                </div>
            </div>
           { showMap ? 
           (<MapEvents selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} data={data} />) :
            (<ListEvents onCheckLocationClick={onCheckLocationClick} data={data} />)}
           
        </div>
        );
}


