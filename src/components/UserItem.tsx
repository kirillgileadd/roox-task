import React, {FC} from 'react';
import {Link} from 'react-router-dom'

interface UserItemProps {
    id: number;
    name: string;
    city: string;
    company: string;
}

const UserItem: FC<UserItemProps> = ({id, name, city, company}) => {
    return (
        <div>
            <ul style={{margin: '5px'}}>
                <li>
                    <p>ФИО: {name}</p>
                </li>
                <li>
                    <p>Город:{city}</p>
                </li>
                <li>
                    <p>Компания:{company}</p>
                </li>
            </ul>
            <Link to={`/${id}`}>
                <button>Подробнее</button>
            </Link>
        </div>
    );
};

export default UserItem;