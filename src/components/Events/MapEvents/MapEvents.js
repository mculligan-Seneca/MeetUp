import React, {useState} from 'react';
import { APIProvider,
         Map,
         MapCameraChangedEvent,
         AdvancedMarker,
         Pin,
         InfoWindow
        } from '@vis.gl/react-google-maps';
import EventCard from '../../EventCard/EventCard';


export default function MapEvents({ data, selectedEvent, setSelectedEvent }) {
    
    const onInfoWindowClose = (e) => setSelectedEvent(null);
    const selectEvent = (event) => (e) => setSelectedEvent(event);
    return (
        <APIProvider 
            apiKey={process.env.GOOGLE_MAPS_API_KEY}
            onLoad={()=> console.log('Maps api loaded correctly')}
            onError={(e)=> console.error(`Maps failed to load. ERROR ${e}`)}
            >
                <Map
                    defaultZoom={13}
                    style={{height: "75vh", width: "100%"}}
                    defaultCenter={ { "lat": 40.7127135, "lng": -74.5763354 } }
                    onCameraChanged={ (ev) => console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)}
                    mapId={process.env.GOOGLE_MAP_ID}
                >
                    {
                        data.map(event => <AdvancedMarker key={event.id} 
                                                position={event.coordinates}
                                                onClick={selectEvent(event)}/>)
                    }
                    {selectedEvent !== null && 
                        <InfoWindow position={selectedEvent.coordinates}
                            onClose={onInfoWindowClose}
                        >
                            <EventCard tabKey={'Map'} data={selectedEvent} style={{width: '100%'}}/> 
                        </InfoWindow>
                    }
                </Map>
        </APIProvider>
    );
};

