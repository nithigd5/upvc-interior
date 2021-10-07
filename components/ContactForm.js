import React from 'react'
import { useForm } from "react-hook-form";

function postForm(formData) {
    const data = fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/contactform", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(formData)
    }
    ).then(res=>res.json()).then(data=>console.log(data))
    .catch(err => err)
}

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => postForm(data);

    console.log(errors)
        
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="gap-3 mx-3 flex  flex-col items-center bg-transparent p-3 z-10 relative" >

            <label className="font-medium text-3xl text-brown-dark">Contact Form </label>

            <input placeholder="Name" type="text" {...register("name", { required: true, minLength: 3 })} className="input" />

            <div className="text-red-500 font-medium ">
                {errors.name && "First name is required"}
            </div>

            <input placeholder="Phone"
                {...register("phone", { required: true,
                 pattern: /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/ })} type="number" className="input" />
            
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
    )
}
