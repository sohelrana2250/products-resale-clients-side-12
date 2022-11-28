import React from 'react';

const DisplayDetails = ({ details, setSelectedData }) => {
    const { name, location, resale_price, orginal_price, used_year, post_date, img, sallerName } = details;

    return (
        <div className="card card-compact w-110  bg-base-100 shadow-xl">
            <figure><img style={{ height: '400px' }} src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-3xl">{name}</h2>
                <p className=' font-bold'>Location :{location}</p>
                <p className=' font-bold'>Resale Price :{resale_price}</p>
                <p className=' font-bold'>Orginal Price :{orginal_price}</p>
                <p className=' font-bold'>Use Year :{used_year}</p>
                <p className=' font-bold'>Post Date :{post_date}</p>
                <p className=' font-bold'>Post Date :{sallerName}</p>
                <>
                    <div className="card-actions justify-start">

                        <label onClick={() => setSelectedData(details)} htmlFor="booking-modal2" className="btn btn-outline btn-accent">Report</label>

                    </div>

                    <div className="card-actions justify-end">

                        {/* disabled={slots.length === 0} setTreatment(option)  */}


                        <label onClick={() => setSelectedData(details)} htmlFor="booking-modal" className="btn btn-outline btn-accent">BUY!</label>

                    </div>



                </>




            </div>
        </div>

    );
};

export default DisplayDetails;