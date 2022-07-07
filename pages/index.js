import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-gray-100'>
      <Head>
        <title>The PJ Store</title>
        <meta name="description" content="E-commerce website created using Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      </div>
    </div>
  )
}
