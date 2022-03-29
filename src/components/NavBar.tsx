import React, {FC, useEffect, useState} from 'react';
import {useActions} from "../hooks/useAction";
import Button from "./Button/Button";

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
        <div>
            Navbar
            <Button onClick={sortHandler} value={'address.city'}>По городу</Button>
            <Button onClick={sortHandler} value={'company.name'}>По комании</Button>
        </div>
    );
};

export default NavBar;