import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname[pathname.length - 1] === '/') {
      window.location = pathname.slice(0, pathname.length - 1);
    }
  });

  return (
    <div className='flex flex-wrap justify-center content-center h-screen bg-color-cover-full'>
      <div className='w-full text-center'>
        <h2 className='text-black text-xl font-bold'>404 - Page not found</h2>
      </div>
      <div className='w-full text-center pt-2'>
        <p className=''>
          <a href='/' title='Go to startpage' className='hover:underline'>
            Go to startpage
          </a>
        </p>
      </div>
    </div>
  );
};
