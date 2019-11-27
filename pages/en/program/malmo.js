
    import { useEffect, useState } from 'react';
    import Head from 'next/head';
    import VisibilitySensor from 'react-visibility-sensor';
    import '../../../styles/index.css';
    import { withLayout } from '../../../src/layout';

    const Page = () => {
      const [day, setDay] = useState('');

      useEffect(() => {
        setDay('0');
      }, []);

      return (
        <div>
          <Head>
            <title>Malmö - Tech Imprint Arena</title>
            <link rel="canonical" href="https://techimprintarena.com/en/program/malmo/" />
          </Head>
          <div
          className="bg-cover bg-center h-screen w-screen fixed z-0"
            style={{
              backgroundImage: 'url("/city/malmo-bw2.jpg")'
            }}
          />
          <div className="bg-color-cover opacity-75 fixed h-screen w-screen" />
          <div className='relative pt-32 w-full -mb-24 z-10'>
            <h1 className="w-full text-5xl font-bold w-3/4 text-center">
              Malmö<br/>6<sup>th</sup> – 10<sup>th</sup> of April 2020
            </h1>
            <p className='text-center text-lg w-full'></p>
          </div>
          <div className='relative'>
            <div className="h-screen text-center mt-64">
              <h3 className="font-bold text-3xl">To be announced</h3>
              <p className="w-full">... Hosted by: TBA</p>
              </div>
            <div className='flex flex-wrap justify-center content-center p-10 lg:p-40 pt-40'>
            <div className='w-4/5 fixed hidden lg:block' style={{top: '365px'}}>
                
                <div className="day-selector-container">
                  
                </div>
              </div>
              <div className='w-full lg:w-4/5 lg:ml-48'>
                
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default withLayout(Page, 'en');
  