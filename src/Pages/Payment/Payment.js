import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


console.log(stripePromise);

const Payment = () => {

    const booking = useLoaderData();
    const date = new Date();

    console.log(booking.id);



    const handelDeleteProduct = (id) => {


        alert(id);
        fetch(`https://b612-used-products-resale-server-side-mu.vercel.app/allPhoneDeails/${id}`, {

            method: 'DELETE'
        }).then((res) => res.json()).then((data) => {

            console.log(data);

        }).catch((error) => {
            console.error(error.message);
        })

    }




    return (
        <div>


            <h1 className='text-center text-3xl font-bold'>Payment For :{booking.ItemName}</h1>
            <p className='text-center text-2xl font-bold'>Please Pay {booking.price} for your Phone {date.toDateString()}{date.toTimeString()}</p>
            <div className='w-1/2 h-56 my-6 mx-auto card card-compact px-10 pt-10 bg-base-100 shadow-xl'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} handelDeleteProduct={handelDeleteProduct} />
                </Elements>

            </div>


        </div>
    );
};

export default Payment;