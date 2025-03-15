import React, { useState } from 'react';
import MapEvents from './MapEvents/MapEvents';
import ListEvents from './ListEvents/ListEvents';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import data from './data.json';


//Have class load in data 
export default function Events() {
    const [tabKey, setTabKey] = useState('Map');
    // Perhaps an issue since using previous state. Look into prevstate Options
    const changeEventView = () => setShowMap(!showMap);
    // Can be used in both map events and list events -- maybe not best design choice but we'll see lol
    const [selectedEvent,setSelectedEvent] = useState(null);
    //When viewing an event in list view and want to view in map view click check location
    const onCheckLocationClick =(event)=> (e) =>{
        // First set the selected event.
        setSelectedEvent(event);
        // Switch to map view
        setTabKey('Map');

    }
    return (
        <div className="container-fluid">
            <div className='row' id='header'>
                <h1>Current Events in Area!</h1>
            </div>
            <div className='row mb-3'>
                <div className='col-4'>
                    <button className="btn btn-success btn-sm">Create Event</button>
                </div>
            </div>
           <Tabs
            id="events-tab"
            activeKey={tabKey}
            onSelect={(k)=> setTabKey(k)}
            className='mb-3' 
           >
                <Tab eventKey='Map' title='Map'>
                    <MapEvents selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} data={data} />
                </Tab>
                <Tab eventKey='List' title='List'>
                    <ListEvents onCheckLocationClick={onCheckLocationClick} data={data} />
                </Tab>

            </Tabs>
           
        </div>
        );
}


