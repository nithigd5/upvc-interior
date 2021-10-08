import React from 'react'
import Service from '../components/Service'
import Layout from '../components/Layout'
import Head from 'next/head'

export async function getStaticProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + '/api/getServices')
    const services = await res.json()
    return {
        props: {
            services,
        },
    }
}

export default function services({ services }) {
    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Our Services | Dream Interiors"
                />
                <title>Our Services| PVC Interiors </title>
            </Head>
            <Layout>
                <div className="bg-white w-full ansolute">
                    <div className="h-16 w-full" />
                    <h4 className="text-3xl font-medium m-auto p-3 text-center">Our Services</h4>
                    {services.map(service=>{
                        return(
                            <div className="bg-gray-100 p-4" key={service.id}>
                                <h4 className="text-2xl font-medium text-gray-600 pb-3">
                                    {service.serviceName}
                                </h4>
                                <div className="flex flex-col md:grid gap-2 md:grid-cols-3 p-3 ">
                                    {service.services.map(s=>{
                                        return (<Service {...s} key={s.id} />)
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        </div>
    )
}
