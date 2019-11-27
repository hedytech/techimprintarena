import { useEffect, useState } from 'react';

export default ({ locale = 'en', navigation = [] }) => {
  useEffect(() => {
    /* eslint-disable no-new */
    const SmoothScroll = require('smooth-scroll');
    new SmoothScroll('a[href*="#"]');
  });

  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed z-20 w-full'>
      <div className='container mx-auto px-6 py-2 flex justify-between items-center bg-black'>
        <a className='font-bold text-2xl lg:text-4xl text-white' href={`/${locale}`}>
          <img
            src='/logo-sidebyside.png'
            alt='Tech Imprint Arena'
            className='w-24'
          />
        </a>
        <div className='block lg:hidden'>
          <button
            onClick={() => setOpen(!open)}
            className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-tia-picton-blue-dark appearance-none focus:outline-none'
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='lg:block hidden'>
          <ul className='inline-flex text-xs'>
            {navigation.map((m, mi) => (
              <li className='px-4' key={mi}>
                <a
                  className='text-tia-picton-blue-dark hover:underline'
                  href={m.link}
                >
                  {m.title.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`lg:hidden bg-black ${open ? 'block' : 'hidden'}`}>
        <ul>
          {navigation.map((m, mi) => (
            <li className='p-4' key={mi}>
              <a
                className='text-tia-picton-blue-dark hover:underline'
                href={m.link}
              >
                {m.title.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
