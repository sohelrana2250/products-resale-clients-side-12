import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayDetails from './DisplayDetails';
import PhoneDisplayModal from './PhoneDisplayModal';

const PhoneCategoryDetails = () => {
    const [selectedData, setSelectedData] = useState(null);
    const data = useLoaderData();
    //console.log(data);
    console.log(selectedData);
    return (
        <section className='my-16 mr-10'>
            <h1 className='text-3xl text-center font-bold'>Total Phone Details :{data.length}</h1>
            <div className='ml-5 mr-5  grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 mt-16'>
                {
                    data.map((v, index) => <DisplayDetails key={index} details={v} setSelectedData={setSelectedData}></DisplayDetails>)


                }

            </div>

            {
                selectedData && <PhoneDisplayModal selectedData={selectedData}></PhoneDisplayModal>
            }

        </section>
    );
};

export default PhoneCategoryDetails;