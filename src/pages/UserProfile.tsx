import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useActions} from "../hooks/useAction";
import UserItemForm from "../components/UserItemForm";

const UserProfile: FC = () => {
    let {id} = useParams()
    const {fetchUserProfile, clearUserProfile} = useActions()

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
                <button>Редактировать</button>
            </div>
            <div>
                <UserItemForm />
            </div>
        </div>
    );
};

export default UserProfile;