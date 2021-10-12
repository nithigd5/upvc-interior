import clientPromise from '../../../models/ConnectToDB'
import nextConnect from 'next-connect';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
const path = require('path'); // for getting file extension
const fs = require("fs"); // Or `import fs from "fs";` with ESM

const MAX_UPLOAD_SIZE = 10000000

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
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
  return projects.insertOne(data)
}

apiRoute.post((req, res) => {
  const validFormats = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp']
  let invalidFile = false
  req.files.forEach(file => {
    if (!validFormats.includes(file.mimetype) && !file.size < MAX_UPLOAD_SIZE) {
      deleteFile(file.path)
      invalidFile = true
    }

  })
  if (invalidFile) {
    res.status(402).json({ result: 'faliure', data: "Invalid Files" });
  }
  else {
    let images = req.files.map((file, i) => {
      return {
        title: req.body[`images[${i}].title`],
        image: file.path
      }
    })
    const project = {
      title: req.body.projectTitle,
      description: req.body.description,
      images: images
    }

    insertDb(project).then(data => {
      res.status(200).json({ result: 'success', });
    }).catch(err => {
      console.log(err)
      req.files.forEach(file => {
        deleteFile(file.path)
      })
      res.status(401).json({ result: 'faliure', data: "Unable to Insert to Database." });
    })
  }

});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
