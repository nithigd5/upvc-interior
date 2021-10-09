import Head from 'next/head'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Image from 'next/image'

export default function ContactUs() {

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Contact Us | Dream Interiors"
        />
        <title>Contact Us | PVC Interiors </title>
      </Head>
      <Layout>
        <div className="grid md:grid-cols-2  grid-cols-1 w-full place-content-center relative pt-12">
          <ContactForm />
          <Image src="/images/Lshape1.jpg" alt="U PVC Dream Interiors " layout="fill" objectFit="cover" objectPosition="center" className="filter blur-0" quality={100} />
          <div className="h-full w-full absolute bg-white  opacity-40 z-0" />
          <div className="p-3 relative h-full w-full flex flex-col gap-3 items-center justify-center">
            <h4 className="font-black text-3xl md:text-5xl text-brown text-center">
              Feel Free to Call Us <br/> 
              <span className="text-2xl md:text-3xl text-brown-dark">
              +91 {process.env.NEXT_PUBLIC_OWNER_PHONE}
              </span>
            </h4>
            <p className="font-medium text-xl text-center text-brown-dark md:text-2xl">
              We are always responive to messages and Calls.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}
