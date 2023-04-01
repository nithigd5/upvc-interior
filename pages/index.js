import Head from 'next/head'
import LandingPage from "../components/LandingPage"
import { useRouter } from 'next/router'

export async function getServerSideProps() {  
  const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME+'/api/getProjects')
  const res1 = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME+'/api/getGallery')
  const res2 = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + '/api/getServices')
  const services = await res2.json()
  const projects = await res.json()
  const galleryItems = await res1.json()
  
  return {
    props: {
      projects,
      galleryItems,
      services
    },
  }
}

export default function Home({projects , galleryItems, services}) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Best Commercials in India"
        />
        <title>Dream Interiors | U-PVC Interior</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage projects={projects} galleryItems={galleryItems} services={services}>
        
      </LandingPage>

    </div>
  )
}
