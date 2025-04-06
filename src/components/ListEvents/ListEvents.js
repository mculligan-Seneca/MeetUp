import React, {useState} from 'react';
import EventCard from '../EventCard/EventCard';



//Generic list events class
//onClickAction accepts closure to bind with data
const ListEvents = ({ data, onClickAction, title, actionButton  }) => {

    return (
        <>
            <h3>{title}</h3>
            <div class="d-flex flex-column align-items-center">
            {data.map(event=>(
                <div key={event.id} className='mb-3'>
                    <EventCard data={event} style={{width: '75%'}} 
                        actionButton={{ 
                            ...actionButton,
                            onClickAction: onClickAction(event)
                            }}
                        />
                </div>))} 
            </div>
        </>
    );
}

export default ListEvents;