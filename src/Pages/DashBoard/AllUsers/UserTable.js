import React from 'react';

const UserTable = ({ user, count, handelMakeAdmin }) => {

    const { _id, name, email, userType, role } = user;


    return (
        <tr>
            <th>{count + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{userType}</td>
            <td>{role !== 'admin' && <button onClick={() => handelMakeAdmin(_id)} className='btn btn-xs  btn-primary'>Make-Admin</button>}</td>
            <td><button className='btn btn-xs btn-outline btn-accent'>Delete</button></td>
        </tr>
    );
};

export default UserTable;