// import React from 'react'

// export default function Banner  ()  {
//   return (
//     <div className='relative overflow-hidden font-sans px-6 py-12 mb-7'>
//       <div className='absolute inset-0 '>
//         <img src="images/th.jpg"
//          alt="Interior Set" 
//          className=' w-full h-fullobject-cover'/>

//       </div>
//       <div className='relative z-10 container mx-auto flex flex-col justify-items-center'>
//       <h1 className='text-amber-600 sm:text-4xl font-serif mb-4'> Luxuarious Interior By Rumi</h1>
//         <h2 className='text-white sm:text-6xl font-bold mb-4'>  Explore For More Qaulity Pieces</h2>
//       <p className=' text-grey text-lg text-center mb-6 max-w-xl'>
//         Shop Now For Exclusive Products Discount !
//         <button
//         type='button'
//         className='bg-yellow-800 text-white text-sm font-semibold py-3 px-6 rounded-full 
//         shadow-large hover:bg-neutral-500 transition duration-300'>
//           Exciting Deals Will Be Launched On This Weekend
          
//         </button>

//       </p>
//       </div>
//     </div>
//   )
// }

import React from 'react';

export default function Banner() {
  return (
    <div className="relative overflow-hidden font-sans px-6 py-12 mb-7">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="images/th.jpg"
          alt="Interior Set"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-amber-600 text-2xl sm:text-4xl md:text-5xl font-serif mb-4">
          Luxurious Interior By Rumi
        </h1>

        {/* Subheading */}
        <h2 className="text-white text-xl sm:text-3xl md:text-6xl font-bold mb-4">
          Explore For More Quality Pieces
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-lg md:text-xl mb-6 max-w-xl">
          Shop Now For Exclusive Product Discounts!
        </p>

        {/* Button */}
        <button
          type="button"
          className="bg-yellow-800 text-white text-sm sm:text-base md:text-lg font-semibold py-3 px-6 rounded-full 
          shadow-lg hover:bg-yellow-700 transition duration-300"
        >
          Exciting Deals Will Be Launched This Weekend
        </button>
      </div>
    </div>
  );
}

