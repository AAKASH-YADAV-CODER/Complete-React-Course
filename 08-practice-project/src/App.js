import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';
function App() {
  const [userList, setuserList] = useState([]);
  const addUsershandler = (Uname, Uage) => {
    setuserList(prevlist => {
      return [...prevlist, { name: Uname, age: Uage, id: Math.random().toString() }]
    });
  };
  return (
    <div>
      <AddUser onAddUsers={addUsershandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
