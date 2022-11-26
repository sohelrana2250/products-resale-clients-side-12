import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div>

            <h1 className='text-center text-red-500 text-3xl font-bold'>Error 404 </h1>
            <p className='text-center text-red-500 text-2xl font-bold'>Some is Wrong Server Error is 401 to 499</p>
            <p className='text-center text-red-500 text-xl font-bold'>Please Relex</p>
            <p className='text-center text-red-500 text-3xl font-bold'>
                <i>{error.statusText || error.message}</i>
            </p>
            <p className='text-center text-3xl'>Please LogOut <button>Logout</button> and Lock Back in</p>

        </div>
    );
};

export default DisplayError;