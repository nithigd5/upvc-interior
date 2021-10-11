import React from 'react'
import Layout from '../../components/AdminLayout'
import InsertProject from '../../components/InsertProject'
import Head from 'next/head'

export default function AddProject() {
    return (<>
        <Head>
            <title>Add Project | Dream Interiors</title>
        </Head>
        <Layout>
            <div className="h-24" />
            <InsertProject />
        </Layout>
        </>
    )
}
