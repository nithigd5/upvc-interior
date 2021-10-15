import React from 'react'
import Layout from '../../../components/AdminLayout'
import InsertProject from '../../../components/InsertProject'
import Head from 'next/head'
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
