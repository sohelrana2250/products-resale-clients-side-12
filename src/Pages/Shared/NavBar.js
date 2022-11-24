import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const NavBar = () => {

    const { user, LogOut } = useContext(AuthContext);


    const handelLogOut = () => {
        LogOut().then(() => {


        }).catch((error) => {

            console.log(error.message)
        })


    }









    const menuItem = <React.Fragment>
        <li className='font-bold text-rose-600 text-xl'><Link>{user?.photoURL}</Link></li>
        <li><Link to='/'>Home</Link></li>



        {user?.photoURL === 'Saler' && <>
            <li><Link> AddProduct</Link></li>
            <li><Link> My Product</Link></li>
            <li><Link> my Buyer</Link></li>
        </>}

        {
            user?.photoURL === 'Beyer' && <>
                <li><Link>My Order</Link></li>
                <li><Link>Wish List</Link></li>


            </>
        }




        {
            user?.email ? <>
                <li ><Link onClick={handelLogOut}> LogOut</Link></li>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/singup'>singup</Link></li>
            </>
        }
        <div className="avatar mr-3">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt='' />
            </div>
        </div>


    </React.Fragment>
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}


                        </ul>


                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl" >Phone Resale Market</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default NavBar;