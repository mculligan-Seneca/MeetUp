import React, {useState} from 'react';
import EventCard from '../../EventCard/EventCard';



// Nasty prop drilling for onCheckLocationClick
// NOTE onCheckLocation click is a closure
const ListEvents = ({ data,onCheckLocationClick }) => {

    return (
        <div class="d-flex flex-column align-items-center">
           {data.map(event=>(
            <div key={event.id} className='mb-3'>
                <EventCard data={event} tabKey={'List'} style={{width: '75%'}} onCheckLocationClick={onCheckLocationClick(event)}/>
            </div>))} 
        </div>
    );
}

export default ListEvents;