import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const PhoneReportModal = ({ selectedData }) => {

    const { user } = useContext(AuthContext);
    const { _id, name, categoryName, sallerName } = selectedData;
    const email = user?.email;

    const handelReport = (event) => {

        event.preventDefault();

        const element = event.target;
        const report = element.report.value;

        const reportInfo = {

            report,
            id: _id,
            email,
            name,
            categoryName, sallerName
        }

        fetch('https://b612-used-products-resale-server-side-mu.vercel.app/productReport', {

            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reportInfo)
        }).then((res) => res.json()).then((data) => {

            console.log(data);
            if (data.acknowledged) {
                alert('Successfully Report-Done');
                element.reset();
            }


        }).catch((error) => {
            console.log(error.message);
        })





    }

    return (
        <>
            <input type="checkbox" id="booking-modal2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" font-bold text-3xl">Report Name : {name}</h3>

                    <form onSubmit={handelReport} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" readOnly value={name} placeholder="Product Name" className="input input-bordered w-full " />

                        <input name='email' readOnly type="email" value={email} placeholder="Email Address" className="input input-bordered w-full " />

                        <input name='itemname' type="text" readOnly value={categoryName} placeholder="Product Category" className="input input-bordered w-full " />

                        <input type="text" readOnly value={sallerName} placeholder="Saller Name" className="input input-bordered w-full " />

                        <input type="text" name='report' placeholder="Product Report" className="input input-bordered w-full " />

                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value="Submit" />

                    </form>




                </div>
            </div>
        </>
    );
};

export default PhoneReportModal;