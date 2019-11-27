import { useEffect } from 'react';

const texts = {
  en: {
    heading: '404 - Page not found',
    link: '/en/',
    link_text: 'Go to startpage'
  },
  sv: {
    heading: '404 - Sidan hittades inte',
    link: '/sv/',
    link_text: 'Gå till startisdan'
  }
};

export default () => {
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname[pathname.length - 1] === '/' && window.location.hash === '') {
      window.location = pathname.slice(0, pathname.length - 1);
    }

    if (pathname.indexOf('/en/') === -1 && pathname.indexOf('/sv/') === -1) {
      window.location = '/en/' + pathname.slice(1);
    }
  });

  let locale = 'en';
  if (typeof window !== 'undefined') {
    locale = window.location.pathname.indexOf('/sv/') !== -1 ? 'sv' : locale;
  }

  return (
    <div className='flex flex-wrap justify-center content-center h-screen bg-color-cover-full'>
      <div className='w-full text-center'>
        <h2 className='text-black text-xl font-bold'>
          {texts[locale].heading}
        </h2>
      </div>
      <div className='w-full text-center pt-2'>
        <p>
          <a
            href={texts[locale].link}
            title={texts[locale].link_text}
            className='hover:underline'
          >
            {texts[locale].link_text}
          </a>
        </p>
      </div>
    </div>
  );
};
