import React from 'react';

const Heading = () => {
    return (
        <div className='h-[80vh] flex flex-col items-center md:pt-32 pt-5 md:space-y-5 bg-Mprimary'>
            <h1 className='md:text-5xl text-2xl md:w-1/2 w-[80%] mx-auto text-center font-extrabold font-customF'> Next-Level 3D Designs Crafted for Perfection</h1>
            <p className='md:w-1/3 w-[80%] text-center mt-2 mx-auto'> Explore a premium collection of high-quality 3D models, perfect for designers, architects, and creators.</p>
        </div>
    );
};

export default Heading;