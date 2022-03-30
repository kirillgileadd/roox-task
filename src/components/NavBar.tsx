import React, {FC, useEffect, useState} from 'react';
import {useActions} from "../hooks/useAction";
import Button from "./Button/Button";
import style from '../App.module.scss'

const NavBar:FC = () => {
    const [sort, setSort] = useState<string>('')
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers(sort)
    }, [sort])

    const sortHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSort(e.currentTarget.value)
    }

    return (
        <div className={style.navbar}>
            <h6 className={style.navbar__title}>Сортировка</h6>
            <Button className={style.navbar__btn} onClick={sortHandler} value={'address.city'}>По городу</Button>
            <Button className={style.navbar__btn} onClick={sortHandler} value={'company.name'}>По комании</Button>
        </div>
    );
};

export default NavBar;