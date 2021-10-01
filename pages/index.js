import Head from 'next/head'
import LandingPage from "../components/LandingPage"

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="PVC Interiors | Best Interior Designers in India"
        />
        <title>PVC Interiors </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage>
        
      </LandingPage>
    </div>
  )
}
