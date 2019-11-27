import React from 'react';
import Head from 'next/head';
import logos from '../../data/logos.json';
import { withLayout } from '../layout';
import { withTranslation } from '../components/i18n';

const Page = ({ locale, t }) => (
  <div>
    <Head>
      <title>Tech Imprint Arena</title>
      <link rel='canonical' href={`https://techimprintarena.com/${locale}/`} />
    </Head>
    <a
      href={`/${locale}/program/${t('upcoming.slug')}`}
      title={t('upcoming.city')}
      className='hidden lg:block right-0 w-32 fixed bg-tia-viking mt-64 z-10 lg:z-20 w-32 hover:underline text-white opacity-75'
    >
      <div className='p-5 px-3'>
        <h3 className='text-lg italic text-white pb-2'>
          {t('upcoming.title')}
        </h3>
        <p
          className='text-white text-sm'
          dangerouslySetInnerHTML={{ __html: t('upcoming.text') }}
        />
      </div>
    </a>

    <div
      className='relative h-screen w-screen bg-cover'
      style={{
        backgroundImage: 'url("/paula-prekopova-Mt9DbRm2KmA-unsplash.jpg")'
      }}
    >
      <div className='bg-color-cover opacity-75 fixed min-h-screen w-screen' />
      <div className='relative z-10 pt-0 lg:pt-80 h-screen'>
        <div className='flex flex-wrap justify-center content-center pb-20 px-10 lg:px-0 -mt-20 lg:mt-0'>
          <img src='/logo-text-black-horizontal.png' alt='Tech Imprint Arena' />
        </div>
        <div className='w-100 flex flex-wrap justify-center text-center'>
          <h1 className='font-medium italic w-3/4 lg:w-2/4 text-xl'>
            {t('heading')}
          </h1>
        </div>
      </div>
    </div>
    {/* home */}
    <div
      id='home'
      className='relative pb-20 pt-20 min-h-screen bg-color-cover-full-img'
    >
      <div className='flex items-center min-h-screen flex-wrap px-10'>
        <div className='w-full lg:w-1/2'>
          <h2
            className='text-3xl lg:text-6xl font-bold lg:w-3/4 text-center lg:text-right pb-10 lg:pb-0'
            dangerouslySetInnerHTML={{ __html: t('home.heading') }}
          />
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='p-0 lg:p-10 text-lg w-full lg:text-xl'>
            {t('home.text').map((p, pi) => (
              <p className='pb-6' key={pi}>
                {p}
              </p>
            ))}
            <p className='italic'>{t('home.footer')}</p>
          </div>
        </div>
      </div>
    </div>
    {/* our ambition */}
    <div
      id='our-ambition'
      className='relative h-screen w-screen bg-cover'
      style={{
        backgroundImage: 'url("/ben-white-148783-unsplash.jpg")'
      }}
    >
      <div className='bg-color-cover opacity-75 relative min-h-screen w-screen'>
        <div className='flex flex-wrap content-center min-h-screen'>
          <h2
            className='w-full text-3xl lg:text-5xl font-bold w-3/4 text-center'
            dangerouslySetInnerHTML={{ __html: t('ambition.heading') }}
          />
          <div className='w-full text-center px-10'>
            <div className='flex justify-center'>
              <p className='py-6 w-full lg:w-2/4 text-2xl'>
                {t('ambition.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* how, where and when */}
    <div className='relative pt-20 pb-20 min-h-screen bg-color-cover-full-img p-10 lg:p-20'>
      <div className='flex flex-wrap items-center min-h-screen lg:min-h-auto px-0 lg:px-10'>
        <div className='w-full flex justify-center text-center block lg:hidden'>
          <h2
            className='text-3xl lg:text-6xl font-bold text-center lg:text-left lg:pt-16'
            dangerouslySetInnerHTML={{ __html: t('how.heading') }}
          />
        </div>
        <div className='w-full lg:w-3/4'>
          <div className='p-0 lg:p-10 text-lg lg:text-xl'>
            {t('how.text').map((p, pi) => (
              <p className='pb-6 lg:pr-10' key={pi}>
                {p}
              </p>
            ))}
            <p className='italic'>
              {t('how.view')}{' '}
              <a
                href={`/${locale}/program`}
                title={t('how.title')}
                className='hover:underline'
              >
                {t('how.here')}
              </a>
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 flex items-center text-center'>
          <h2
            className='text-3xl lg:text-6xl font-bold text-center lg:text-left hidden lg:block -m-5'
            dangerouslySetInnerHTML={{ __html: t('how.heading') }}
          />
        </div>
      </div>
    </div>
    {/* companies logos */}
    <div
      className='relative h-screen w-screen bg-cover'
      style={{
        backgroundImage: 'url("/douglas-sanchez-BITrZ_FIjAQ-unsplash.jpg")'
      }}
    >
      <div className='bg-color-cover opacity-75 relative h-screen w-screen'>
        <div className='flex flex-wrap content-center min-h-screen'>
          <h2
            className='w-full text-2xl lg:text-5xl w-3/4 text-center'
            dangerouslySetInnerHTML={{ __html: t('logos.heading') }}
          />
          <div className='w-full text-center pt-20 px-10'>
            <div className='flex justify-center'>
              <div className='marquee'>
                {logos.map((l, li) => (
                  <img
                    key={li}
                    src={`/${l.image}`}
                    className='malarquee-img w-48 ml-10'
                    alt={l.name}
                    style={l.style ? l.style : {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withLayout(withTranslation(Page, 'index'));
