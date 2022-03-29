import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../types";
import Button, {ButtonVariant} from "./Button/Button";

interface UserItemFormProps {
    disabled: boolean;
    user: IUser;
}

const UserItemForm: FC<UserItemFormProps> = ({disabled, user}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<IUser>({
        defaultValues: {
            name: user.name,
            username: user.username,
            email: user.email,
            address: {
                street: user.address.street,
                city: user.address.city,
                zipcode: user.address.zipcode
            },
            phone: user.phone,
            website: user.website

        }
    });
    const onSubmit: SubmitHandler<IUser> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", {required: true})} disabled={disabled}/>
            <input {...register("username", {required: true})} disabled={disabled}/>
            <input {...register("email", {required: true})} disabled={disabled}/>
            <input {...register("address.street", {required: true})} disabled={disabled}/>
            <input {...register("address.city", {required: true})} disabled={disabled}/>
            <input {...register("address.zipcode", {required: true})} disabled={disabled}/>
            <input {...register("phone", {required: true})} disabled={disabled}/>
            <input {...register("website", {required: true})} disabled={disabled}/>
            {errors.username && <span>This field is required</span>}
            <Button type='submit' disabled={disabled} variant={disabled ? ButtonVariant.disabled : ButtonVariant.submit}>Отправить</Button>
        </form>
    );
};

export default UserItemForm;