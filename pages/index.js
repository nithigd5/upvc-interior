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
          content="PVC Interiors | Best Interior Designers in India"
        />
        <title>PVC Interiors </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage projects={projects}>
        
      </LandingPage>
    </div>
  )
}
