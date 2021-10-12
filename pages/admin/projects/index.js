import React from 'react'
import Layout from '../../../components/AdminLayout'
import Head from 'next/head'
import Link from 'next/link'

export default function AddProject() {
    return (<>
        <Head>
            <title>Projects | Dream Interiors</title>
        </Head>
        <Layout >
            <div className="h-24 w-full" />
            <div className="flex flex-row justify-center py-4">
            <Link href="/admin/projects/add" >
                <a className="p-2 ring-2 rounded-md shadow-md text-gray-800" > Add Project </a>
            </Link>
            </div>
        </Layout>
        </>
    )
}
