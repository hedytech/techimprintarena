
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
            <link rel="canonical" href="https://techimprintarena.com/program/gothenburg/" />
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
            
            <div className='flex flex-wrap justify-center content-center p-10 lg:p-40 pt-40'>
            <div className='w-4/5 fixed hidden lg:block' style={{top: '365px'}}>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/city/gbg.jpg)"}, ...{}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>To be announced</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>...</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>TBA</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/speakers/carboncloud.jpg)"}, ...{"backgroundSize":"100%"}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Visualisation of the climate footprints of food</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>The food system accounts for 20-25% of the world’s total greenhouse gas emissions. Do you know how your eating habits affect the climate and what your climate footprint really is? What if today’s technology enables you to get the accurate and comprehensible information about the climate impact from your choices - would you make different ones?</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>CarbonCloud</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/visualisation-of-the-climate-footprints-of-food-tickets-78590284657' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/speakers/mimbly.png)"}, ...{"backgroundSize":"100%"}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>How technology save our oceans and change the way we use water</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>But what if we could use water in a smarter way and stop plastics before they even reach the oceans? The award winning entrepreneur Isabella Palmgren, Founder & CEO at Mimbly, will talk about how technology and innovative solutions could solve the biggest environmental issues we  are facing today.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Mimbly</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/how-technology-save-our-oceans-and-change-the-way-we-use-water-biljetter-81215456617' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/speakers/einride.jpg)"}, ...{"backgroundSize":"100%"}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>How emerging technology is changing transportation at its core</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>The evolution of autonomous transportation is here to stay, but is society ready for the change? And what are the actual benefits? Driven by a passion for tech and sustainability, Einride is about to transform the transport industry for good. Tomas Ohlson, the Founding Engineer, will share how self-driving makes saving the planet profitable.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Einride</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/how-emerging-technology-is-changing-transportation-at-its-core-biljetter-81033281727' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/city/gbg.jpg)"}, ...{}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>To be announced</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>...</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>TBA</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='#' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/speakers/trine.jpg)"}, ...{"backgroundSize":"100%"}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Your money is your voting power!</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>You invest your money for a better future, or are you? It is time to start talking about money! Because where the money goes, development grows. What if you could put your money to work, both for your own private interest and for the greater good? Hanna Lindquist, Communications & Customer growth at Trine, will show you how business and new technology can come together with solutions for both making money and assist underdeveloped countries in their future growth.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Trine</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/your-money-is-your-voting-power-biljetter-81038637747' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/speakers/detectivio.jpg)"}, ...{}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>From sci-fi concept to life-saving medtech</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>What if healthcare could become proactive instead of reactive? Cutting edge technology will not only change the automotive industry and the Olympic Games, but personalize healthcare and enable professionals to be proactive. This inspirational talk will take you on a journey describing how contact-free scanning of vital signs will change the future of healthcare.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Detectivio</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/from-sci-fi-concept-to-life-saving-medtech-tickets-78964219105' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/speakers/netclean.jpg)"}, ...{}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>How world-leading technology can prevent sexual abuse against children</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>Digitalisation and connectivity have brought a lot of positive developments and opportunities, but it has also resulted in a great increase in the volumes of and accessibility to child sexual abuse material. What role does businesses play and what can they do to disrupt the dissemination of child sexual abuse material – and why should they?</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>NetClean</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/how-world-leading-technology-can-prevent-sexual-abuse-tickets-77983604059' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/speakers/qualisys.jpg)"}, ...{}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>Is 3D motion capture the answer to preventing injuries?</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>With the rapid development in VR/AR, machine learning, AI and vision technologies - possibilities for the future are greater than ever before! In an inspirational talk Magnus Berlander, CTO at Qualisys, will give you insights on how 3D motion capture will improve the speed and quality of rehabilitation from injuries, prevent injuries and assist coaches and athletes in their strive for improved performance.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Qualisys</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/is-3d-motion-capture-the-answer-to-preventing-injuries-biljetter-81035171379' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
        <span className="event-start-time">11:30</span>
        <span>-</span>
        <span className="event-end-time">12:30</span>
      </p>
    </div>
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/speakers/annotell.jpg)"}, ...{}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>The challenge to teach a car to drive</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>What is the logic behind and how do you really teach a car how to drive? Although technology is emerging, computers are still quite stupid and the world is very complex. So, how to teach your product  to act exactly as you want it to and to be reliable? In this talk we are taking part of the deep knowledge behind machine learning and AI as well as the vision of autonomous cars.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Annotell</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/the-challenge-to-teach-a-car-to-drive-tickets-80013714173' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
    <div className="event-link m-0 lg:ml-32 w-full lg:w-4/4">
      <div className='flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/5 -mr-6 pb-6 lg:pb-0'>
          <div className="event-thumbnail-container">
            <div className="event-thumbnail" style={{...{backgroundImage: "url(/speakers/recorded-future.jpg)"}, ...{"backgroundSize":"100%"}}}></div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h4 className='font-bold tracking-wide'>How to prevent cyberattacks and fake news</h4>
          <span className='text-xs font-bold' style={{color:'undefined'}}></span>
          <p className='pt-3'>Digital safety has never been more important and is on top of the agenda of the world leaders. So, how can we sort out worldwide threats and disinformation in a swift? With the latest technology, we  are able to link events, actions, people, places, and other characteristics to represent how cyber and physical events manifest both online and in the real world! Staffan Truvé, CTO at Recorded Future, will take you into the world of security and talk about how to view information in a new and conscientious way.</p>
        </div>
        <div className='w-full lg:w-1/5 lg:pl-4'>
          <p className='text-m pt-6 lg:pt-0 lg:pl-6'>Hosted by:<br/>Recorded Future</p>
          <p className='event-location'><span className='location-icon big my-2' /> <span className='location-link'>Johan & Nyström, Avenyn</span></p>
          <p className='event-signup'>
            <a href='https://www.eventbrite.se/e/how-to-prevent-cyberattacks-and-fake-news-biljetter-81036667855' target='_blank' title='Read more' rel='noopener noreferrer' className='bg-white hover:bg-gray-100 text-gray-800 p-2 text-sm text-center lg:float-right'>Signup</a>
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
  