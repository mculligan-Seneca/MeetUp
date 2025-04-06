import MyEvents from './components/MyEvents/MyEvents';
import ActiveEvents from './components/ActiveEvents/ActiveEvents';
import MapEvents from './components/MapEvents/MapEvents';
import App from './App';
import data from './data.json';

//temp for loading data
function loader(){
    return data;
}


const browserRouterMap ={
    path: '/',
    Component: App,
    children: [
        { 
            index: true,
            title: 'Map Events',
            path: '/mapEvents',//mapEvents/:eventId?'
            Component: MapEvents,
            loader: loader
        },
        {
            title: 'Active Events',
            path: '/activeEvents',
            Component: ActiveEvents,
            loader: loader

        },
        {
            title: 'My Events',
            path: '/myEvents',
            Component: MyEvents,
            loader: loader
        }
    ]
};


const navBarItems = [
    {title: 'Map Events', route: '/mapEvents'},
    { title: 'Active Events', route: '/activeEvents'},
    {title: 'My Events', route: '/myEvents'}];

export  {browserRouterMap, navBarItems};
