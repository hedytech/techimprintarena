
    import { useEffect, useState } from 'react';
    import Head from 'next/head';
    import VisibilitySensor from 'react-visibility-sensor';
    import '../../styles/index.css';

    export default () => {
      const [day, setDay] = useState('');

      useEffect(() => {
        !day && setDay('0');
      });

      return (
        <div>
          <Head>
            <title>Malmö - Tech Imprent Arena</title>
            <link rel="canonical" href="https://techimprentarena.com/program/malmo" />
          </Head>
          <div
          className="bg-cover bg-center h-screen w-screen fixed z-0"
            style={{
              backgroundImage: 'url("undefined")'
            }}
          />
          <div className="bg-color-cover opacity-75 fixed h-screen w-screen" />
          <div className='relative pt-32 w-full -mb-24'>
            <h2 className="w-full text-5xl font-bold w-3/4 text-center">
              Malmö<br/>7th – 18th of oct 2019
            </h2>
            <p className='text-center text-lg w-full'><span className='location-icon black'></span> undefined</p>
          </div>
          <div className='relative'>
            <div className='flex flex-wrap justify-center content-center p-10 lg:p-40 pt-40'>
              <div className='w-4/5 fixed hidden lg:block'>
                <h3 className='text-3xl text-white'>Program 2019</h3>
                <div className="day-selector-container">
                  
                </div>
              </div>
              <div className='w-full lg:w-4/5 lg:ml-48'>
                
              </div>
            </div>
          </div>
        </div>
      );
    }
  