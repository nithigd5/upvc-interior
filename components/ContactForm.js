import React from 'react'
import { useState, useEffect } from 'react'

import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from 'react-icons/ai';

function postForm(formData) {
    const data = fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/contactform", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(formData)
    }
    ).then(res => res.json()).then(data => console.log(data))
}

function ContactSuccess({ closeModel }) {
    return (
        <div className="overlay">
            <div className="z-50 relative w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="p-10 rounded z-50 bg-white shadow-md m-auto max-w-max relative text-center">
                    <h4 className="text-xl font-medium text-gray-800">Thank you for Contacting us, We will Call you soon.</h4>
                    <p className="font-normal text-gray-600">Please feel free to call us at working hours.</p>
                    <AiFillCloseCircle
                        className="absolute z-50 text-4xl text-blue-700 right-2 top-2 bg-white rounded-full
                         transition-transform transform duration-300 hover:scale-125" onClick={() => { closeModel() }} />
                </div>
            </div>
        </div>
    )
}

export default function ContactForm() {
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors, isSubmitted, isSubmitSuccessful, isSubmitting } = formState

    const onSubmit = (data, e) => postForm(data);
    const onError = (errors, e) => console.log(errors, e);

    const [isOpen, openModal] = useState(false)

    useEffect(()=>{
        if(isSubmitSuccessful){
            openModal(true)
            reset()
        }
    },[isSubmitting, isSubmitSuccessful])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)} className="gap-3 mx-3 flex  flex-col items-center bg-transparent p-3 z-10 relative" >

                <label className="font-medium text-3xl text-brown-dark">Contact Form </label>

                <input placeholder="Name" type="text" {...register("name", { required: true, minLength: 3 })} className="input" />

                <div className="text-red-500 font-medium ">
                    {errors.name && "First name is required"}
                </div>

                <input placeholder="Phone"
                    {...register("phone", {
                        required: true,
                        pattern: /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/
                    })} type="number" className="input" />

                <div className="text-red-500 font-medium ">
                    {errors.phone && "Please Enter Valid Phone"}
                </div>

                <input placeholder="Email"
                    {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
                    type="email" className="input" />

                <div className="text-red-500 font-medium ">
                    {errors.email && "Please Enter Valid Email"}
                </div>

                <input placeholder="Subject" {...register("subject")} type="text" className="input" />


                <textarea placeholder="Message" {...register("message")} className="input" />

                <input type="submit" className="px-6 py-3 rounded-md shadow-md bg-brown text-white font-medium cursor-pointer transition hover:bg-brown-dark duration-300" />

            </form>
            {isOpen &&
                <ContactSuccess closeModel={() => {
                    openModal(false)
                }} />
            }

        </>
    )
}
