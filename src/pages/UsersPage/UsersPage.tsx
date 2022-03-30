import React, {FC, useEffect} from 'react';
import {useActions} from "../../hooks/useAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import UsersList from "../../components/UsersList";
import Loader from "../../components/Loader";
import style from './UserPage.module.scss'

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
        <div className={style.main}>
            <h3 className={style.title}>
                Список пользователей
            </h3>
            <UsersList users={users}/>
        </div>
        :
        <Loader/>

};

export default UsersPage;