import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const PhoneDisplayModal = ({ selectedData }) => {

    const { _id, name, resale_price, img } = selectedData;
    const { user } = useContext(AuthContext);
    const userName = user?.displayName;
    const email = user?.email;
    console.log(email);

    const handelBooking = (event) => {

        event.preventDefault();

        const element = event.target;
        const phone = element.phone.value;
        const buyerLocation = element.buyerLocation.value;

        const buyerInfo = {
            id: _id,
            userName, email, img,
            ItemName: name,
            price: resale_price,
            phone,
            location: buyerLocation



        }

        fetch('http://localhost:5010/booking', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(buyerInfo)
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            if (data.acknowledged) {
                alert('Successfully-Booking');
                element.reset();
            }
        }).catch((error) => {
            console.log(error.message);
        })


    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" font-bold text-3xl">{name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" readOnly value={userName} placeholder="User Name" className="input input-bordered w-full " />

                        <input name='email' readOnly type="email" value={email} placeholder="Email Address" className="input input-bordered w-full " />

                        <input name='itemname' type="text" readOnly value={name} placeholder="Item Name" className="input input-bordered w-full " />


                        <input name='price' type="text" readOnly value={resale_price} placeholder="Price" className="input input-bordered w-full" />

                        <input name='phone' type="text" placeholder="Phone Number" required className="input input-bordered w-full" />

                        <input name='buyerLocation' type="text" placeholder="Location" required className="input input-bordered w-full" />

                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value="Submit" />

                    </form>


                </div>
            </div>
        </>
    );
};

export default PhoneDisplayModal;