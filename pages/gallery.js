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
    <Layout className="bg-gray-100" >
      <div className="h-16"/>
      <div className=" rounded-md shadow-md m-1 bg-white p-2">
      <h3 className="text-2xl font-bold text-center p-3 text-brown-dark">Gallery</h3>
      <GalleryGrid {...galleryItems}  />
      </div>
      <div className="h-8"/>
      
    </Layout>
    </div>
  )
}