import React from 'react'
import Layout from '../../components/AdminLayout'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'cookies'

export async function getServerSideProps( { req,res} ) {

    const cookies = new Cookies(req, res)

    if(!req.cookies.token){
        return {
            redirect: {
              destination: '/login',
              permanent: false,
            },
        }
    }
    const login = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/auth/checkLogin",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: cookies.get('token') }),
    })
    let data = await login.json()
    if(data.result === "success"){
        return {
          props: {
            
          }, // Will be passed to the page component as props
        }
    }else{
        cookies.set('token')
        return {
            redirect: {
              destination: '/login',
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
