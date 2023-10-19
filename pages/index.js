import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next app</title>
        <meta name="description" content="Generate by create react app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Captur Photography" message="I capture moments in nature and keep them alive." />
    </div>
  );
}