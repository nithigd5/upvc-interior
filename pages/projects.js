import Head from 'next/head'
import Layout from '../components/Layout'
import Projects from '../components/Projects'

export async function getServerSideProps() {  
  const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME+'/api/getProjects')
  const projects = await res.json()
  return {
    props: {
      projects,
    },
  }
}

export default function OurProjects({projects}) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Projects | PVC Interiors"
        />
        <title>Projects | Dream Interiors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout className="bg-gray-100">
      <div className="h-12" />
      <Projects projects={projects} />
    </Layout>
    </div>
  )
}
