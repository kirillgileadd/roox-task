import React, {FC} from 'react';
import {Link} from 'react-router-dom'
import style from './UserItem.module.scss'

interface UserItemProps {
    id: number;
    name: string;
    city: string;
    company: string;
}

const UserItem: FC<UserItemProps> = ({id, name, city, company}) => {
    return (
        <div className={style.paper}>
            <ul>
                <li className={style.item}>
                    <p> <span className={style.label}>ФИО:</span>  {name}</p>
                </li>
                <li className={style.item}>
                    <p> <span className={style.label}>Город:</span>  {city}</p>
                </li>
                <li className={style.item}>
                    <p> <span className={style.label}>Компания:</span>  {company}</p>
                </li>
            </ul>
            <Link to={`/${id}`} className={style.link}>
                Подробнее
            </Link>
        </div>
    );
};

export default UserItem;