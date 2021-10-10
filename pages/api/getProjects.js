// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';

const projects = [{
  id : uuidv4(),
  title : "Project Karur Interior Design",
  description: "pvc interiors work Karur,upvc interior work in Karur,upvc cupboard work in Karur,pvc modular kitchen work in Karur.",
  images : [
    { image: "/images/i (2).jpg" ,title: "Project Karur Interior Design" },
    { image: "/images/i (3).jpg" ,title: "Project Karur Interior Design" },
    { image: "/images/i (4).jpg" ,title: "Project Karur Interior Design" },
    { image: "/images/i (5).jpg" ,title: "Project Karur Interior Design" },
    { image: "/images/i (6).jpg" ,title: "Project Karur Interior Design" },
    { image: "/images/i (7).jpg" ,title: "Project Karur Interior Design" },
  ]
},
{
  id : uuidv4(),
  title : "Project Salem Interior Design",
  description: "pvc interiors work Salem,upvc interior work in Salem,upvc cupboard work in Salem,pvc modular kitchen work in Salem.",
  images : [
    { image: "/images/i (8).jpg" ,title: "Project Salem Interior Design" },
    { image: "/images/i (9).jpg" ,title: "Project Salem Interior Design" },
    { image: "/images/i (10).jpg" ,title: "Project Salem Interior Design" },
    { image: "/images/i (11).jpg" ,title: "Project Salem Interior Design" },
    { image: "/images/i (12).jpg" ,title: "Project Salem Interior Design" },
    { image: "/images/i (13).jpg" ,title: "Project Salem Interior Design" },
  ]
}]


export default function handler(req, res) {
  res.status(200).json(projects)
}
