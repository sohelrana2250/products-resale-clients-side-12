import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const Login = () => {

    const { Login, GoogleSingIn } = useContext(AuthContext);
    const [login, setLogin] = useState(false);
    const [loginError, setError] = useState('')
    let navigate = useNavigate();
    let location = useLocation();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const notify = () => toast('Successfully-Login.');

    let from = location.state?.from?.pathname || "/";


    const handelLogin = (data) => {
        console.log(data);
        Login(data.email, data.password).then((result) => {

            const user = result.user;
            console.log(user);
            setError('');
            setLogin(true);
            navigate(from, { replace: true });

        }).catch((error) => {
            //console.log(error.messsage)
            setError(error.messsage)
        })
    }

    const handelGoogleSinIn = () => {

        GoogleSingIn().then((result) => {

            const user = result.user;
            console.log(user);
            const userInfo = {

                name: user.displayName,
                email: user.email,
                userType: 'Beyer'
            }

            console.log(userInfo);

            fetch('https://b612-used-products-resale-server-side-mu.vercel.app/users', {

                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            }).then((res) => res.json()).then((data) => {

                console.log(data);

                if (data.acknowledged) {
                    alert('Successfully-Login');
                }

                setError('');
                setLogin(true);
                navigate(from, { replace: true });


            }).catch((error) => {
                console.error(error.message);
                setError(error.message);
            })





        }).catch((error) => {
            console.log(error.message);
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

                    <input onClick={notify} className='btn btn-accent w-full mt-3' value='Login' type="submit" />
                    <Toaster />
                </form>
                <div>
                    {
                        login && <p className='text-3xl text-danger text-center'>Successfully Login</p>
                    }
                    {loginError && <p className='text-3xl text-danger text-center'>{loginError}</p>}
                </div>
                <p>new to doctors prolat <Link to='/singup' className='text-secondary'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handelGoogleSinIn} className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;