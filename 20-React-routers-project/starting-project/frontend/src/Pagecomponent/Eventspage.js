import { defer, json, useLoaderData, Await } from 'react-router';
import { Suspense } from 'react';
import EventsList from '../components/EventsList';

function EventsPage() {
    const { events } = useLoaderData();
    // if (data.isError) {
    //     return<p>data.message</p>
    // }
    // const events = data.events;
    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {(resolvedata) => < EventsList events={resolvedata} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;
async function loaderevent() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // return { isError: true, Message: 'Could not fetch events.' };
        // throw new Response(JSON.stringify({ message: 'could not fetch solution or data' }), { status: 500 });
        return json({ message: 'could not fetch solution or data' }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
        // return response;
    }
}
export async function loader() {
    return defer({
        events: loaderevent(),
    });
}