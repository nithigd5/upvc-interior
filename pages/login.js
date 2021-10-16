import React from 'react'
import { useForm } from "react-hook-form";
import Head from 'next/head'
import { useRouter } from 'next/router'
import {setCookie} from '../lib/cookies'

async function postForm(formData) {
    const data = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/auth/login", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(formData)
    }
    )
    console.log(data)
    return data.json()
}

export default function LoginPage() {
    const { register, unregister, handleSubmit,setError,clearErrors, watch, reset, formState, getValues } = useForm();
    const { isSubmitSuccessful, isSubmitting, errors } = formState
    const router = useRouter()

    const onSubmit = (data, e) => postForm(data).then(res => {
        clearErrors()
        if (res.result === "success") {
            console.log("Login Success")
            setCookie('token',res.accessToken,0.3)
            router.push("/admin")
        } else {
            setError("password", {
                type: "manual",
                message: `${res.msg}`,
              });
        }
    })

    return (
        <>
        <Head>
            <title>Login | Dream Interiors</title>
        </Head>
        <div className="flex items-center justify-center w-full h-screen">
            <div className="rounded-md shadow-md p-4 py-12 bg-white h-auto w-96">
                <form className="flex flex-col gap-9 items-center w-full" onSubmit={handleSubmit(onSubmit)} >
                    <h4 className="text-2xl text-center text-brown font-medium py-2">Login</h4>
                    <label className="flex-grow-0 w-full text-center">
                        <input placeholder="username" type="text" {...register("username", { required: "Please Enter Username", })} className="input w-3/4" />
                        {errors.username && <div className="text-red-600 font-medium text-center p3">{errors.username.message}</div>}
                    </label>
                    <label className="flex-grow-0 w-full text-center">
                        <input placeholder="password" type="password" {...register("password", { required: "Please enter password" })} className="input w-3/4" />
                        {errors.password && <div className="text-red-600 font-medium text-center p-3 w-full">{errors.password.message}</div>}
                    </label>
                    <button type="submit" className="px-4 py-2 rounded-md shadow-md bg-white text-brown ring-2 ring-brown font-medium cursor-pointer transition hover:bg-brown-dark duration-300 hover:text-white" >Login</button>
                </form>
            </div>
        </div>
        </>
    )
}
