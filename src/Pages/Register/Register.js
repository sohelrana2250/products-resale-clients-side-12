import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, profileUpdate, LogOut } = useContext(AuthContext);
    const notify = () => toast('Successfully-Register');
    const navigate = useNavigate();

    const handelSingUp = (data) => {

        console.log(data);

        createUser(data.email, data.password).then((result) => {

            const user = result.user;
            console.log(user);
            profileInformation(data.name, data.email, data.userCategory);
        }).catch((error) => {
            console.log(error.message);
        })


    }

    const profileInformation = (profileName, email, userCategory) => {

        const profile = {


            displayName: profileName,
            photoURL: userCategory
        }

        console.log(profile);

        profileUpdate(profile).then(() => {

            saveUserInfo(profileName, email, userCategory)

        }).catch((error) => {
            console.log(error.message);
        })
    }

    const saveUserInfo = (name, email, userType) => {

        const userInfo = { name, email, userType };

        fetch('https://b612-used-products-resale-server-side-mu.vercel.app/users', {

            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        }).then((res) => res.json()).then((data) => {


            if (data.acknowledged) {
                alert('Successfully-Register')
            }
            console.log(data);
            LogOut().then(() => {

                navigate('/login');


            }).catch((error) => {

                console.error(error.message);
            })



        }).catch((error) => {

            console.error(error.message);
        })





    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl'>Register</h2>
                <form onSubmit={handleSubmit(handelSingUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input type='text' name='name' {...register('name', { required: "name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p role="alert">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text">User Category</span>
                        </label>
                        <select name='userCategory'  {...register('userCategory', { required: "userCategory is required" })} className="select select-bordered w-full">
                            <option>Seller</option>
                            <option>Buyer</option>
                        </select>
                        {errors.userCategory && <p role="alert">{errors.userCategory?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type='email' name='email' {...register('email', { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' name='password' {...register('password', { required: "Password is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert">{errors.password?.message}</p>}


                    </div>

                    <input onClick={notify} className='btn btn-accent w-full mt-6' value='SingUp' type="submit" />
                    <Toaster />
                </form>

                <p>Phone-Resale-Zone <Link to='/login' className='text-secondary'>Login </Link></p>
                <div className="divider">OR</div>

            </div>
        </div>
    );
};

export default Register;