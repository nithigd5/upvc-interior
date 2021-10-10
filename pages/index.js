import Head from 'next/head'
import LandingPage from "../components/LandingPage"
import { useRouter } from 'next/router'

export async function getServerSideProps() {  
  const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME+'/api/getProjects')
  const res1 = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME+'/api/getGallery')

  const projects = await res.json()
  const galleryItems = await res1.json()
  return {
    props: {
      projects,
      galleryItems
    },
  }
}

export default function Home({projects , galleryItems}) {
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
      <LandingPage projects={projects} galleryItems={galleryItems}>
        
      </LandingPage>

    </div>
  )
}
