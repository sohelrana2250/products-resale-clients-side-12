import React from 'react';
import { Link } from 'react-router-dom';

const OrderTable = ({ order, count }) => {

    const { img, email, price, ItemName, paid, _id,
        transactionID
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
            <td>{
                transactionID
            }</td>
            <td>
                {

                    price && !paid && <Link to={`/payment/${_id}`}><button className='btn btn-outline btn-primary'>Pay!!</button></Link>

                }
                {
                    price && paid && <span className='text-primary'>Paid</span>

                }
            </td>

        </tr>
    );
};

export default OrderTable;