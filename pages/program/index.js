import program from '../../data/program.json';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>Program - Tech Imprent Arena</title>
      <link rel="canonical" href="https://techimprentarena.com/program" />
    </Head>
    <div
      className="bg-cover bg-center h-screen w-screen fixed z-0"
      style={{
        backgroundImage: 'url("/static/digby-cheung-qyOvSz_lJEQ-unsplash.jpg")'
      }}
    />
    <div className="bg-color-cover opacity-75 fixed h-screen w-screen" />
    <div className="relative z-10 pt-32 lg:pt-48">
      {program.map((c, ci) => (
        <div key={ci} className="flex justify-center mb-20">
          {ci % 2 === 0 ? (
            <a
              href={`/program/${c.slug}`}
              title={c.name}
              className="flex items-center hover:underline"
            >
              <img
                className="w-24 h-24 lg:w-48 lg:h-48 rounded-full lg:mr-4 ml-5 lg:ml-0"
                src={require(`static/${c.image}`)}
              />
              <h2 className="text-lg lg:text-5xl font-bold pl-10">
                {c.name.toUpperCase()} <br />
                {c.when.toUpperCase()}
              </h2>
            </a>
          ) : (
            <a
              href={`/program/${c.slug}`}
              title={c.name}
              className="flex items-center hover:underline"
            >
              <h2 className="text-lg lg:text-5xl font-bold pl-10">
                {c.name.toUpperCase()} <br />
                {c.when.toUpperCase()}
              </h2>
              <img
                className="w-24 h-24 lg:w-48 lg:h-48 rounded-full mr-4"
                src={require(`static/${c.image}`)}
              />
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);
