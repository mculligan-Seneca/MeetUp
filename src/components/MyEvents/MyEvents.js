import React, {useState} from 'react';
import ListEvents from '../ListEvents/ListEvents';
import { useLoaderData } from 'react-router';

export default function MyEvents() {
    const data = useLoaderData();
    return (<ListEvents
        actionButton={{label: 'UnRegister', variant: 'danger'}}
        title={'My Events'}
        data={data}
        onClickAction={()=>console.log('Button Clicked!')}
    />);
}