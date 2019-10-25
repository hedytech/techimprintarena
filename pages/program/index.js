import program from '../../data/program.json';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>Program - Tech Imprint Arena</title>
      <link rel="canonical" href="https://techimprintarena.com/program/" />
    </Head>
    <div
      className="bg-cover bg-center h-screen w-screen fixed z-0"
      style={{
        backgroundImage: 'url("/digby-cheung-qyOvSz_lJEQ-unsplash.jpg")'
      }}
    />
    <div className="bg-color-cover opacity-75 fixed h-screen w-screen" />
    <h1 className="invisible -mb-5">Program</h1>
    <div className="relative z-10 pt-32 lg:pt-48">
      {program.map((c, ci) => (
        <div key={ci} className="flex justify-center mb-20">
          {ci % 2 === 0 ? (
            <a
              href={`/program/${c.slug}`}
              title={c.name}
              className="flex w-full lg:w-2/3 hover:underline"
            >
              <img
                className="w-24 h-24 lg:w-48 lg:h-48 rounded-full ml-5 lg:ml-0 -mt-5"
                src={`/${c.image}`}
                alt={c.name}
              />
              <h2 className="text-lg lg:text-5xl font-bold pl-10">
                <span>{c.name.toUpperCase()}</span> <br />
                <span className="text-base lg:text-3xl" dangerouslySetInnerHTML={{__html:c.when.toUpperCase().replace(/TH/g, '<sup>th</sup>').replace(/ND/g, '<sup>nd</sup>')}}></span>
              </h2>
            </a>
          ) : (
            <a
              href={`/program/${c.slug}`}
              title={c.name}
              className="flex w-full lg:w-2/3 hover:underline"
            >
              <h2 className="text-lg lg:text-5xl font-bold pl-10 pr-12 w-full text-right">
                <span>{c.name.toUpperCase()}</span> <br />
                <span className="text-base lg:text-3xl" dangerouslySetInnerHTML={{__html:c.when.toUpperCase().replace(/TH/g, '<sup>th</sup>').replace(/ND/g, '<sup>nd</sup>')}}></span>
              </h2>
              <img
                className="w-24 h-24 lg:w-48 lg:h-48 rounded-full mr-5 -mt-5"
                src={`/${c.image}`}
                alt={c.name}
              />
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);
