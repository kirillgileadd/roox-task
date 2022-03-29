import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchUserProfile} from "../store/action-creators/userProfile";
import {useActions} from "../hooks/useAction";
import {useTypeSelector} from "../hooks/useTypeSelector";
import UserItemForm from "../components/UserItemForm";

const UserProfile: FC = () => {
    let {id} = useParams()
    const {fetchUserProfile} = useActions()
    const {user} = useTypeSelector(state => state.userProfile)

    useEffect(() => {
        fetchUserProfile(id)
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
               <UserItemForm/>
            </div>
        </div>
    );
};

export default UserProfile;