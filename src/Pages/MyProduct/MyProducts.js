import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyProductDisplay from './MyProductDisplay';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const url = `https://b612-used-products-resale-server-side-mu.vercel.app/MyProduct?email=${user?.email}`;

    const { data: myproduct = [], refetch } = useQuery({

        queryKey: ['MyProduct', user?.email],
        queryFn: async () => {

            const res = await fetch(url);
            const data = await res.json();
            return data;
        }


    })

    //console.log(myproduct)

    const handelDeleteProduct = (id) => {

        const confirmation = window.confirm('Are You Sure .You want to Delete Product ' + id);
        if (confirmation) {

            fetch(`https://b612-used-products-resale-server-side-mu.vercel.app/MyProduct/${id}`, {

                method: 'DELETE'
            }).then((res) => res.json()).then((data) => {

                console.log(data);
                if (data.acknowledged) {
                    alert('Successfully-Delete');
                    refetch();
                }
            }).catch((error) => {
                console.log(error.message)
            })

        }
    }




    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>My Product List :{myproduct.length}</h1>
            <div className="overflow-x-auto m-3">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Count </th>
                            <th>Image</th>
                            <th>User</th>
                            <th>Product Name</th>
                            <th>Location</th>
                            <th>Orginal Price</th>
                            <th>Resel Price</th>
                            <th>Use-Year</th>
                            <th>Delete</th>
                            <th>Advertisement</th>

                        </tr>
                    </thead>
                    <tbody>
                        {myproduct.map((v, index) => <MyProductDisplay key={index} product={v} count={index} handelDeleteProduct={handelDeleteProduct}></MyProductDisplay>)}





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;