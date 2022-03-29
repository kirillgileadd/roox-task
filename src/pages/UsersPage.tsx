import React, {FC, useEffect} from 'react';
import {useActions} from "../hooks/useAction";
import {useTypeSelector} from "../hooks/useTypeSelector";
import UsersList from "../components/UsersList";
import Loader from "../components/Loader";

const UsersPage: FC = () => {
    const {users, error, loading} = useTypeSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    return !loading ?
        <div>
            <UsersList users={users}/>
        </div>
        :
        <Loader/>

};

export default UsersPage;