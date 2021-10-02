import Head from 'next/head'
import Layout from '../components/layout'

export default function Gallery() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Gallery | PVC Interiors"
        />
        <title>Gallery | PVC Interiors </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout >
      <div className="h-screen w-full flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Page is UnderConstruction
      </h1>
      </div>
    </Layout>
    </div>
  )
}
