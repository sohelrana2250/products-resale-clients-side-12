import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const CheckoutForm = ({ booking, handelDeleteProduct }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const { _id, id, price, email, userName
    } = booking;


    useEffect(() => {

        fetch("http://localhost:5010/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        }).then((res) => res.json()).then((data) => {

            setClientSecret(data.clientSecret)
        }).catch((error) => {
            setCardError(error.message);
        })


    }, [price])

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );


        if (confirmError) {
            setCardError(confirmError.message);
            return
        }


        if (paymentIntent.status === 'succeeded') {



            const paymentGetWay = {

                price,
                transactionID: paymentIntent.id,
                email,
                bookingId: _id


            }

            console.log(paymentGetWay)

            setSuccess('Congrats! You payment Successfully Done');
            setTransactionId(paymentIntent.id);
            setProcessing(false);

            fetch('http://localhost:5010/paymentReport', {

                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentGetWay),
            }).then((res) => res.json()).then((data) => {

                console.log(data);
            }).catch((error) => {
                setCardError(error.message);
            })


        }

        //console.log('payment', paymentIntent);




    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button onClick={() => handelDeleteProduct(id)} className='btn btn-sm btn-primary mt-4' type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-center text-red-600 text-2xl'>{cardError}</p>
            {
                success && <div>

                    <p className='text-green-500 text-center text-2xl'>{success}</p>
                    <p className='text-xl text-center'>Your Transaction Id: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;