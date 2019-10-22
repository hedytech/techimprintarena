import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>Become a speaker - Tech Imprint Arena</title>
      <link
        rel="canonical"
        href="https://techimprentarena.com/become-a-speaker"
      />
    </Head>
    <div
      className="bg-cover h-screen w-screen fixed z-0"
      style={{
        backgroundImage: 'url("/adult-audience-blur-976863.jpg")'
      }}
    />
    <div className="bg-color-cover opacity-75 fixed min-h-screen w-screen" />
    <div className="relative pt-32 pb-20">
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap w-4/5">
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <h1 className="text-3xl lg:text-6xl font-bold lg:pt-48 lg:mr-24 pb-10">
              BECOME
              <br />A SPEAKER
            </h1>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="p-0 lg:p-10 lg:mr-18 text-lg lg:text-xl">
              <p className="pb-6">
                The mission with Tech Imprint Arena is to make the society aware
                of the technology development, how it will make the world a
                better place and impact the way we live our daily life. We
                believe that the most impact will be when everyone is aware and
                have knowledge about what is coming, that is when technological
                solutions really will make a difference!
              </p>
              <p className="pb-6">
                Do your company work with the latest technology AND do you use
                it to create a better tomorrow?
              </p>
              <p className="pb-6">We need role models like you!</p>
              <p className="pb-6 italic">
                Apply to become a speaker{' '}
                <a
                  href="https://forms.gle/prnuQ65aMadtTNGQ8"
                  target="_blank"
                  title="Become a speaker"
                  className="underline"
                >
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
