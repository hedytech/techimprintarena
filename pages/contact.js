import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>Contact - Tech Imprint Arena</title>
      <link rel='canonical' href='https://techimprentarena.com/contact' />
    </Head>
    <div
      className='bg-cover h-screen w-screen fixed z-0'
      style={{
        backgroundImage: 'url("/the-founders-have-the-word.png")'
      }}
    />
    <div className='bg-color-cover opacity-75 fixed min-h-screen w-screen' />
    <div className='relative pt-32 pb-20'>
      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-wrap w-4/5'>
          <div className='w-full lg:w-1/3 text-center lg:text-right'>
            <h1 className='text-3xl lg:text-5xl font-bold lg:pt-48 lg:mr-24'>
              THE FOUNDERS
              <br />
              HAVE THE
              <br />
              WORD
            </h1>
          </div>
          <div className='w-full lg:w-2/3'>
            <div className='pt-10 lg:mr-18 text-lg lg:text-xl'>
              <p className='pb-6'>
                We founded the Tech Imprint Arena with two things in mind;
              </p>
              <ul className='pb-6 list-inside imprint-list'>
                <li className='pb-6'>
                  to increase the awareness of the technology development in the
                  society, and create an arena where it is easy for everyone to
                  get into the core of companies tech innovations and thoughts
                  of the future
                </li>
                <li className='pb-6'>
                  to lift companies that really take their responsibility in
                  using innovation and tech for creating a better world and
                  taking us closer to reaching the 17 global sustainability
                  goals
                </li>
              </ul>
              <p className='pb-6'>
                Our aim is to evolve Tech Imprint Arena into a Nordic epicentre
                which opens up the doors between companies and the society. An
                Arena that creates an awareness and inspiration which eases the
                barrier for technology to change behaviour and help us adapt to
                the future ahead.
              </p>
              <p className='pb-6'>
                Let’s make a tech imprint for a better world TOGETHER!
              </p>
            </div>
            <div className='flex flex-wrap -ml-16'>
              <div className='w-1/3 text-center'>
                <p className='font-bold'>Malin Kjällström</p>
                <p>Gbg Tech Week</p>
                <p className='flex lg:justify-center pt-2'>
                  <img
                    className='w-12 h-12'
                    src='/gtw_logo_black.png'
                    alt='Gbg Tech Week'
                  />
                </p>
              </div>
              <div className='w-1/3 text-center'>
                <p className='font-bold'>Emelie Meurk Demerud</p>
                <p>Hedylity Technology</p>
                <p className='flex lg:justify-center pt-2'>
                  <img
                    className='w-6 h-12'
                    src='/hedy-black-coral.png'
                    alt='Hedylity Technology'
                  />
                </p>
              </div>
              <div className='w-1/3 text-center'>
                <p className='font-bold'>Jennie Sinclair</p>
                <p>Techposition</p>
                <p className='flex justify-center pt-2'>
                  <img
                    className='w-12 h-12'
                    src='/techposition.png'
                    alt='Techposition'
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* contact us */}
    <div className='relative pt-0 lg:pt-32 pb-40 w-screen'>
      <h2 className='w-full text-5xl font-bold w-3/4 text-center'>
        If any questions - contact us!
      </h2>
      <div className='w-full text-center px-0 lg:px-10'>
        <p className='text-center py-6 w-full text-lg lg:text-2xl font-bold'>
          <a href='mailto:hey@techimprintarena.com' className='hover:underline'>
            hey@techimprintarena.com
          </a>
        </p>
        <p className='text-center w-full'>
          <a
            href='https://www.facebook.com/Tech-Imprint-Arena-106166127426805/'
            target='_blank'
            title='Facebook'
          >
            <img
              className='w-6 inline-block mr-2'
              src='/facebook.png'
              alt='Facebook'
            />
          </a>
          <a
            href='https://www.instagram.com/techimprintarena/'
            target='_blank'
            title='Instagram'
          >
            <img
              className='w-6 inline-block mr-2'
              src='/instagram.png'
              alt='Instagram'
            />
          </a>
          <a
            href='https://www.linkedin.com/company/tech-imprint-arena/'
            target='_blank'
            title='LinkedIn'
          >
            <img
              className='w-6 inline-block mr-2'
              src='/linkedin.png'
              alt='LinkedIn'
            />
          </a>
        </p>
      </div>
    </div>
  </div>
);
