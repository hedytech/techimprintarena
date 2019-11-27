import Head from 'next/head';
import { withTranslation } from '../components/i18n';
import { withLayout } from '../layout';

const Page = ({ locale, t }) => (
  <div>
    <Head>
      <title>Privacy Policy - Tech Imprint Arena</title>
      <link
        rel='canonical'
        href={`https://techimprintarena.com/${locale}/privacy-policy/`}
      />
    </Head>
    <div className='bg-color-cover-full px-10 pt-40 pb-20'>
      <div className='flex flex-wrap justify-center'>
        <div className=' w-3/5'>
          <h1 className='text-3xl lg:text-5xl font-bold lg:pt-10 lg:mr-24'>
            PRIVACY POLICY
          </h1>
          <p>
            We care about the protection of your personal information. In this
            privacy policy you can read about how we collect and process your
            information, as well as what rights you have regarding your
            information.
          </p>

          <p className='pt-6 font-bold'>
            The data controller responsible for handling your personal data is:
          </p>
          <p>
            Tech Imprint Arena, org nr, c/o Hedylity Technology, WeWork,
            Malmskillnadsgatan 32, 111 51 Stockholm.
          </p>

          <p className='pt-6'>
            Tech Imprint Arena performs all handling of personal data in
            accordance with the EU's General Data Protection Regulation and
            reserves the right to change this policy if necessary.
          </p>
          <p className='pt-6'>
            Any changes to this Privacy Policy are communicated through our
            website,{' '}
            <a
              href='https://www.techimprintarena.com'
              title='Tech Imprint Arena'
              className='hover:underline'
              rel='noopener noreferrer'
            >
              https://www.techimprintarena.com
            </a>
          </p>
          <p className='pt-6 font-bold'>What is a personal information?</p>
          <p>
            Any kind of information that can be directly or indirectly linked to
            you is counted as personal data. Also pictures (photos) and sound
            recordings on individuals can be counted as personal data, although
            no names are mentioned. Encrypted data and various types of
            electronic identities, such as IP numbers, are counted as personal
            data if they can be linked to an individual.
          </p>

          <p className='pt-6 font-bold'>Why is my personal data collected?</p>
          <p>
            We try to collect as little data as possible in each case and to
            avoid sensitive personal data to the greatest extent possible. In
            some cases, however, we must collect personal data for various
            reasons, for example in the cases below:
          </p>
          <p className='pt-6'>
            - When applying for becoming a speaker, we collect personal
            information that is needed for application handling, application
            confirmation and to continue the dialogue in order to plan the
            potential seminar.
          </p>
          <p>
            - When signing up for a Tech Imprint Arena seminar we collect
            personal information that is needed for understanding target
            audience, sign-up confirmation and to be able to communicate
            potential discrepancy
          </p>
          <p>
            - When sending out news, highlights of the whole Tech Imprint Arena
            event, potential future event information and/or offers via email
          </p>

          <p className='pt-6 font-bold'>
            How long does Tech Imprint Arena save my personal information?
          </p>
          <p>
            We only store your personal data as long as we believe it is
            necessary to fulfill what was the purpose when we collected them, or
            as long as we have to store them by law. After that, your data will
            be deleted, or we will de-identify your personal data so that it can
            no longer be linked to you. We have internal procedures to ensure
            this.
          </p>

          <p className='pt-6 font-bold'>
            How does Tech Imprint Arena protect my personal information?
          </p>
          <p>
            As a Tech Imprint Arena visitor or partner, we want you to feel
            safe. For this reason, we see it as a matter of course that all
            traffic is encrypted (sent via https) between our website and your
            computer. We continuously adapt our security measures and our
            technical platforms to ensure that as little information as possible
            is saved about you, and that the data saved is done as safely as
            possible
          </p>
          <p className='pt-6 font-bold'>
            Does Tech Imprint Arena disclose my personal information to anyone
            else?
          </p>
          <p>
            Your personal information should not be disclosed to third parties
            unless it is necessary to fulfill our obligations under contract or
            law. In cases where we disclose personal data to third parties, we
            establish confidentiality agreements / assistance agreements and
            ensure that personal data are processed in a satisfactory manner.
          </p>

          <p className='pt-6 font-bold'>My rights</p>
          <p>
            You have the right, in accordance with applicable legislation, to
            receive information about what information we have about you and
            what we use it for. You also have the right to request an update or
            get information we have about you corrected in case they are
            incorrect.
          </p>

          <p className='pt-6'>
            In some cases specified in the legislation, you also have the right
            to request that Tech Imprint Arena cease processing or delete the
            information, provided there is no justified and lawful reason that
            requires us to retain the information.
          </p>

          <p className='pt-6 font-bold'>
            To learn more about data protection law and your rights, read more
            here:
          </p>
          <p>
            <a
              href='https://www.datainspektionen.se/dataskyddsreformen/dataskyddsforordningen/de-registrerades-rattigheter/'
              target='_blank'
              title='Datainspektionen'
              className='hover:underline'
              rel='noopener noreferrer'
            >
              https://www.datainspektionen.se/dataskyddsreformen/dataskyddsforordningen/de-registrerades-rattigheter/
            </a>
          </p>

          <p className='pt-6'>
            If you believe that our processing of your personal data does not
            take place in accordance with data protection legislation, we would
            like you to contact us. You also have the right to complain to the
            Data Inspectorate, which is the supervisory authority.
          </p>

          <p className='pt-6 font-bold'>Contact details</p>
          <p>Tech Imprint Arena</p>
          <p>c/o Hedylity Technology, WeWork</p>
          <p>Malmskillnadsgatan 32</p>
          <p>111 51 Stockholm</p>
          <p>
            Email:{' '}
            <a
              href='mailto:hey@techimprintarena.com'
              className='hover:underline'
              rel='noopener noreferrer'
            >
              hey@techimprintarena.com
            </a>
          </p>

          <p className='pt-6 font-bold'>Use of cookies</p>
          <p>
            Cookies are small text files that allows recognition of browsers and
            collect information about which of our web pages that have been
            visited. It is used to generate statistics on user visits and to
            improve our services. No information directly linked to you as a
            person is collected.
          </p>

          <p className='pt-6 font-bold'>Cookies are used, inter alia, for:</p>
          <p>
            - to remember the choices you made when you return at a later date
          </p>
          <p>- marketing</p>

          <p>
            Cookies are deleted immediately when you close your browser (session
            cookies) or are stored to facilitate future visits (permanent
            cookies).
          </p>
          <p>
            If you do not want cookies to be used or if you want to delete
            existing ones, you can do this through your browser settings.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default withLayout(withTranslation(Page, 'privacy-policy'));
