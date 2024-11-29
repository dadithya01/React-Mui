import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import Home from "../../pages/Home/Home.jsx";
import Axios from "../../pages/Axios/Axios.jsx";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Student from '../../pages/Student/Student.jsx'
import * as React from "react";

const routes = [
    {
        name: 'Dashboard',
        key: 'dashboard',
        component: <Dashboard/>,
        path: '/dashboard',
        icon: <InboxIcon />
    },
    {
        name: 'Home',
        key: 'home',
        component: <Home/>,
        path: '/home',
        icon: <AcUnitIcon />
    },
    {
        name: 'Axios',
        key: 'axios',
        component: <Axios/>,
        path: '/axios',
        icon: <AcUnitIcon />
    },
    {
        name: 'Student',
        key: 'student',
        component: <Student/>,
        path: '/student',
        icon: <AcUnitIcon />
    }
];

export default routes;
