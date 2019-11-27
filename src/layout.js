import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { withTranslation } from './components/i18n';

const Layout = ({ children, t }) => (
  <div>
    <header>
      <Navbar navigation={t('navigation')} />
    </header>
    <div className='container max-auto'>
      {children}
    </div>
    <Footer>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 pb-5'>
          <a
            href={t('privacy_policy.link')}
            title={t('privacy_policy.title')}
            className='hover:underline'
            rel='noopener noreferrer'
          >
            {t('privacy_policy.title')}
          </a>
        </div>
        <div className='w-full lg:w-1/2 lg:text-right'>
          <p>
            <span className='location-icon black' /> Malmskillnadsgatan 32,
            111 51 Stockholm
          </p>
          <p>
            {t('created_by')}{' '}
            <a href='https://hedy.tech' target='_blank' title='Hedy' rel='noopener noreferrer'>
              <img
                src='/hedy-black-coral.png'
                className='w-4 inline-block'
                alt='Hedy'
              />
            </a>
          </p>
        </div>
      </div>
    </Footer>
  </div>
);

export const withLayout = (Component, locale = '') => {
  const LayoutTranslation = withTranslation(Layout, 'common');

  return class withLayout extends React.Component {
    render () {
      return <LayoutTranslation locale={locale || this.props.locale}><Component {...this.props} /></LayoutTranslation>;
    }
  };
};
