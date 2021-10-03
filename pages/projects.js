import Head from 'next/head'
import Layout from '../components/Layout'

export default function Projects({projects}) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Gallery | PVC Interiors"
        />
        <title>Projects | Dream Interiors</title>
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