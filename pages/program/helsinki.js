
    import { useEffect, useState } from 'react';
    import Head from 'next/head';
    import VisibilitySensor from 'react-visibility-sensor';
    import '../../styles/index.css';

    export default () => {
      const [day, setDay] = useState('');

      useEffect(() => {
        setDay('0');
      }, []);

      return (
        <div>
          <Head>
            <title>Helsinki - Tech Imprent Arena</title>
            <link rel="canonical" href="https://techimprentarena.com/program/helsinki" />
          </Head>
          <div
          className="bg-cover bg-center h-screen w-screen fixed z-0"
            style={{
              backgroundImage: 'url("/static/city/helsinki-bw2.jpg")'
            }}
          />
          <div className="bg-color-cover opacity-75 fixed h-screen w-screen" />
          <div className='relative pt-32 w-full -mb-24 z-10'>
            <h2 className="w-full text-5xl font-bold w-3/4 text-center">
              Helsinki<br/>26th – 30th of Oct 2020
            </h2>
            <p className='text-center text-lg w-full'></p>
          </div>
          <div className='relative'>
            <div className='flex flex-wrap justify-center content-center p-10 lg:p-40 pt-40 h-screen'>
            <h3 className="text-center font-bold text-3xl -mt-20">To be announced</h3>
            <div className='w-4/5 fixed hidden lg:block'>
                
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
  