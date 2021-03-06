import React from 'react';
import Head from 'next/head';
import logos from '../data/logos.json';

export default () => (
  <div>
    <Head>
      <title>Tech Imprint Arena</title>
      <link rel='canonical' href='https://techimprintarena.com/' />
    </Head>
    <a
      href='/program/stockholm'
      title='Stockholm'
      className='hidden lg:block right-0 w-32 fixed bg-tia-viking mt-64 z-10 lg:z-20 w-32 hover:underline text-white opacity-75'
    >
      <div className='p-5 px-3'>
        <h3 className='text-lg italic text-white pb-2'>Upcoming</h3>
        <p className='text-white text-sm'>
          Stockholm May 2020 {/*<sup>th</sup> – 29<sup>th</sup> */}
        </p>
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
            At the Tech Imprint Arena, companies open up their inner core and
            tell you how they use today’s technology to make a tech imprint
            tomorrow
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
          <h2 className='text-3xl lg:text-6xl font-bold lg:w-3/4 text-center lg:text-right pb-10 lg:pb-0'>
            WHAT IS HAPPENING
            <br />
            RIGHT NOW?
          </h2>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='p-0 lg:p-10 text-lg w-full lg:text-xl'>
            <p className='pb-6'>
              The technology is emerging and will open up opportunities for us
              that we cannot even imagine.
            </p>
            <p className='pb-6'>
              United Nations has set 17 global sustainability goals as a
              blueprint to achieve a better future for all. In order to reach
              them the world’s leaders are putting environmental footprint,
              inequality, health, peace and justice on top of the agenda.
            </p>
            <p className='pb-6'>
              Companies are using the latest technology to create innovations
              that will be game changers in creating a better tomorrow.
            </p>
            <p className='italic'>– but do you really know what is coming?</p>
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
          <h2 className='w-full text-3xl lg:text-5xl font-bold w-3/4 text-center'>
            OUR AMBITION
          </h2>
          <div className='w-full text-center px-10'>
            <div className='flex justify-center'>
              <p className='py-6 w-full lg:w-2/4 text-2xl'>
                Create the number one arena where tech innovations, with focus
                on making a better world, are shared with the society
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
          <h2 className='text-3xl lg:text-6xl font-bold text-center lg:text-left lg:pt-16'>
            HOW
            <br />
            WHERE
            <br />
            &amp; WHEN?
          </h2>
        </div>
        <div className='w-full lg:w-3/4'>
          <div className='p-0 lg:p-10 text-lg lg:text-xl'>
            <p className='pb-6 lg:pr-10'>
              During a one week period in each city, companies will gather to
              tell YOU how they use the latest technology to create a better
              world.
            </p>
            <p className='pb-6 lg:pr-10'>
              Tech Imprint Arena will take place in Gothenburg, Stockholm and
              Malmö during 2019 and the beginning of 2020, and continue to
              Copenhagen, Oslo and Helsinki short after.
            </p>
            <p className='italic'>
              View the program and book your seat{' '}
              <a
                href='/program'
                title='View the program'
                className='hover:underline'
              >
                here!
              </a>
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 flex items-center text-center'>
          <h2 className='text-3xl lg:text-6xl font-bold text-center lg:text-left hidden lg:block -m-5'>
            HOW
            <br />
            WHERE
            <br />
            &amp; WHEN?
          </h2>
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
          <h2 className='w-full text-2xl lg:text-5xl w-3/4 text-center'>
            COMPANIES THAT ARE MAKING A TECH <br /> IMPRINT FOR A BETTER WORLD:
          </h2>
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
