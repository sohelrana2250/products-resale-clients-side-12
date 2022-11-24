import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const Login = () => {

    const { Login } = useContext(AuthContext);
    const [login, setLogin] = useState(false);


    const { register, formState: { errors }, handleSubmit } = useForm();

    const handelLogin = (data) => {
        console.log(data);
        Login(data.email, data.password).then((result) => {

            const user = result.user;
            console.log(user);
            setLogin(true);
        }).catch((error) => {
            console.log(error.messsage)
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl'>Login</h2>
                <form onSubmit={handleSubmit(handelLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type='email' className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' className="input input-bordered w-full max-w-xs" {...register("password", { required: 'password required' })} />

                        {errors.password && <p role="alert">{errors.password?.message}</p>}

                    </div>

                    <input className='btn btn-accent w-full mt-3' value='Login' type="submit" />
                </form>
                <div>
                    {
                        login && <p className='text-3xl text-danger text-center'>Successfully Login</p>
                    }
                    {/* {loginError && <p className='text-3xl text-danger text-center'>{loginError}</p>} */}
                </div>
                <p>new to doctors prolat <Link to='/singup' className='text-secondary'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;