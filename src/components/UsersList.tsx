import React, {FC} from 'react';
import {IUser} from "../types";

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {
                users.map((user) => <div>{user.name}</div>)
            }
        </div>
    );
};

export default UserList;