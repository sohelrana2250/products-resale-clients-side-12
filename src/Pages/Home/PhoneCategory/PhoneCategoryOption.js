import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCategoryOption = ({ category }) => {

    const { _id, name, price_range, picture } = category;

    console.log(_id);



    return (
        <div className="card card-compact w-110  bg-base-100 shadow-xl">
            <figure><img style={{ height: '300px' }} src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-3xl">{name}</h2>
                <p className='text-xl font-bold'>Phone Price Range :{price_range}</p>
                <div className="card-actions justify-end">
                    <Link to={`/phonedeails/${_id}`}> <button className="btn btn-primary">Product Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PhoneCategoryOption;