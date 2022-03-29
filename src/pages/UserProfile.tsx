import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useActions} from "../hooks/useAction";
import UserItemForm from "../components/UserItemForm";
import {useTypeSelector} from "../hooks/useTypeSelector";
import Loader from "../components/Loader";
import Button from "../components/Button/Button";

const UserProfile: FC = () => {
    let {id} = useParams()
    const {fetchUserProfile, clearUserProfile} = useActions()
    const {user, loading} = useTypeSelector(state => state.userProfile)
    const [disabled, setDisabled] = useState<boolean>(true)

    useEffect(() => {
        fetchUserProfile(id)
        return function () {
            clearUserProfile()
        }
    }, [])

    return (
        <div>
            <div>
                <h1>
                    Профиль пользователя
                </h1>
                <Button onClick={() => setDisabled(prev => !prev)}>Редактировать</Button>
            </div>
            <div>
                {
                    !loading && user ? <UserItemForm user={user} disabled={disabled}/> : <Loader/>
                }
            </div>
        </div>
    );
};

export default UserProfile;