import React from 'react';
import Head from 'next/head';
import Malarquee from 'react-malarquee';
import logos from '../data/logos.json';

export default () => (
  <div>
    <Head>
      <title>Tech Imprent Arena</title>
      <link rel="canonical" href="https://techimprentarena.com/" />
    </Head>
    <a
      href="/program/gothenburg"
      title="Gothenburg"
      className="hidden lg:block right-0 w-32 fixed bg-tia-viking mt-64 z-10 lg:z-20 w-32 hover:underline text-white opacity-75"
    >
      <div className="p-5 px-3">
        <h3 className="text-lg italic text-white pb-2">Upcoming</h3>
        <p className="text-white text-sm">
          Gothenburg the 25TH – 29TH of Nov 2019
        </p>
      </div>
    </a>

    <div
      className="relative h-screen w-screen bg-cover"
      style={{
        backgroundImage:
          'url("/static/paula-prekopova-Mt9DbRm2KmA-unsplash.jpg")'
      }}
    >
      <div className="bg-color-cover opacity-75 fixed min-h-screen w-screen" />
      <div className="relative z-10 pt-0 lg:pt-80 h-screen">
        <div className="flex flex-wrap justify-center content-center pb-20 px-10 lg:px-0 -mt-20 lg:mt-0">
          <img
            src={require('static/logo-text-black-horizontal.png')}
            alt="Tech Imprint Arena"
          />
        </div>
        <div className="w-100 flex flex-wrap justify-center text-center">
          <p className="font-medium italic w-3/4 lg:w-2/4 text-xl">
            At the Tech Imprint Arena, companies open up their inner core and
            tell you how they use today’s technology to make a tech imprint
            tomorrow
          </p>
        </div>
      </div>
    </div>
    {/* home */}
    <div
      id="home"
      className="relative pb-20 pt-20 lg:pt-40 min-h-screen bg-color-cover-full"
    >
      <div className="flex flex-wrap px-10">
        <div className="w-full lg:w-1/2 flex justify-center text-center">
          <h2 className="text-3xl lg:text-6xl font-bold w-3/4 text-center lg:text-right lg:pt-24 pb-10">
            WHAT IS HAPPENING
            <br />
            RIGHT NOW?
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="p-0 lg:p-10 text-lg w-full lg:text-xl">
            <p className="pb-6">
              The technology is emerging and will open up opportunities for us
              that we cannot even imagine.
            </p>
            <p className="pb-6">
              United Nations has set 17 global sustainability goals as a
              blueprint to achieve a better future for all. In order to reach
              them the world’s leaders are putting environmental footprint,
              inequality, health, peace and justice on top of the agenda.
            </p>
            <p className="pb-6">
              Companies are using the latest technology to create innovations
              that will be game changers in creating a better tomorrow.
            </p>
            <p className="italic">– but do you really know what is coming?</p>
          </div>
        </div>
      </div>
    </div>
    {/* our ambition */}
    <div
      id="our-ambition"
      className="relative h-screen w-screen bg-cover"
      style={{
        backgroundImage: 'url("/static/ben-white-148783-unsplash.jpg")'
      }}
    >
      <div className="bg-color-cover opacity-75 relative min-h-screen w-screen">
        <div className="flex flex-wrap content-center min-h-screen">
          <h2 className="w-full text-3xl lg:text-5xl font-bold w-3/4 text-center">
            OUR AMBITION
          </h2>
          <div className="w-full text-center px-10">
            <div className="flex justify-center">
              <p className="py-6 w-full lg:w-2/4 text-2xl">
                Create the number one arena where tech innovations, with focus
                on making a better world, are shared with the society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* how, where and when */}
    <div className="relative pt-20 pb-20 lg:pt-64 min-h-screen bg-color-cover-full p-10 lg:p-20">
      <div className="flex flex-wrap px-10">
        <div className="w-full flex justify-center text-center block lg:hidden">
          <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left lg:pt-16 pb-10">
            HOW
            <br />
            WHERE
            <br />
            &amp; WHEN?
          </h2>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="p-0 lg:p-10 text-lg lg:text-xl">
            <p className="pb-6">
              During a one week period in each city, companies will gather to
              tell YOU how they use the latest technology to create a better
              world.
            </p>
            <p className="pb-6">
              Tech Imprint Arena will take place in Gothenburg, Stockholm and
              Malmö during 2019 and the beginning of 2020, and continue to
              Copenhagen, Oslo and Helsinki short after.
            </p>
            <p className="italic">
              View the program and book your seat{' '}
              <a
                href="/program"
                title="View the program"
                className="hover:underline"
              >
                here!
              </a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex justify-center text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left lg:pt-8 hidden lg:block">
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
      className="relative h-screen w-screen bg-cover"
      style={{
        backgroundImage:
          'url("/static/douglas-sanchez-BITrZ_FIjAQ-unsplash.jpg")'
      }}
    >
      <div className="bg-color-cover opacity-75 relative h-screen w-screen">
        <div className="flex flex-wrap content-center min-h-screen">
          <h2 className="w-full text-2xl lg:text-5xl w-3/4 text-center">
            COMPANIES THAT ARE MAKING A TECH <br /> IMPRINT FOR A BETTER WORLD:
          </h2>
          <div className="w-full text-center pt-20 px-10">
            <div className="flex justify-center">
              <Malarquee fill={false} className="w-2/4" rate={90}>
                {logos.map((l, li) => (
                  <img
                    key={li}
                    src={require(`static/${l}`)}
                    className="malarquee-img"
                  />
                ))}
              </Malarquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
