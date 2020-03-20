import Starter from '../views/backend/starter/starter.jsx';
import Notes from '../views/backend/notes/notes.jsx';
import Notifications from '../views/backend/notifications/notifications.jsx';
import Tasks from '../views/backend/tasks/tasks.jsx';
import Create from '../views/backend/tasks/create.jsx';
import Calendar from '../views/backend/calendar/calendar.jsx';
import PayBill from '../views/backend/pay-bills/pay-bill.jsx';
import PayForm from '../views/backend/pay-bills/pay-form.jsx';
import Contacts from '../views/backend/contacts/contacts.jsx';
import Profile from '../views/backend/profile/profile.jsx';
import Page404 from '../views/backend/errors/page-404.jsx';
import Aboutus from '../views/frontend/aboutus/aboutus.jsx';
import Contactus from '../views/frontend/contactus/contactus.jsx';
import Home from '../views/frontend/home/home.jsx';
import Login from '../views/frontend/login/login.jsx';
import Recover from '../views/frontend/recover/recover.jsx';
import Register from '../views/frontend/register/register.jsx';
var ThemeRoutes = [
    {
        path: '/admin/home',
        name: 'Home',
        icon: 'ti-loop',
        auth: true,
        component: Starter
    },{
        path: '/admin/notes',
        name: 'Notes',
        icon: 'ti-loop',
        auth: true,
        component: Notes
    },{
        path: '/admin/notifications',
        name: 'Notifications',
        icon: 'ti-loop',
        auth: true,
        component: Notifications
    },{
        path: '/admin/profile',
        name: 'Profile',
        icon: 'ti-loop',
        auth: true,
        component: Profile
    },{
        path: '/admin/tasks/add',
        name: 'Create',
        icon: 'ti-loop',
        auth: true,
        component: Create
    },{
        path: '/admin/tasks',
        name: 'Tasks',
        icon: 'ti-loop',
        auth: true,
        component: Tasks
    },{
        path: '/admin/calendar',
        name: 'Calendar',
        icon: 'ti-loop',
        auth: true,
        component: Calendar
    },{
        path: '/admin/pay-bill/add',
        name: 'PayForm',
        icon: 'ti-loop',
        auth: true,
        component: PayForm
    },{
        path: '/admin/pay-bill',
        name: 'PayBill',
        icon: 'ti-loop',
        auth: true,
        component: PayBill
    },{
        path: '/admin/contacts',
        name: 'Contacts',
        icon: 'ti-loop',
        auth: true,
        component: Contacts
    },{
        path: '/admin/',
        name: '404',
        icon: 'ti-loop',
        component: Page404
    },{
        path: '/admin',
        name: 'Home',
        icon: 'ti-loop',
        auth: true,
        component: Starter
    },{
        path: '/aboutus',
        name: 'Aboutus',
        icon: 'ti-loop',
        component: Aboutus
    },{
        path: '/contactus',
        name: 'Contactus',
        icon: 'ti-loop',
        component: Contactus
    },{
        path: '/home',
        name: 'Home',
        icon: 'ti-loop',
        component: Home
    },{
        path: '/login',
        name: 'Login',
        icon: 'ti-loop',
        component: Login
    },{
        path: '/recover',
        name: 'Recover',
        icon: 'ti-loop',
        component: Recover
    },{
        path: '/register',
        name: 'Register',
        icon: 'ti-loop',
        component: Register
    },{
        path: '/',
        name: 'Home',
        icon: 'ti-loop',
        component: Home
    }
];
export default ThemeRoutes;
