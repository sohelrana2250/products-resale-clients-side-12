import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthProvider';


const MyProductDisplay = ({ product, count, handelDeleteProduct }) => {

    const { setAdvertisement } = useContext(AuthContext);

    const { _id, img, location, name, orginal_price, resale_price, used_year, sallerName } = product;


    return (
        <tr>
            <th>{count + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
            </td>
            <td>{sallerName}</td>
            <td>{name}</td>
            <td>{location}</td>
            <td>{orginal_price}</td>
            <td>{resale_price}</td>
            <td>{used_year}</td>
            <td><button onClick={() => handelDeleteProduct(_id)} className='btn btn-outline btn-error'>Delete</button></td>
            <td><button onClick={() => setAdvertisement(product)} className='btn btn-outline btn-primary'>Advertisement</button></td>

        </tr>
    );
};

export default MyProductDisplay;