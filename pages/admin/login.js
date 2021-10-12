import React from 'react'
import { OnSuccess, OnFailure } from '../../components/PopUpModels'
import { useForm } from "react-hook-form";
import Head from 'next/head'

async function postForm(formData) {
    const data = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/auth/login", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(formData)
    }
    )
    return data.json()
}

export default function Login() {
    const { register, unregister, handleSubmit,setError,clearErrors, watch, reset, formState, getValues } = useForm();
    const { isSubmitSuccessful, isSubmitting, errors } = formState

    const onSubmit = (data, e) => postForm(data).then(res => {
        clearErrors()
        if (res.result === "success") {
            console.log("Login Success")
        } else {
            console.log({ msg: res.data })
            setError("username", {
                type: "manual",
                message: "res.data",
              });
        }
    })

    return (
        <>
        <Head>
            <title>Login | Dream Interiors</title>
        </Head>
        <div className="flex items-center justify-center w-full h-screen">
            <div className="rounded-md shadow-md p-4 bg-white h-auto">
                <form className="flex flex-col gap-9 items-center" onSubmit={handleSubmit(onSubmit)} >
                    <h4 className="text-2xl text-center text-brown font-medium py-2">Login</h4>
                    <label>
                        <input placeholder="username" type="text" {...register("username", { required: "Please Enter Username", })} className="input" />
                        {errors.username && <div className="text-red-600 font-medium text-center p3">{errors.username.message}</div>}
                    </label>
                    <label>
                        <input placeholder="password" type="password" {...register("password", { required: "Please enter password" })} className="input" />
                        {errors.password && <div className="text-red-600 font-medium text-center p3">{errors.password.message}</div>}
                    </label>
                    <button type="submit" className="px-4 py-2 rounded-md shadow-md bg-white text-brown ring-2 ring-brown font-medium cursor-pointer transition hover:bg-brown-dark duration-300 hover:text-white" >Login</button>
                </form>
            </div>
        </div>
        </>
    )
}
