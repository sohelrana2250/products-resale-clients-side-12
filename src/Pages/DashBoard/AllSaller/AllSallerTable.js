import React from 'react';

const AllSallerTable = ({ saller, count }) => {
    const { name, email, userType, role
    } = saller;

    return (
        <tr>
            <th>{count + 1}</th>
            <th>{name}</th>
            <th>{email}</th>
            <th>{userType}</th>
            <th>{role}</th>

        </tr>
    );
};

export default AllSallerTable;