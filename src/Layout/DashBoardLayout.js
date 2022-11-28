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
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">


                        <li><Link to='/dashboard/mydata'>my Dashboard</Link></li>

                        {
                            isAdmin && <>


                                <li><Link to='/dashboard/report'>Report</Link></li>

                                <li><Link to='/dashboard/allSaller'>All Saller</Link></li>
                                <li><Link to='/dashboard/allBuyer'> All Buyer</Link></li>
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