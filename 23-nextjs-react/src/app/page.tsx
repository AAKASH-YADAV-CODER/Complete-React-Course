"use client";
import MeetupList from './components/meetups/MeetupList';
import Layout from './components/layout/Layout';
// import { MongoClient } from 'mongodb'
// import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation';
const Dummy_meetup = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhDcKmfyivpgWn3oJbHgxGpCBHucrr6eS-R7KkE0D&s',
        address: 'some address vpo mandhoti',
        description:'This is first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.yourtango.com/sites/default/files/styles/body_image_default/public/2018/Single%203.jpg',
        address: 'some address vpo rohad',
        description:'This is Second meetup!'
    }

]
const HomePage = async () => {
    const data = await getData();
    return (
        <>
        <Layout>
                {/* {data.map((meetup) => <MeetupList meetups={meetup}/>)} */}
        <MeetupList meetups={data} />
        </Layout>
    </>
    )
}
export async function getData() {
    const res = Dummy_meetup;
    if (res) {
        return res;
    }
    return notFound();
    // return Dummy_meetup;
//     const client = await MongoClient.connect(
//     'mongodb+srv://aakashrao:YADAVboy321$@cluster0.jrurbpo.mongodb.net/meetups?retryWrites=true&w=majority'
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection('meetups');

//     const meetups = await meetupsCollection.find().toArray();
//     return new NextResponse(JSON.stringify(meetups), { status: 200 });
//   return {
//     props: {
//       meetups: meetups.map((meetup) => ({
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//         id: meetup._id.toString(),
//       })),
//     },
//     revalidate: 1,
//   };

}
export default HomePage;