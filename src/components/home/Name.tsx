import React from 'react';
import { TypeAnimation } from 'react-type-animation';
export const Name = () => {
return (
    <TypeAnimation
        sequence={[
            'Diego González',
            2000, // Keep the cursor blinking after typing the name
        ]}
        wrapper="span"
        className='text-center w-screen md:w-[500px] lg:w-[600px] text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 dark:text-white font-["Boldonse"] tracking-widest leading-loose'
        repeat={0} // Only type the name once
        cursor={true}
    />
);
};