import React from 'react'
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
    const login = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/auth/logout",{
        method: 'POST',
        body: JSON.stringify({ token: req.cookies.token }),
    })
    cookies.set('token')
    return {
        redirect: {
            destination: '/login',
            permanent: false,
        },
    }
  }
  


export default function logout() {
    return (
        <div>
            Logging Out...
        </div>
    )
}
