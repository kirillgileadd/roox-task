import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../types";
import Button, {ButtonVariant} from "../Button/Button";
import style from './UserItemForm.module.scss'

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
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.input__box}>
                <label className={style.label}> Name</label>
                <input
                    className={style.input}
                    style={{borderColor: errors?.name ? 'red' : '#D8D8D8'}}
                    {...register("name", {required: true})}
                    disabled={disabled}
                />
            </div>
            <div className={style.input__box}>
                <label className={style.label}> Username</label>
                <input
                    className={style.input}
                    style={{borderColor: errors?.username ? 'red' : '#D8D8D8'}}
                    {...register("username", {required: true})}
                    disabled={disabled}
                />
            </div>
            <div className={style.input__box}>
                <label className={style.label}> E-mail</label>
                <input
                    className={style.input}
                    style={{borderColor: errors?.email ? 'red' : '#D8D8D8'}}
                    {...register("email", {required: true})}
                    disabled={disabled}
                />
            </div>
            <div className={style.input__box}>
                <label className={style.label}> Street</label>
                <input
                    className={style.input}
                    style={{borderColor: errors?.address?.street ? 'red' : '#D8D8D8'}}
                    {...register("address.street", {required: true})}
                    disabled={disabled}
                />
            </div>
            <div className={style.input__box}>
                <label className={style.label}> City</label>
                <input
                    className={style.input}
                    style={{borderColor: errors?.address?.city ? 'red' : '#D8D8D8'}}
                    {...register("address.city", {required: true})}
                    disabled={disabled}
                />
            </div>
            <div className={style.input__box}>
                <label className={style.label}> Zip Code</label>
                <input
                    className={style.input}
                    style={{borderColor: errors?.address?.zipcode ? 'red' : '#D8D8D8'}}
                    {...register("address.zipcode", {required: true})}
                    disabled={disabled}
                />
            </div>
            <div className={style.input__box}>
                <label className={style.label}> Phone</label>
                <input
                    className={style.input}
                    style={{borderColor: errors?.phone ? 'red' : '#D8D8D8'}}
                    {...register("phone", {required: true})}
                    disabled={disabled}
                />
            </div>
            <div className={style.input__box}>
                <label className={style.label}> Website</label>
                <input
                    className={style.input}
                    style={{borderColor: errors?.website ? 'red' : '#D8D8D8'}}
                    {...register("website", {required: true})}
                    disabled={disabled}
                />
            </div>
            <div className={style.input__box}>
                <label className={style.label}> Comment</label>
                <input
                    className={style.input}
                    style={{height: "55px", width: '100%'}}
                    type="text"
                    {...register("comment")}
                    disabled={disabled}
                />
            </div>
            <Button type='submit' disabled={disabled}
                    variant={disabled ? ButtonVariant.disabled : ButtonVariant.submit}>Отправить</Button>
        </form>
    );
};

export default UserItemForm;