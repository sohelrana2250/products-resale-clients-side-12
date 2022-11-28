import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllBuyerTable from './AllBuyerTable';

const AllBuyer = () => {

    //http://localhost:5010/users/Buyer


    const { data: allBuyer = [] } = useQuery({

        queryKey: ['users/Buyer'],
        queryFn: () => fetch('https://b612-used-products-resale-server-side-mu.vercel.app/users/Buyer').then((res) => res.json())


    })
    return (
        <div>

            <h1>All Buyer List :{allBuyer.length} </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>User-Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyer.map((v, index) => <AllBuyerTable key={index} buyer={v} count={index}></AllBuyerTable>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyer;