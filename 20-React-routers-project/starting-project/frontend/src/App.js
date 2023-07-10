import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditEventPage from './Pagecomponent/EditEventPage';
import ErrorPage from './Pagecomponent/ErrorPage';
import EventDetailpage, { loader as loadereventdetail, action as eventdeleteaction } from './Pagecomponent/EventDetailpage';
import Eventspage, { loader as loadevents } from './Pagecomponent/Eventspage';
import EventsRootNaviga from './Pagecomponent/EventsRootNaviga';
import Homepage from './Pagecomponent/Homepage';
import NewEventpage from './Pagecomponent/NewEventpage';
import Roots from './Pagecomponent/Roots';
import { action as neweventactionmanipulation } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './Pagecomponent/Newsletter';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: 'events', element: <EventsRootNaviga />,
        children: [
          {
            index: true, element: <Eventspage />,
            loader: loadevents,
          },
          {
            path: ':ID',
            id: 'event-detail',
            loader: loadereventdetail,
            children: [
              { index: true, element: <EventDetailpage />, action: eventdeleteaction, },
              {
                path: 'edit', element: <EditEventPage />, action: neweventactionmanipulation
              },
            ],
          },
          { path: 'new', element: <NewEventpage />, action: neweventactionmanipulation },
        ]
      }, {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction
      }
    ],
  },

]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
