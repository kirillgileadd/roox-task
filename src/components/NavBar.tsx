import React, {FC, useEffect, useState} from 'react';
import {useActions} from "../hooks/useAction";

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
            <button onClick={sortHandler} value={'address.city'}>По городу</button>
            <button onClick={sortHandler} value={'company.name'}>По комании</button>
        </div>
    );
};

export default NavBar;