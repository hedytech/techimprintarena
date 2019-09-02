
    import { useEffect, useState } from 'react';
    import Head from 'next/head';
    import VisibilitySensor from 'react-visibility-sensor';
    import '../../styles/index.css';

    export default () => {
      const [day, setDay] = useState('');

      useEffect(() => {
        !day && setDay('2019-05-06');
      });

      return (
        <div>
          <Head>
            <title>Gothenburg - Tech Imprent Arena</title>
            <link rel="canonical" href="https://techimprentarena.com/program/gothenburg" />
          </Head>
          <div
          className="bg-cover bg-center h-screen w-screen fixed z-0"
            style={{
              backgroundImage: 'url("https://gbgtechweek.com/img/banner_website_2017.jpg")'
            }}
          />
          <div className="bg-color-cover opacity-75 fixed h-screen w-screen" />
          <div className='relative pt-32 w-full -mb-24'>
            <h2 className="w-full text-5xl font-bold w-3/4 text-center">
              Gothenburg<br/>7th – 18th of oct 2019
            </h2>
            <p className='text-center text-lg w-full'><span className='location-icon black'></span> Johan & Nyström, Avenyn</p>
          </div>
          <div className='relative'>
            <div className='flex flex-wrap justify-center content-center p-10 lg:p-40 pt-40'>
              <div className='w-4/5 fixed hidden lg:block'>
                <h3 className='text-3xl text-white'>Program 2019</h3>
                <div className="day-selector-container">
                  
  <div className="day-selector">
    <div className="day">
      <a href="#2019-05-06" className={'day-link ' + ('2019-05-06' === day ? 'active' : '')}>Monday 06/05</a>
    </div>
  </div>
  
  <div className="day-selector">
    <div className="day">
      <a href="#2019-05-07" className={'day-link ' + ('2019-05-07' === day ? 'active' : '')}>Tuesday 07/05</a>
    </div>
  </div>
  
  <div className="day-selector">
    <div className="day">
      <a href="#2019-05-08" className={'day-link ' + ('2019-05-08' === day ? 'active' : '')}>Wednesday 08/05</a>
    </div>
  </div>
  
                </div>
              </div>
              <div className='w-full lg:w-4/5 lg:ml-48'>
                
    <div className='pb-4' id='2019-05-06'>
      <VisibilitySensor onChange={() => setDay('2019-05-06')}>
        <h3 className='pl-6 pb-6 text-white'>
          <span className='text-3xl pr-10'>06/05</span>
          <span className='text-2xl'>Monday</span>
        </h3>
      </VisibilitySensor>
      
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">10:00</span>
        <span>-</span>
        <span className="event-end-time">15:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={require('static/gbg.jpg')}
          />
        </div>
        <div className='w-full lg:w-2/5'>
          <h4 className='font-bold tracking-wide'>CompInn</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Join CompInn on the 6th of May and let us entertain you with excellent speakers, inspiring entrepreneurs and great opportunity to expand your network.</p>
        </div>
        <div className='w-full lg:w-1/5'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>WSINC, Greenups</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>University of Gothenburg</span></p>
        </div>
        <div className='w-full lg:w-1/5'>
          <a href='#' title='Read more' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Read more</a>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">15:00</span>
        <span>-</span>
        <span className="event-end-time">18:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={require('static/gbg.jpg')}
          />
        </div>
        <div className='w-full lg:w-2/5'>
          <h4 className='font-bold tracking-wide'>CompInn 2</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p>Join CompInn on the 6th of May and let us entertain you with excellent speakers, inspiring entrepreneurs and great opportunity to expand your network.</p>
        </div>
        <div className='w-full lg:w-1/5'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>WSINC, Greenups</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>University of Gothenburg</span></p>
        </div>
        <div className='w-full lg:w-1/5'>
          <a href='#' title='Read more' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Read more</a>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">10:00</span>
        <span>-</span>
        <span className="event-end-time">15:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={require('static/gbg.jpg')}
          />
        </div>
        <div className='w-full lg:w-2/5'>
          <h4 className='font-bold tracking-wide'>CompInn</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p>Join CompInn on the 6th of May and let us entertain you with excellent speakers, inspiring entrepreneurs and great opportunity to expand your network.</p>
        </div>
        <div className='w-full lg:w-1/5'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>WSINC, Greenups</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>University of Gothenburg</span></p>
        </div>
        <div className='w-full lg:w-1/5'>
          <a href='#' title='Read more' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Read more</a>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">15:00</span>
        <span>-</span>
        <span className="event-end-time">18:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={require('static/gbg.jpg')}
          />
        </div>
        <div className='w-full lg:w-2/5'>
          <h4 className='font-bold tracking-wide'>CompInn 2</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p>Join CompInn on the 6th of May and let us entertain you with excellent speakers, inspiring entrepreneurs and great opportunity to expand your network.</p>
        </div>
        <div className='w-full lg:w-1/5'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>WSINC, Greenups</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>University of Gothenburg</span></p>
        </div>
        <div className='w-full lg:w-1/5'>
          <a href='#' title='Read more' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Read more</a>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  
    <div className='pb-4' id='2019-05-07'>
      <VisibilitySensor onChange={() => setDay('2019-05-07')}>
        <h3 className='pl-6 pb-6 text-white'>
          <span className='text-3xl pr-10'>07/05</span>
          <span className='text-2xl'>Tuesday</span>
        </h3>
      </VisibilitySensor>
      
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">10:00</span>
        <span>-</span>
        <span className="event-end-time">15:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={require('static/gbg.jpg')}
          />
        </div>
        <div className='w-full lg:w-2/5'>
          <h4 className='font-bold tracking-wide'>CompInn Next day</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p>Join CompInn on the 6th of May and let us entertain you with excellent speakers, inspiring entrepreneurs and great opportunity to expand your network.</p>
        </div>
        <div className='w-full lg:w-1/5'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>WSINC, Greenups</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>University of Gothenburg</span></p>
        </div>
        <div className='w-full lg:w-1/5'>
          <a href='#' title='Read more' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Read more</a>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">10:00</span>
        <span>-</span>
        <span className="event-end-time">15:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={require('static/gbg.jpg')}
          />
        </div>
        <div className='w-full lg:w-2/5'>
          <h4 className='font-bold tracking-wide'>CompInn Next day</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p>Join CompInn on the 6th of May and let us entertain you with excellent speakers, inspiring entrepreneurs and great opportunity to expand your network.</p>
        </div>
        <div className='w-full lg:w-1/5'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>WSINC, Greenups</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>University of Gothenburg</span></p>
        </div>
        <div className='w-full lg:w-1/5'>
          <a href='#' title='Read more' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Read more</a>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">10:00</span>
        <span>-</span>
        <span className="event-end-time">15:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={require('static/gbg.jpg')}
          />
        </div>
        <div className='w-full lg:w-2/5'>
          <h4 className='font-bold tracking-wide'>CompInn Next day</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p>Join CompInn on the 6th of May and let us entertain you with excellent speakers, inspiring entrepreneurs and great opportunity to expand your network.</p>
        </div>
        <div className='w-full lg:w-1/5'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>WSINC, Greenups</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>University of Gothenburg</span></p>
        </div>
        <div className='w-full lg:w-1/5'>
          <a href='#' title='Read more' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Read more</a>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">10:00</span>
        <span>-</span>
        <span className="event-end-time">15:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={require('static/gbg.jpg')}
          />
        </div>
        <div className='w-full lg:w-2/5'>
          <h4 className='font-bold tracking-wide'>CompInn Next day</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p>Join CompInn on the 6th of May and let us entertain you with excellent speakers, inspiring entrepreneurs and great opportunity to expand your network.</p>
        </div>
        <div className='w-full lg:w-1/5'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>WSINC, Greenups</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>University of Gothenburg</span></p>
        </div>
        <div className='w-full lg:w-1/5'>
          <a href='#' title='Read more' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Read more</a>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  
    <div className='pb-4' id='2019-05-08'>
      <VisibilitySensor onChange={() => setDay('2019-05-08')}>
        <h3 className='pl-6 pb-6 text-white'>
          <span className='text-3xl pr-10'>08/05</span>
          <span className='text-2xl'>Wednesday</span>
        </h3>
      </VisibilitySensor>
      
    </div>
  
              </div>
            </div>
          </div>
        </div>
      );
    }
  