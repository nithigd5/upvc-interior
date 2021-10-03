// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';

const projects = [{
  id : uuidv4(),
  title : "Project Karur Interior Design",
  description: "pvc interiors work Karur,upvc interior work in Karur,upvc cupboard work in Karur,pvc modular kitchen work in Karur.",
  images : [
    "/images/i (2).jpg", "/images/i (3).jpg", "/images/i (4).jpg", "/images/i (5).jpg", "/images/i (6).jpg"
  ]
},
{
  id : uuidv4(),
  title : "Project Salem Interior Design",
  description: "pvc interiors work Salem,upvc interior work in Salem,upvc cupboard work in Salem,pvc modular kitchen work in Salem.",
  images : [
    "/images/i (8).jpg", "/images/i (9).jpg", "/images/i (10).jpg", "/images/i (11).jpg", "/images/i (5).jpg"
  ]
}]




export default function handler(req, res) {
  res.status(200).json(projects)
}
