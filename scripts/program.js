const fs = require('fs');
const path = require('path');
const program = require('../data/program.json');

const sidebarTemplate = program =>
  `
  <div className="day-selector">
    <div className="day">
      <a href="#${program.day}" className={'day-link ' + ('${program.day}' === day ? 'active' : '')}>${program.title}</a>
    </div>
  </div>
  `;

const eventlocationtemplate = event =>
  `<p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>${
    event.location
  }</span></p>`

const eventTemplate = event =>
  `
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">${event.start}</span>
        <span>-</span>
        <span className="event-end-time">${event.end}</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/${event.image})"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>${event.title}</h4>
          <span className='text-xs font-bold' style={{color:'${
            event.info_color
          }'}}>${event.info ? event.info : ''}</span>
          <p>${event.text}</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>${
            event.by
          }</p>
          ${event.location ? eventlocationtemplate(event) : ''}
          <p className='event-signup'>
            <a href='${
              event.link ? event.link : '#'
            }' title='Read more' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  `;

const eventsTemplate = program => {
  const title = program.title.split(' ');
  return `
    <div className='pb-4' id='${program.day}'>
      <VisibilitySensor onChange={() => setDay('${program.day}')}>
        <h3 className='pl-6 pb-6 text-white'>
          <span className='text-3xl pr-10'>${title[1]}</span>
          <span className='text-2xl'>${title[0]}</span>
        </h3>
      </VisibilitySensor>
      ${program.events ? program.events.map(eventTemplate).join('') : ''}
    </div>
  `;
};

const template = city =>
  `
    import { useEffect, useState } from 'react';
    import Head from 'next/head';
    import VisibilitySensor from 'react-visibility-sensor';
    import '../../styles/index.css';

    export default () => {
      const [day, setDay] = useState('');

      useEffect(() => {
        setDay('${city.program ? city.program[0].day : 0}');
      }, []);

      return (
        <div>
          <Head>
            <title>${city.name} - Tech Imprint Arena</title>
            <link rel="canonical" href="https://techimprentarena.com/program/${
              city.slug
            }" />
          </Head>
          <div
          className="bg-cover bg-center h-screen w-screen fixed z-0"
            style={{
              backgroundImage: 'url("/${city.background}")'
            }}
          />
          <div className="bg-color-cover opacity-75 fixed h-screen w-screen" />
          <div className='relative pt-32 w-full -mb-24 z-10'>
            <h1 className="w-full text-5xl font-bold w-3/4 text-center">
              ${city.name}<br/>${city.when.replace(/th/g, '<sup>th</sup>')}
            </h1>
            <p className='text-center text-lg w-full'>${
              city.location
                ? `<span className='location-icon black'></span> ${city.location}`
                : ''
            }</p>
          </div>
          <div className='relative'>
            <div className='flex flex-wrap justify-center content-center p-10 lg:p-40 pt-40 ${
              !city.program ? 'h-screen' : ''
            }'>
            ${
              !city.program
                ? '<h3 className="text-center font-bold text-3xl -mt-20">To be announced</h3>'
                : ''
            }
            <div className='w-4/5 fixed hidden lg:block'>
                ${
                  city.program
                    ? `<h3 className="text-3xl text-white">Program ${city.year}</h3>`
                    : ''
                }
                <div className="day-selector-container">
                  ${
                    city.program
                      ? city.program.map(sidebarTemplate).join('')
                      : ''
                  }
                </div>
              </div>
              <div className='w-full lg:w-4/5 lg:ml-48'>
                ${city.program ? city.program.map(eventsTemplate).join('') : ''}
              </div>
            </div>
          </div>
        </div>
      );
    }
  `;

program.forEach(city => {
  const dest = path.join(
    __dirname,
    '..',
    'pages',
    'program',
    `${city.slug}.js`
  );
  fs.writeFileSync(dest, template(city));
});
