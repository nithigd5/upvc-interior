// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';

const projects = {
  id : uuidv4(),
  title : "Coimbatore Interior Design",
  description: "lorsd asdas dasfsd fmn weund jqhwk ppdj kdm",
  images : [
    "/images/i (2).jpg", "/images/i (3).jpg", "/images/i (4).jpg", "/images/i (5).jpg"
  ]
}

export default function handler(req, res) {
  res.status(200).json(projects)
}
