import Head from 'next/head'
import LandingPage from "../components/LandingPage"
import { useRouter } from 'next/router'

export async function getServerSideProps() {  
  const res = await fetch(process.env.DOMAIN_NAME+'/api/getProjects')
  const projects = await res.json()
  return {
    props: {
      projects,
    },
  }
}

export default function Home({projects}) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Dream Interiors | Best U-PVC Interior Designers in India"
        />
        <title>Dream Interiors | U-PVC Interior</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage projects={projects}>
        
      </LandingPage>

    </div>
  )
}
