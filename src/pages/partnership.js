import Head from 'next/head';
import { withTranslation } from '../components/i18n';
import { withLayout } from '../components/layout';

const Page = ({ locale, t }) => (
  <div>
    <Head>
      <title>{t('title')} - Tech Imprint Arena</title>
      <link
        rel='canonical'
        href={`https://techimprintarena.com/${locale}/${t('path')}/`}
      />
    </Head>
    <div className='bg-color-cover-full-img fixed min-h-screen w-screen' />
    <div className='relative pt-32 pb-20'>
      <div className='flex flex-wrap justify-center'>
        <h1 className='text-xl text-center px-10 pb-10'>{t('description')}</h1>
        <div className='flex flex-wrap w-4/5 pt-10 lg:pt-0'>
          <div className='w-full lg:w-1/2 text-center lg:text-right'>
            <h2
              className='text-3xl lg:text-5xl font-bold lg:pt-20 lg:mr-24'
              dangerouslySetInnerHTML={{ __html: t('heading1') }}
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='lg:p-10 lg:p-0 pt-4 lg:pt-16 lg:pr-10 text-lg lg:text-xl'>
              <p className='pb-6'>{t('text1')}</p>
              <p className='pb-6 italic'>
                <a
                  href='mailto:hey@techimprintarena.com'
                  className='hover:underline'
                >
                  hey@techimprintarena.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap w-4/5 pt-20 lg:pt-0'>
          <div className='w-full lg:w-1/2 text-center lg:text-right block lg:hidden'>
            <h2
              className='text-3xl lg:text-5xl font-bold lg:pt-10 lg:mr-24'
              dangerouslySetInnerHTML={{ __html: t('heading2') }}
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='lg:p-10 lg:p-0 pt-4 lg:pt-16 lg:pr-10 text-lg lg:text-xl'>
              <p className='pb-6'>{t('text2')}</p>
              <p className='pb-6 italic'>
                <a
                  href='mailto:jennie@techimprintarena.com'
                  className='hover:underline'
                >
                  jennie@techimprintarena.com
                </a>
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 text-center lg:text-right hidden lg:block'>
            <h2
              className='text-3xl lg:text-5xl font-bold lg:pt-20 lg:mr-24'
              dangerouslySetInnerHTML={{ __html: t('heading2') }}
            />
          </div>
        </div>
        <div className='flex flex-wrap w-4/5 pt-20 lg:pt-0'>
          <div className='w-full lg:w-1/2 text-center lg:text-right'>
            <h2
              className='text-3xl lg:text-5xl font-bold lg:pt-20 lg:mr-24'
              dangerouslySetInnerHTML={{ __html: t('heading3') }}
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='lg:p-10 lg:p-0 pt-4 lg:pt-16 lg:pr-10 text-lg lg:text-xl'>
              <p className='pb-6'>{t('text3')}</p>
              <p className='pb-6 italic'>
                <a
                  href='mailto:hey@techimprintarena.com'
                  className='hover:underline'
                >
                  hey@techimprintarena.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withLayout(withTranslation(Page, 'partnership'));
