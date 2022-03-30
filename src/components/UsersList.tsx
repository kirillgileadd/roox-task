import React, {FC} from 'react';
import {IUser} from "../types";
import UserItem from "./UserItem/UserItem";

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {
                users.map((user) =>
                    <UserItem
                        key={user.id}
                        id={user.id}
                        city={user.address.city}
                        name={user.name}
                        company={user.company.name}
                    />
                )
            }
        </div>
    );
};

export default UserList;