import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';


import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../Hook/useAdmin';

import NavBar from '../Pages/Shared/NavBar';


const DashBoardLayout = () => {

    const { user } = useContext(AuthContext);


    const [isAdmin] = useAdmin(user?.email)






    // alert(isAdmin);

    return (
        <div>
            <NavBar></NavBar>
            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label htmlFor="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 bg-base-100 text-base-content">


                        <li><Link>My Data</Link></li>


                        <li><Link>My Data 1</Link></li>
                        {
                            isAdmin && <>




                                <li><Link>My Data 2</Link></li>
                                <li><Link>My Data 3</Link></li>
                                <li><Link to='/dashboard/allUsers'>All-User</Link></li>

                            </>
                        }



                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;