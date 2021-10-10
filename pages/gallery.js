import Head from 'next/head'
import Layout from '../components/Layout'
import GalleryGrid from '../components/GalleryGrid'

export async function getServerSideProps() {  
  const res1 = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME+'/api/getGallery')

  const galleryItems = await res1.json()

  return {
    props: {
      galleryItems,
    },
  }
}

export default function GalleryPage({ galleryItems }) {
  
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Gallery | Dream Interiors"
        />
        <title>Gallery | PVC Interiors </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout >
      <div className="h-16"/>
      <GalleryGrid {...galleryItems}  />
      <div className="h-8"/>
      
    </Layout>
    </div>
  )
}