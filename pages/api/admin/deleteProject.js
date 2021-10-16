import clientPromise from '../../../models/ConnectToDB'
import nextConnect from 'next-connect';
import next from 'next';
const path = require('path'); // for getting file extension
const fs = require("fs"); // Or `import fs from "fs";` with ESM
const ObjectId = require('mongodb').ObjectId; 
const jwt = require('jsonwebtoken')

const apiRoute = nextConnect({
    onError(error, req, res) {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
  });

async function getProjectFromDB(id){
    const client = await clientPromise
    const db = client.db("pvcInterior")
    const projects = db.collection("projects")
    const project = projects.find({_id: new ObjectId(id)}).project({"images.image":1})
    return project.toArray()
}  

async function deleteProjectFromDB(id){
    const client = await clientPromise
    const db = client.db("pvcInterior")
    const projects = db.collection("projects")
    try{
      await projects.deleteOne({ _id: new ObjectId(id) })
    }
    catch(e) {
      throw new Error("unable to delete")
    }

}  
const deleteFile = async (fileName) => {
    if (fs.unlinkSync(fileName)) {
      fs.unlink(fileName)
    }
}

async function checkLogin(req, res, next) {
  if (req.cookies.token) {
    const client = await clientPromise
    const token = req.cookies.token

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, { username }) => {
      if (err) return res.status(401).json({ result: "failed", msg: "Not signedIn" });
      const db = client.db("pvcInterior")
      const users = db.collection("users")
      const user = await users.findOne({ username: username })
      if (user && user.username === username && user.accessToken && user.accessToken == token) {
        next()
      } else {
        await users.updateOne({ username: username }, { $set: { accessToken: null } })
        res.status(401).json({ result: "failed", msg: "Not signedIn" })
      }
    })
  } else {
    res.status(401).json({ result: "failed", msg: "Not signedIn" })
  }
}

apiRoute.use(checkLogin);


apiRoute.post(async (req, res) => {
    console.log("Post Request")
    let data = JSON.parse(req.body)
    const project = await getProjectFromDB(data.id)
    try{
        if(project){
          project[0].images.forEach(img=>{
            deleteFile(img.image)
          })
          deleteProjectFromDB(data.id)
            res.status(200).json({ result: "success" })
        }
    }catch(e){
        console.log(e)
        res.status(501).json({ result: "failed", error:e })
    }
})

export default apiRoute;