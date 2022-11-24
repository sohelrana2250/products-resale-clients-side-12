import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PhoneCategoryOption from './PhoneCategoryOption';
const PhoneCategory = () => {

    const { data: phoneCategory = [] } = useQuery({

        queryKey: ['phoneCategory'],
        queryFn: () => fetch('http://localhost:5010/phoneCategory').then((res) => res.json())


    })

    console.log(phoneCategory);


    return (
        <section className='my-16 mr-10'>
            <h1 className='text-3xl text-center font-bold'>Phone Catagory :{phoneCategory.length}</h1>
            <div className='ml-5 mr-5  grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 mt-16'>

                {

                    phoneCategory.map((v, index) => <PhoneCategoryOption key={index} category={v}></PhoneCategoryOption>)

                }
            </div>
        </section>
    );
};

export default PhoneCategory;