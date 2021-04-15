/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Schedule from 'views/Schedule/Schedule'
import Dashboard from '../views/Dashboard/Dashboard'
import DashboardEnergy from '../views/DashboardEnergy/DashboardEnergy'
import ModalPopup from '../views/ModalPopup/ModalPopup'
import ModalPopupCustomRedux from '../views/ModalPopup/ModalPopupCustomRedux'

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'nc-icon nc-bank',
        component: Dashboard,
        layout: '/admin',
    },
    {
        path: '/energy',
        name: 'Dashboard Energy',
        icon: 'nc-icon nc-bulb-63',
        component: DashboardEnergy,
        layout: '/admin',
    },
    {
        path: '/schedule',
        name: 'Schedule',
        icon: 'nc-icon nc-time-alarm',
        component: Schedule,
        layout: '/admin',
    },
    {
        path: '/custommodal',
        name: 'Modal redux-custom',
        icon: 'nc-icon nc-alert-circle-i',
        component: ModalPopupCustomRedux,
        layout: '/admin',
    },
    {
        path: '/modal',
        name: 'Modal react-redux-firebase',
        icon: 'nc-icon nc-alert-circle-i',
        component: ModalPopup,
        layout: '/admin',
    },
]
export default routes
