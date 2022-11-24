import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, profileUpdate } = useContext(AuthContext);

    const handelSingUp = (data) => {

        console.log(data);

        createUser(data.email, data.password).then((result) => {

            const user = result.user;
            console.log(user);
            profileInformation(data.name, data.userCategory);
        }).catch((error) => {
            console.log(error.message);
        })


    }

    const profileInformation = (profileName, userCategory) => {

        const profile = {


            displayName: profileName,
            photoURL: userCategory
        }

        console.log(profile);

        profileUpdate(profile).then(() => {
            console.log('successfully-update')
        }).catch((error) => {
            console.log(error.message);
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
                            <option>Saler</option>
                            <option>Beyer</option>
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

                    <input className='btn btn-accent w-full mt-6' value='SingUp' type="submit" />

                </form>

                <p>Phone-Resale-Zone <Link to='/login' className='text-secondary'>Login </Link></p>
                <div className="divider">OR</div>

            </div>
        </div>
    );
};

export default Register;