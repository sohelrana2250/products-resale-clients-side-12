import { useQuery } from '@tanstack/react-query';
import React from 'react';

import AllSallerTable from './AllSallerTable';

const AllSeller = () => {

    //http://localhost:5010/users/saller

    const { data: allSaller = [] } = useQuery({

        queryKey: ['users/saller'],
        queryFn: () => fetch('https://b612-used-products-resale-server-side-mu.vercel.app/users/saller').then((res) => res.json())


    })


    return (
        <div>

            <h1 className='text-2xl font-bold'>All Saller List : {allSaller.length}</h1>
            {
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Count</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Type</th>
                                <th>User Role</th>
                            </tr>
                        </thead>
                        <tbody>

                            {

                                allSaller.map((v, index) => <AllSallerTable key={index} saller={v} count={index}></AllSallerTable>)

                            }






                        </tbody>
                    </table>
                </div>

            }

        </div>
    );
};

export default AllSeller;