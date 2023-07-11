'use client'
import MeetupDetail from '../components/meetups/MeetupDetail';
import { getData } from '../page';
// import { MongoClient, ObjectId } from 'mongodb';

async function MeetupDetails({params}) {
    const data = await getData(params);
    return (
        <>
        {data.map((data)=>(
        <MeetupDetail
      key={data.id}
      image={data.image}
      title={data.title}
      address={data.address}
      description={data.description}
    />))}
    </>)
//     <MeetupDetail
//       image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
//       title='First Meetup'
//       address='Some Street 5, Some City'
//       description='This is a first meetup'
//     />
//   );
}

export default MeetupDetails;