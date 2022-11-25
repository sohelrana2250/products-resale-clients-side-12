import React from 'react';

const OrderTable = ({ order, count }) => {

    const { img,
        email,
        price,


        ItemName
    } = order;
    return (
        <tr>
            <th>{count + 1}</th>
            <th>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
            </th>
            <td>{email}</td>
            <td>{
                ItemName}</td>
            <td>{price}</td>
            <td><button className='btn btn-outline btn-primary'>Pay!!</button></td>
        </tr>
    );
};

export default OrderTable;