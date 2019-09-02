import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>Become a speaker - Tech Imprent Arena</title>
      <link
        rel="canonical"
        href="https://techimprentarena.com/become-a-speaker/"
      />
    </Head>
    <div
      className="bg-cover h-screen w-screen fixed z-0"
      style={{
        backgroundImage:
          'url("/static/paula-prekopova-Mt9DbRm2KmA-unsplash.jpg")'
      }}
    />
    <div className="bg-color-cover opacity-75 fixed h-screen w-screen" />
    <div className="relative pt-64 h-screen">
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <h2 className="text-3xl lg:text-5xl font-bold lg:pt-12 lg:mr-24">
              BECOME A<br />
              SPEAKER
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="p-10 lg:mr-18 text-lg lg:text-xl">
              <p className="pb-6">
                Do you or your company work with the latest technology AND do
                you use it to make a better world?
              </p>
              <p className="pb-6">We need role models like you!</p>
              <p className="pb-6 italic">
                Apply to become a speaker{' '}
                <a href="#" title="Become a speaker" className="underline">
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);