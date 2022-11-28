import React from 'react';
import img from '../../../asseat/img.jpg'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className=" rounded-lg w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Phone-Resale-Zone</h1>
                    <p className="py-6">Almost everyone has a mobile phone today. It's not just urban India, even rural India has come to realise the benefits of owning a mobile phone. Life becomes a whole lot easier if you can strike off certain things from your list while on the move.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;