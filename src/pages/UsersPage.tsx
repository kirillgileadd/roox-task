import React, {FC, useEffect} from 'react';
import {useActions} from "../hooks/useAction";
import {useTypeSelector} from "../hooks/useTypeSelector";
import UsersList from "../components/UsersList";
import Loader from "../components/Loader";

const UsersPage: FC = () => {
    const {users, error, loading} = useTypeSelector(state => state.user)
    const {fetchUsers, clearUsers} = useActions()

    useEffect(() => {
        fetchUsers()
        return () => {
            clearUsers()
        }
    }, [])

    return !loading && users.length ?
        <div>
            <UsersList users={users}/>
        </div>
        :
        <Loader/>

};

export default UsersPage;