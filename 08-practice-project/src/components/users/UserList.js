import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';
const UserList = (porps) => {
    return (
        <Card className={classes.user}>
            <ul>
                {porps.users.map(user =>
                    <li key={user.id}>
                        {user.name} ({user.age} year old)
                    </li>
                )}
            </ul>
        </Card>
    )
}
export default UserList;