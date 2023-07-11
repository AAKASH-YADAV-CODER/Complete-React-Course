import connect from "../../utils/db";
import Meetups from '../../models/Meetups';
import { NextResponse } from "next/server";
// import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup
export const POST = async (req,res) => {
  try {
    const body = await req.json();
    await connect();
    await Meetups.create(body);
    return new NextResponse("sent", { status: 200 });
  } catch (e) {
    return new NextResponse("Database Error", { status: 500 });
  }
}

// async function Get(req, res) {
//   if (req.method === 'POST') {
//     const data = req.body;
    
//     const client = await MongoClient.connect(
//       'mongodb+srv://aakashrao:YADAVboy321$@cluster0.jrurbpo.mongodb.net/meetups?retryWrites=true&w=majority'
//     );
//     const db = client.db();

//     const meetupsCollection = db.collection('meetups');

//     const result = await meetupsCollection.insertOne(data);

//     console.log(result);

//     client.close();

//     res.status(201).json({ message: 'Meetup inserted!' });
//   }
// }

// export default Get;