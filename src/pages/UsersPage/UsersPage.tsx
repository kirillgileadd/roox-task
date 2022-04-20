import React, {FC, useEffect} from 'react';
import {useActions} from "../../hooks/useAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import UsersList from "../../components/UsersList";
import Loader from "../../components/Loader";
import style from './UserPage.module.scss'
import {useDeclination} from "../../hooks/useDeclination";

const UsersPage: FC = () => {
    const {users, error, loading} = useTypeSelector(state => state.user)
    const {fetchUsers, clearUsers} = useActions()
    const UsersDeclination = useDeclination(users.length, ['Пользователь', 'Пользователя', 'Пользователей'])

    useEffect(() => {
        fetchUsers()
        return () => {
            clearUsers()
        }
    }, [])

    return (
        <div className={style.main}>
            <h3 className={style.title}>
                Список пользователей
            </h3>
            {
                !loading && users.length ? <UsersList users={users}/> : <Loader/>
            }
            <p className={style.users_quantity}>Найдено {users.length} {UsersDeclination}</p>
        </div>
    );
};

export default UsersPage;