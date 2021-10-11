import clientPromise from '../../../models/ConnectToDB'
import nextConnect from 'next-connect';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
const path = require('path'); // for getting file extension
const fs = require("fs"); // Or `import fs from "fs";` with ESM

const MAX_UPLOAD_SIZE = 2000000

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + uuidv4() + path.extname(file.originalname)),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.any());

const deleteFile = async (fileName) => {
  if (fs.unlinkSync(fileName)) {
    fs.unlink(fileName)
  }
}

const insertDb = async (data) => {
  let client = await clientPromise
  let db = client.db("pvcInterior")
  let projects = db.collection("projects")
  let id = await projects.insertOne(data)
  console.log("Inserted ID: ", id)
}

apiRoute.post((req, res) => {
  const validFormats = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp']
  req.files.forEach(file => {
    if (validFormats.includes(file.mimetype) && file.size < MAX_UPLOAD_SIZE) {
      let images = req.files.map((file, i) => {
        return {
          title: `images[${i}].title`,
          image: file.path
        }
      })
      const project = {
        title: req.body.projectTitle,
        description: req.body.description,
        images: images
      }

      insertDb(project)

      res.status(200).json({ data: 'success' });
    } else {
      deleteFile(file.path)
      res.status(401).json({ data: 'Invalid File' });
    }
  })
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
