import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Navbar from '../component/Navbar';
import Timeline from '../component/timeline/Timeline';
import Stats from '../component/stats/Stats';

const Router = createBrowserRouter([
  {path: '/', Component: App},
  {path: 'timeline', Component: Timeline},
  {path: 'stats', Component: Stats }
])

export default Router;