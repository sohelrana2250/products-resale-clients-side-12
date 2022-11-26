import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import OrderTable from './OrderTable';

const Orders = () => {
    const { user } = useContext(AuthContext);


    const url = `http://localhost:5010/booking?email=${user?.email}`;

    const { data: booking = [] } = useQuery({

        queryKey: ['booking', user?.email],
        queryFn: async () => {

            const res = await fetch(url);
            const data = await res.json();
            return data;
        }


    })

    console.log(booking);
    return (
        <div>

            <h1>Buyer Order Data : {booking.length}</h1>
            <div className="overflow-x-auto m-3">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Count </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>
                                transactionID
                            </th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((v, index) => <OrderTable key={index} count={index} order={v}></OrderTable>)
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Orders;