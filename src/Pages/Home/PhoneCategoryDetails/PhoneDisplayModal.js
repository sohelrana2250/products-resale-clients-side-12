import React from 'react';

const PhoneDisplayModal = ({ selectedData }) => {

    const { name, location, resale_price } = selectedData;

    console.log(selectedData);
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <h3 className="text-lg font-bold">{location}</h3>
                    <h3 className="text-lg font-bold">{resale_price}</h3>

                </div>
            </div>
        </>
    );
};

export default PhoneDisplayModal;