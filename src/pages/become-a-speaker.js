import Head from 'next/head';
import { withTranslation } from '../components/i18n';
import { withLayout } from '../layout';

const Page = ({ locale, t }) => (
  <div>
    <Head>
      <title>{t('title')} - Tech Imprint Arena</title>
      <link
        rel='canonical'
        href={`https://techimprintarena.com/${locale}/${t('path')}/`}
      />
    </Head>
    <div
      className='bg-cover h-screen w-screen fixed z-0'
      style={{
        backgroundImage: 'url("/adult-audience-blur-976863.jpg")'
      }}
    />
    <div className='bg-color-cover opacity-75 fixed min-h-screen w-screen' />
    <div className='relative pt-32 pb-20 min-h-screen'>
      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-wrap w-4/5'>
          <div className='w-full lg:w-1/2 text-center lg:text-right'>
            <h1
              className='text-3xl lg:text-6xl font-bold lg:pt-48 lg:mr-24 pb-10'
              dangerouslySetInnerHTML={{ __html: t('heading') }}
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='p-0 lg:p-10 lg:mr-18 text-lg lg:text-xl'>
              {t('text').map((t, ti) => (
                <p className='pb-6' key={ti}>
                  {t}
                </p>
              ))}
              <p className='pb-6 italic'>
                {t('apply')}{' '}
                <a
                  href={t('link')}
                  target='_blank'
                  title={t('title')}
                  className='underline'
                  rel='noopener noreferrer'
                >
                  {t('here')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withLayout(withTranslation(Page, 'become-a-speaker'));
