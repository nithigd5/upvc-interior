import React from 'react'
import { useState, useEffect } from 'react'

import { useForm, useFieldArray } from "react-hook-form";
import { AiFillCloseCircle, AiOutlineUpload, AiFillFileAdd } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { OnSuccess as InsertSuccess, OnFailure } from './PopUpModels'

const MAX_UPLOAD_SIZE = 10000000

async function postForm(formData) {
    console.log(formData)
    const fd = new FormData();
    fd.append('description', formData.description);
    fd.append('projectTitle', formData.projectTitle);

    for (let i = 0; i < formData.images.length; i++) {
        fd.append(`images[${i}].image`, formData.images[i].image[0]);
        fd.append(`images[${i}].title`, formData.images[i].title);
    }
    for (var value of fd.keys()) {
        console.log(value);
    }
    const data = await fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/admin/insertProject", {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'multipart/form-data',
        // },
        mode: 'cors',
        body: fd
    }
    )

    return data.json()
}



export default function InsertProject() {

    const [isOpen, openModal] = useState(false)
    const [isError, openErrorModal] = useState(null)

    const { register, unregister, control, handleSubmit, watch, reset, formState, getValues } = useForm();
    const { errors, isSubmitted, isSubmitSuccessful, isSubmitting } = formState
    const { fields, append, remove, } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "images", // unique name for your Field Array
        // keyName: "id", default to "id", you can change the key name
        shouldUnregister: true,
    });

    const onSubmit = (data, e) => postForm(data).then(res => {
        if(res.result==="success"){
            openModal(true)
        }else{
            openErrorModal({ msg: res.data })
        }
    })
    // const onError = (errors, e) => {
    //     console.log(errors, e)
    // }


    // useEffect(() => {
    //     if (Object.keys(errors).length ===0 && isSubmitSuccessful) {
    //         openModal(true)
    //         // reset(   )
    //     }
    // }, [isSubmitSuccessful])

    const FileInput = ({ name, placeholder, image, del, i }) => {
        const [isInvalid, setValid] = useState(undefined);

        const imgRef = React.useRef(undefined)
        const onDelete = () => {
            unregister(image, {
                keepValue: false,

            })
            unregister(name, {
                keepValue: false,

            })
            del()
        }
        const inputImg = watch(image)

        useEffect(() => {
            if (inputImg && inputImg.length > 0) {
                if (typeof imgRef.current !== "undefined" || typeof imgRef.current !== "null") {
                    const reader = new FileReader()

                    reader.addEventListener("load", function () {
                        let res = reader.result
                        if (imgRef.current != null) {
                            imgRef.current.src = res;
                        }
                    }, false);

                    reader.readAsDataURL(inputImg[0])
                }
            }
        }, [inputImg])

        const checkSize = (file) => file && file.length > 0 && file[0].size && file[0].size < MAX_UPLOAD_SIZE
        const check = () => {
            try {
                console.log("Error images: ", errors.images[i].image)
                return true
            } catch (exceptions) {
                return false
            }
        }
        return (
            <><div className="bg-gray-100 flex flex-col gap-2 rounded-md shadow-sm p-3 relative">
                <input placeholder={placeholder} type="text" {...register(name)} className="input-sm bg-white placeholder-gray-500" />

                <label className="h-36 flex flex-col w-full items-center justify-center bg-white rounded-md shadow-md relative">
                    <img className="absolute w-full h-full z-10" ref={imgRef} />
                    <AiOutlineUpload className="text-2xl cursor-pointer text-blue-500" />
                    <span className={`font-medium font-lg` + (check() === true ? " text-red-600 " : " text-brown ")}>*Select Image</span>
                    <input type="file" accept="image/*" {...register(image, {
                        validate: {
                            checkSize: file => checkSize(file) || "File Size Should be less than 2 MB",
                        }
                    })} className="hidden" />
                </label>
                <RiDeleteBin5Line
                    className="absolute z-40 text-2xl cursor-pointer text-red-600 right-2 bottom-2 bg-white rounded-full
         transition-transform transform duration-300 hover:scale-125" onClick={() => { onDelete() }} />
            </div>
                {isInvalid && <OnFailure msg={isInvalid} closeModel={() => setValid(undefined)} />}
            </>)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
                className="gap-3 mx-3 flex  flex-col items-center bg-transparent p-3 z-10 relative" >

                <label className="font-medium text-3xl text-brown-dark">Add Project </label>

                <input placeholder="Project Title" type="text" {...register("projectTitle", { required: true, minLength: 3 })} className="input w-3/4" />

                <div className="text-red-500 font-medium ">
                    {errors.projectTitle && "Title is required"}
                </div>
                <textarea placeholder="Project Description" type="text" {...register("description", { required: true, minLength: 3 })} className="input w-3/4" />

                <div className="text-red-500 font-medium ">
                    {errors.description && "Description is required"}
                </div>

                <div className="flex flex-col justify-center md:grid md:grid-cols-2 place-items-center place-content-center gap-2 my-4" >
                    <h4 className="text-2xl text-center font-medium md:col-span-2 text-brown p-2" >Project Images</h4>
                    {<div className="text-red-600 text-center md:col-span-2">
                        Note: Please select image size less than 2 mb.
                    </div>}
                    {fields.map((field, index) => (
                        <FileInput key={field.id} image={`images.${index}.image`} i={index} name={`images.${index}.title`}
                            placeholder={"Image Title"} del={() => remove(index)} />
                    ))}
                    <button type="button" onClick={() => append({ title: getValues("projectTitle") })}
                        className="md:col-span-2  text-xl flex flex-row justify-center gap-2 items-center text-green-500 rounded-md shadow-md p-2">
                        <span>Add Image</span>
                        <AiFillFileAdd />
                    </button>
                </div>

                <input type="submit" className="px-6 py-3 rounded-md shadow-md bg-brown text-white font-medium cursor-pointer transition hover:bg-brown-dark duration-300" />

            </form>
            {isOpen &&
                <InsertSuccess closeModel={() => {
                    openModal(false)
                }} />
            }
            {isError &&
                <OnFailure {...isError} closeModel={() => {
                    openErrorModal(null)
                }} />
            }

        </>
    )
}
