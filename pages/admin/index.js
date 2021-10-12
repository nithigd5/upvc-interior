import React from 'react'
import Layout from '../../components/AdminLayout'
import Head from 'next/head'
import Link from 'next/link'

export default function AdminDashboard() {
    return (
    <>
        <Head>
            <title>Admin | Dream Interiors</title>
        </Head>
        <Layout >
            <div className="h-24 w-full" />
            <div className="flex flex-row justify-center py-4">
            <Link href="/admin/projects/" >
                <a className="p-2 ring-2 rounded-md shadow-md text-gray-800" >Projects </a>
            </Link>
            </div>
        </Layout>
        </>
    )
}
