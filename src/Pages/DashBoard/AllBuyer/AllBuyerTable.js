import React from 'react';

const AllBuyerTable = ({ buyer, count }) => {

    const { name, email, userType, role
    } = buyer;
    return (
        <tr >
            <th>{count + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{userType}</td>
            <td>{role}</td>
        </tr>
    );
};

export default AllBuyerTable;