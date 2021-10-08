// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';

const services = [
    {   
        id: uuidv4(),
        serviceName: 'Interior Services',
        services: [{
            id: uuidv4(),
            title: "PVC Modular Kitchen",
            description: "PVC Modular Kitchen",
            image: "/images/i (2).jpg"
        },
        {
            id: uuidv4(),
            title: "PVC Cupboard",
            description: "PVC Cupboard",
            image: "/images/i (8).jpg"
        },
    ]
    },
    {   
        id: uuidv4(),
        serviceName: 'Digital Interior service',
        services: [{
            id: uuidv4(),
            title: "Digital Modular Kitchen",
            description: "Digital Wardrobe",
            image: "/images/i (2).jpg"
        },
        {
            id: uuidv4(),
            title: "Digital Wardrobe",
            description: "Digital Wardrobe",
            image: "/images/i (8).jpg"
        },
    ]
    },
    {   
        id: uuidv4(),
        serviceName: 'Jomsons PVC Doors',
        services: [{
            id: uuidv4(),
            title: "Jomsons Premium Doors",
            description: "Digital Wardrobe",
            image: "/images/i (2).jpg"
        },
        {
            id: uuidv4(),
            title: "Jomsons Digital Doors",
            description: "Digital Wardrobe",
            image:
                "/images/i (8).jpg"
        },
        {
            id: uuidv4(),
            title: "Jomsons Elegance Doors",
            description: "Digital Wardrobe",
            image:
                "/images/i (8).jpg"
        },
    ]
    },]

export default function handler(req, res) {
    res.status(200).json(services)
}
