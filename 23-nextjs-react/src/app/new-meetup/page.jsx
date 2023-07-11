"use client"
import React from 'react'
// import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
const NewMeetupPage = () => {
    // const router = useRouter();

    const addmeetupHandler = async (enteredMeetupData) => {
        console.log(enteredMeetupData);

      const response = await fetch('http://localhost:3000/api/new-meetups', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      encodeBodyAsJSON: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    // router.push('/');
        // console.log(enteredMeetupData);
    }
  return (
      <NewMeetupForm onAddMeetup={ addmeetupHandler} />
  )
}
export default NewMeetupPage;