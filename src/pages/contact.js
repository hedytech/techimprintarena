import Head from 'next/head';
import { withTranslation } from '../components/i18n';
import { withLayout } from '../components/layout';

const Page = ({ locale, t }) => (
  <div>
    <Head>
      <title>{t('title')} - Tech Imprint Arena</title>
      <link
        rel='canonical'
        href={`https://techimprintarena.com/${locale}/${t('path')}`}
      />
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
            <h1
              className='text-3xl lg:text-5xl font-bold lg:pt-48 lg:mr-24'
              dangerouslySetInnerHTML={{ __html: t('about_heading') }}
            />
          </div>
          <div className='w-full lg:w-2/3'>
            <div className='pt-10 lg:mr-18 text-lg lg:text-xl'>
              {t('about_top').map((p, pi) => (
                <p className='pb-6' key={pi}>
                  {p}
                </p>
              ))}
              <ul className='pb-6 list-inside imprint-list'>
                {t('about_list').map((l, li) => (
                  <li className='pb-6' key={li}>
                    {l}
                  </li>
                ))}
              </ul>
              {t('about_footer').map((p, pi) => (
                <p className='pb-6' key={pi}>
                  {p}
                </p>
              ))}
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
      <h2
        className='w-full text-5xl font-bold w-3/4 text-center'
        dangerouslySetInnerHTML={{ __html: t('contact_heading') }}
      />
      <div className='w-full text-center px-0 lg:px-10'>
        <p className='text-center py-6 w-full text-lg lg:text-2xl font-bold'>
          <a
            href='mailto:hey@techimprintarena.com'
            className='hover:underline'
            rel='noopener noreferrer'
          >
            hey@techimprintarena.com
          </a>
        </p>
        <p className='text-center w-full'>
          <a
            href='https://www.facebook.com/Tech-Imprint-Arena-106166127426805/'
            target='_blank'
            title='Facebook'
            rel='noopener noreferrer'
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
            rel='noopener noreferrer'
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
            rel='noopener noreferrer'
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

export default withLayout(withTranslation(Page, 'contact'));
