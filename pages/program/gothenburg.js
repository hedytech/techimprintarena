
    import { useEffect, useState } from 'react';
    import Head from 'next/head';
    import VisibilitySensor from 'react-visibility-sensor';
    import '../../styles/index.css';

    export default () => {
      const [day, setDay] = useState('');

      useEffect(() => {
        setDay('2019-11-25');
      }, []);

      return (
        <div>
          <Head>
            <title>Gothenburg - Tech Imprint Arena</title>
            <link rel="canonical" href="https://techimprentarena.com/program/gothenburg" />
          </Head>
          <div
          className="bg-cover bg-center h-screen w-screen fixed z-0"
            style={{
              backgroundImage: 'url("/city/gbg-bw2.jpg")'
            }}
          />
          <div className="bg-color-cover opacity-75 fixed h-screen w-screen" />
          <div className='relative pt-32 w-full -mb-24 z-10'>
            <h1 className="w-full text-5xl font-bold w-3/4 text-center">
              Gothenburg<br/>25<sup>th</sup> – 29<sup>th</sup> of November 2019
            </h1>
            <p className='text-center text-lg w-full'><span className='location-icon black'></span> Johan & Nyström, Avenyn</p>
          </div>
          <div className='relative'>
            <div className='flex flex-wrap justify-center content-center p-10 lg:p-40 pt-40 '>
            
            <div className='w-4/5 fixed hidden lg:block'>
                <h3 className="text-3xl text-white">Program 2019</h3>
                <div className="day-selector-container">
                  
  <div className="day-selector">
    <div className="day">
      <a href="#2019-11-25" className={'day-link ' + ('2019-11-25' === day ? 'active' : '')}>Monday 25/11</a>
    </div>
  </div>
  
  <div className="day-selector">
    <div className="day">
      <a href="#2019-11-26" className={'day-link ' + ('2019-11-26' === day ? 'active' : '')}>Tuesday 26/11</a>
    </div>
  </div>
  
  <div className="day-selector">
    <div className="day">
      <a href="#2019-11-27" className={'day-link ' + ('2019-11-27' === day ? 'active' : '')}>Wednesday 27/11</a>
    </div>
  </div>
  
  <div className="day-selector">
    <div className="day">
      <a href="#2019-11-28" className={'day-link ' + ('2019-11-28' === day ? 'active' : '')}>Thursday 28/11</a>
    </div>
  </div>
  
  <div className="day-selector">
    <div className="day">
      <a href="#2019-11-29" className={'day-link ' + ('2019-11-29' === day ? 'active' : '')}>Friday 29/11</a>
    </div>
  </div>
  
                </div>
              </div>
              <div className='w-full lg:w-4/5 lg:ml-48'>
                
    <div className='pb-4' id='2019-11-25'>
      <VisibilitySensor onChange={() => setDay('2019-11-25')}>
        <h3 className='pl-6 pb-6 text-white'>
          <span className='text-3xl pr-10'>25/11</span>
          <span className='text-2xl'>Monday</span>
        </h3>
      </VisibilitySensor>
      
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">07:30</span>
        <span>-</span>
        <span className="event-end-time">08:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">11:30</span>
        <span>-</span>
        <span className="event-end-time">12:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">17:00</span>
        <span>-</span>
        <span className="event-end-time">18:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  
    <div className='pb-4' id='2019-11-26'>
      <VisibilitySensor onChange={() => setDay('2019-11-26')}>
        <h3 className='pl-6 pb-6 text-white'>
          <span className='text-3xl pr-10'>26/11</span>
          <span className='text-2xl'>Tuesday</span>
        </h3>
      </VisibilitySensor>
      
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">07:30</span>
        <span>-</span>
        <span className="event-end-time">08:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">11:30</span>
        <span>-</span>
        <span className="event-end-time">12:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">17:00</span>
        <span>-</span>
        <span className="event-end-time">18:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  
    <div className='pb-4' id='2019-11-27'>
      <VisibilitySensor onChange={() => setDay('2019-11-27')}>
        <h3 className='pl-6 pb-6 text-white'>
          <span className='text-3xl pr-10'>27/11</span>
          <span className='text-2xl'>Wednesday</span>
        </h3>
      </VisibilitySensor>
      
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">07:30</span>
        <span>-</span>
        <span className="event-end-time">08:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">11:30</span>
        <span>-</span>
        <span className="event-end-time">12:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/speakers/netclean.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>How world-leading technology can prevent sexual abuse against children</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p>Digitalisation and connectivity have brought a lot of positive developments and opportunities, but it has also resulted in a great increase in the volumes of and accessibility to child sexual abuse material. What role does businesses play and what can they do to disrupt the dissemination of child sexual abuse material – and why should they?</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>NetClean</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/how-world-leading-technology-can-prevent-sexual-abuse-tickets-77983604059' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">17:00</span>
        <span>-</span>
        <span className="event-end-time">18:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  
    <div className='pb-4' id='2019-11-28'>
      <VisibilitySensor onChange={() => setDay('2019-11-28')}>
        <h3 className='pl-6 pb-6 text-white'>
          <span className='text-3xl pr-10'>28/11</span>
          <span className='text-2xl'>Thursday</span>
        </h3>
      </VisibilitySensor>
      
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">07:30</span>
        <span>-</span>
        <span className="event-end-time">08:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">11:30</span>
        <span>-</span>
        <span className="event-end-time">12:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">17:00</span>
        <span>-</span>
        <span className="event-end-time">18:00</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  
    <div className='pb-4' id='2019-11-29'>
      <VisibilitySensor onChange={() => setDay('2019-11-29')}>
        <h3 className='pl-6 pb-6 text-white'>
          <span className='text-3xl pr-10'>29/11</span>
          <span className='text-2xl'>Friday</span>
        </h3>
      </VisibilitySensor>
      
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">07:30</span>
        <span>-</span>
        <span className="event-end-time">08:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='event'>
    <div className='event-timeline hidden lg:block'>
      <p className="event-time">
        <span className="event-start-time">11:30</span>
        <span>-</span>
        <span className="event-end-time">12:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-3/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{backgroundImage: "url(/city/gbg.jpg)"}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Event Title</h4>
          <span className='text-xs font-bold' style={{color:'red'}}>This event is full</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Event</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  
              </div>
            </div>
          </div>
        </div>
      );
    }
  