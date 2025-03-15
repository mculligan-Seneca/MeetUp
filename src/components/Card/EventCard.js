import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// props.data is singular event item
// contains onCheckLocationClick to load the map view
export default function EventCard(props) {
    return (
        <Card style={{width: '20rem'}}>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-body-secondary">{props.data.date}</Card.Subtitle>
            <Card.Text>
                {props.data.description}
            </Card.Text>
            <Button variant="primary" onClick={props.onCheckLocationClick}>Check Location</Button>
        </Card>
    );
}