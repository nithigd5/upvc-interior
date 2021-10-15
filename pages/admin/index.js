import React from 'react'
import Layout from '../../components/AdminLayout'
import Head from 'next/head'
import Link from 'next/link'


export async function getServerSideProps( { req,res} ) {
    const login = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/auth/checkLogin",{
        method: 'POST',
        body: JSON.stringify({ token: req.cookies.token }),
    })
    let data = await login.json()
    if(data.result === "success"){
        return {
          props: {
            
          }, // Will be passed to the page component as props
        }
    }else{
        return {
            redirect: {
              destination: '/admin/login',
              permanent: false,
            },
        }
    }
  }
  

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
