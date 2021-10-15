import React, { useState } from 'react'
import Layout from '../../../components/AdminLayout'
import Head from 'next/head'
import Link from 'next/link'
import AdminProjects from '../../../components/AdminProjects'
import { OnSuccess, OnFailure } from '../../../components/PopUpModels'
import { BiLoaderCircle } from "react-icons/bi";
import Cookies from 'cookies'

export async function getServerSideProps({ req, res }) {

    const cookies = new Cookies(req, res)

    if (!req.cookies.token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    const login = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/auth/checkLogin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: cookies.get('token') }),
    })
    let data = await login.json()
    if (data.result === "success") {
        const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + '/api/getProjects')

        const allProjects = await res.json()

        return {
            props: {
                allProjects,
            },
        }
    } else {
        cookies.set('token')
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
}



export const projectContext = React.createContext()

export default function ProjectsPage({ allProjects }) {
    const [projects, setProjects] = useState(allProjects)

    const [isOpen, openModal] = useState(null)
    const [isError, openErrorModal] = useState(null)
    const [loading, setLoading] = useState(false)

    async function onDelete(_id) {
        console.log(_id)
        setLoading(true)
        const data = { deleteImages: true, id: _id }

        const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/admin/deleteProject", {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data)
        })
        const result = await res.json();
        console.log(result)
        if (result.result === "success") {
            openModal({ msg: "Project Deleted Successfully" })
            setProjects(projs => {
                return (projs.filter(p => p._id !== _id))
            })
        } else {
            openErrorModal({ msg: "unable to delete Project." })
        }
        setLoading(false)
    }

    async function onEdit(_id) {
        console.log("Projects Edit need to be added")
    }
    async function fetchAllProjects() {
        const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + '/api/getProjects')

        const allProjects = await res.json()
        setProjects(allProjects)
    }

    const projectContextValue = {
        onDelete,
        onEdit,
    }
    return (<>
        <Head>
            <title>Projects | Dream Interiors</title>
        </Head>
        <Layout >
            <div className="h-24 w-full" />
            <div className="flex flex-col items-center justify-center py-4">
                <Link href="/admin/projects/add" >
                    <a className="p-2 transition-colors duration-400 ring-2 rounded-md shadow-md text-gray-800 hover:bg-blue-500 hover:text-white"> Add Project </a>
                </Link>
                <projectContext.Provider value={projectContextValue}>
                    <div className="w-full">
                        <AdminProjects projects={projects} />
                    </div>
                </projectContext.Provider>
            </div>
            {isOpen &&
                <OnSuccess closeModel={() => {
                    openModal(false)
                }} {...isOpen} />
            }
            {isError &&
                <OnFailure {...isError} closeModel={() => {
                    openErrorModal(null)
                }} />
            }
            {loading && <div className={"overlay "}>
                <BiLoaderCircle className="animate-spin z-50  text-7xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>}
        </Layout>
    </>
    )
}
