import React,  {useContext} from 'react'
import Image from 'next/image'
import Gallery from './Gallery'
import { projectContext } from '../pages/admin/projects'

export default function Project({_id, title, description, images }) {
    const { onDelete, onEdit } = useContext(projectContext)

    return (
        <div className="mb-10 bg-white shadow-md rounded-md p-3 my-3 ">
            <div className="w-full  flex flex-row gap-3 items-center">
            <h4 className="text-center text-xl font-normal text-gray-700">{title}</h4>
            <button className="btn-blue px-3 py-1 rounded-md shadow-md" onClick={()=>onEdit(_id)}>Edit</button>
            <button className="btn-red px-3 py-1 rounded-md shadow-md" onClick={() => onDelete(_id)}>Delete</button>
            </div>
            
            <Gallery items={images} className="my-3 " />
            <div className="w-full text-sm font-normal text-gray-500 text-center">{description}</div>
        </div>
    )
}
