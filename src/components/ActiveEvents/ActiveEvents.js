import React from "react";
import ListEvents from "../ListEvents/ListEvents";
import { useLoaderData } from "react-router";


export default function ActiveEvents(){
    const data = useLoaderData();
    return (<ListEvents
                actionButton={{label: 'Check Location', variant: 'primary'}}
                title={'Active Events'}
                data={data}
                onClickAction={()=>console.log('Button Clicked!')}

            />);
}