import React from 'react';
import {createRoot} from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import {browserRouterMap} from './componentMap';
const root = createRoot(document.getElementById('app'));

const router = createBrowserRouter([browserRouterMap]);
root.render(
    <RouterProvider router={router}/>
);
