import Starter from '../views/starter/starter.jsx';
import Notes from '../views/notes/notes.jsx';
import Notifications from '../views/notifications/notifications.jsx';
import Tasks from '../views/tasks/tasks.jsx';
import Calendar from '../views/calendar/calendar.jsx';
import PayBill from '../views/pay-bills/pay-bill.jsx';
import Contacts from '../views/contacts/contacts.jsx';
var ThemeRoutes = [
    { 
        path: '/home', 
        name: 'Home', 
        icon: 'ti-loop', 
        component: Starter 
    },{ 
        path: '/notes', 
        name: 'Notes', 
        icon: 'ti-loop', 
        component: Notes 
    },{ 
        path: '/notifications', 
        name: 'Notifications', 
        icon: 'ti-loop', 
        component: Notifications 
    },{ 
        path: '/tasks', 
        name: 'Tasks', 
        icon: 'ti-loop', 
        component: Tasks 
    },{ 
        path: '/calendar', 
        name: 'Calendar', 
        icon: 'ti-loop', 
        component: Calendar 
    },{ 
        path: '/pay-bill', 
        name: 'PayBill', 
        icon: 'ti-loop', 
        component: PayBill 
    },{ 
        path: '/contacts', 
        name: 'Contacts', 
        icon: 'ti-loop', 
        component: Contacts 
    }
];
export default ThemeRoutes;
