import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../types";
import {useTypeSelector} from "../hooks/useTypeSelector";
import Loader from "./Loader";

const UserItemForm:FC = () => {
    const {user, loading, error} = useTypeSelector(state => state.userProfile)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IUser>();
    const onSubmit: SubmitHandler<IUser> = data => console.log(data);

    return (
        !loading && user ?
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user?.name} {...register("name", )} />
            <input defaultValue={user?.username} {...register("username", )} />
            <input defaultValue={user?.email} {...register("email", )} />
            <input defaultValue={user?.address.street} {...register("address.street", )} />
            <input defaultValue={user?.address.city} {...register("address.city", )} />
            <input defaultValue={user?.address.zipcode} {...register("address.zipcode", )} />
            <input defaultValue={user?.phone} {...register("phone", )} />
            <input defaultValue={user?.website} {...register("website", )} />
            {errors.username && <span>This field is required</span>}
            <button type="submit" >submit</button>
        </form> : <Loader/>
    );
};

export default UserItemForm;