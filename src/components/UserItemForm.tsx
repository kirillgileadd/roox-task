import React, {FC} from 'react';

const UserItemForm:FC = () => {
    return (
        <form action="">
            <div>
                <label>name</label>
                <input type="text"/>
            </div>
            <div>
                <label>User name</label>
                <input type="text"/>
            </div>
            <div>
                <label>E-mail</label>
                <input type="text"/>
            </div>
            <div>
                <label>Street</label>
                <input type="text"/>
            </div>
            <div>
                <label>City</label>
                <input type="text"/>
            </div>
            <div>
                <label>Zip code</label>
                <input type="text"/>
            </div>
            <div>
                <label>Phone</label>
                <input type="text"/>
            </div>
            <div>
                <label>Website</label>
                <input type="text"/>
            </div>
            <div>
                <label>Comment</label>
                <input type="text"/>
            </div>
        </form>
    );
};

export default UserItemForm;