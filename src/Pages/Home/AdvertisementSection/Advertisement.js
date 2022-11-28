import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Advertisement = () => {

    const { advertisement } = useContext(AuthContext);
    const { img, location, name, orginal_price, resale_price, used_year, sallerName } = advertisement;
    return (
        <div className='m-3 my-10'>
            {

                advertisement ? <>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img style={{ width: '800px', height: '400px' }} src={img} alt="Album" /></figure>
                        <div className="card-body text-xl font-bold">
                            <p>Product Name: {name}</p>
                            <p>Location : {location}</p>
                            <p> Orginal Price :  {orginal_price}</p>
                            <p> Resale Price : {resale_price}</p>
                            <p> Used Year : {used_year}</p>
                            <p> Saller Price : {sallerName}</p>

                        </div>
                    </div>

                </> : <></>
            }
        </div>
    );
};

export default Advertisement;