import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UserTable from './UserTable';

const AllUsers = () => {


    const { data: userData = [], refetch } = useQuery({

        queryKey: ['users'],
        queryFn: () => fetch('https://b612-used-products-resale-server-side-mu.vercel.app/users').then((res) => res.json())


    })

    //console.log(userData)


    const handelMakeAdmin = (id) => {

        //alert(id);

        fetch(`https://b612-used-products-resale-server-side-mu.vercel.app/users/admin/${id}`, {

            method: 'PUT'
        }).then((res) => res.json()).then((data) => {

            console.log(data);

            alert('Successfullu Admin Create');
            refetch();
        }).catch((error) => {
            console.error(error.message);
        })
    }

    const handelUserDelete = (id) => {


        const confirmation = window.confirm('Are You sere yoy want to delete this ', id)
        if (confirmation) {
            fetch(`https://b612-used-products-resale-server-side-mu.vercel.app/userDelete/${id}`, {
                method: 'DELETE'
            }).then((res) => res.json()).then((data) => {

                console.log(data);
                if (data.acknowledged) {
                    alert('Successfully Delete user');
                    refetch();
                }
            }).catch((error) => {
                console.log(error.message);
            })
        }

    }
    return (
        <div>
            <h1>All Users List:{userData.length} </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User-Type</th>
                            <th>Make-Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {userData.map((v, index) => <UserTable key={index} user={v} count={index} handelMakeAdmin={handelMakeAdmin} handelUserDelete={handelUserDelete}></UserTable>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;