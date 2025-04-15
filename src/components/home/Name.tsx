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
        className='text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white'
        repeat={0} // Only type the name once
        cursor={true}
    />
);
};