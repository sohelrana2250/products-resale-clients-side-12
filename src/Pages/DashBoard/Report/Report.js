import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportTable from './ReportTable';

const Report = () => {

    const { data: productReport = [] } = useQuery({

        queryKey: ['productReport'],
        queryFn: async () => {

            const res = await fetch('https://b612-used-products-resale-server-side-mu.vercel.app/productReport');
            const data = await res.json();
            return data;
        }


    })
    return (
        <div>

            <h1 className='text-3xl font-bold'>Report List :{productReport.length} </h1>
            <div className="overflow-x-auto m-3">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Product-ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category Name</th>
                            <th>Saller Name</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            productReport.map((v, index) => <ReportTable key={index} report={v} count={index}></ReportTable>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;