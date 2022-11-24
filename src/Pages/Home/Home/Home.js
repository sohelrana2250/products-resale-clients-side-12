import React from 'react';
import Advertisement from '../AdvertisementSection/Advertisement';
import Banner from '../Banner/Banner';
import PhoneCategory from '../PhoneCategory/PhoneCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <PhoneCategory></PhoneCategory>

        </div>
    );
};

export default Home;