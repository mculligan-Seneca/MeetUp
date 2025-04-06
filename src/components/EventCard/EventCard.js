import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from './images/building.png';
import userIcon from './images/userIcon.png';
// props.data is singular event item
// contains onCheckLocationClick to load the map view
//Figure out how to dynamically load image associated with event
export default function EventCard(props) {
    return (
        <Card style={props.style}>
            <Card.Img alt="Event image" src={img} className='rounded p-1'/>
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-body-secondary">
                        <div className='row p-1 align-start'>
                            <div className='col-1'>
                                 <img alt='user' src={userIcon} style={{width: '75%',height: 'auto'}}/>
                            </div>
                            <div className='col-3'>
                                <span>
                                    {props.data.postedBy}
                                </span>
                            </div>
                             
                            <div className='col-3'>
                                <span>
                                    {props.data.date}
                                </span>
                            </div>
                        </div>
                        <div className='row'>
                            <span>Attendees: {props.data.attendees}</span>
                        </div>
                    </Card.Subtitle>
                <Card.Text>
                    {props.data.description}
                </Card.Text>
                
                { props.actionButton !==undefined && 
                    <Button variant={props.actionButton.variant} onClick={props.actionButton.onClickAction}>
                        {props.actionButton.label}
                    </Button> 
                    
                }  
            </Card.Body>
        </Card>
    );
}