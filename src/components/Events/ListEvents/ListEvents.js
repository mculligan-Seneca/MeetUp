import React, {useState} from 'react';
import EventCard from '../../Card/EventCard';



// Nasty prop drilling for onCheckLocationClick
// NOTE onCheckLocation click is a closure
const ListEvents = ({ data,onCheckLocationClick }) => {

    return (
        <div id="list-events">
           {data.map(event=>(
            <div key={event.id} className='row mb-3'>
                <EventCard data={event} onCheckLocationClick={onCheckLocationClick(event)}/>
            </div>))} 
        </div>
    );
}

export default ListEvents;