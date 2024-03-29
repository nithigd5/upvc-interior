import clientPromise from '../../../models/ConnectToDB'
import nextConnect from 'next-connect';
import bcrypt from 'bcrypt'
const jwt = require('jsonwebtoken')

const ObjectId = require('mongodb').ObjectId;

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).send({ error: `Method '${req.method}' Not Allowed` });
  },
  attachParams: true,
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3h' })
}


async function login({ username, password }) {

  const client = await clientPromise
  const db = client.db("pvcInterior")
  const users = db.collection("users")
  const user = await users.findOne({ username: username })
  if (user && user.username === username && await bcrypt.compare(password, user.password)) {
    const token = generateAccessToken({ username: username })
    await users.updateOne({ username: username }, { $set: { accessToken: token } })
    return token
  } else {
    return false
  }
}

async function checkLogin(username, token) {

  const client = await clientPromise
  const db = client.db("pvcInterior")
  const users = db.collection("users")
  const user = await users.findOne({ username: username })
  if (user && user.username === username && user.accessToken && user.accessToken == token) {
    return true
  } else {
    await users.updateOne({ username: username }, { $set: { accessToken: null } })
    return false
  }
}

async function logout(username, token) {
  const client = await clientPromise
  const db = client.db("pvcInterior")
  const users = db.collection("users")
  const user = await users.findOne({ username: username })
  if (user && user.username === username && user.accessToken && user.accessToken == token) {
    await users.updateOne({ username: username }, { $set: { accessToken: null } })
    return true
  } else {
    return false
  }
}

apiRoute.post("/api/auth/login", async (req, res) => {
  const cred = JSON.parse(req.body)
  var token = await login({ ...cred })

  if (token) {
    res.json({ result: "success", accessToken: token })
  } else {
    res.status(402).json({ result: "failed", msg: "username or password is Incorrect." })
  }
})

apiRoute.post("/api/auth/logout", async (req, res) => {
  var data = JSON.parse(req.body)
  var token = data.token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ result: "failed", msg: "not signedIn" });
    let check = await logout(user.username, token);

    if (check) {
      res.status(200).json({ result: "success" })
    } else {
      res.status(401).json({ result: "failed", msg: "not signedIn" })
    }
  })
})

apiRoute.post("/api/auth/checkLogin", async (req, res) => {

  var data = req.body
  var token = data.token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ result: "failed", msg: "not signedIn" });
    let check = await checkLogin(user.username, token);

    if (check) {
      res.status(200).json({ result: "success" })
    } else {
      res.status(401).json({ result: "failed", msg: "not signedIn" })
    }
  })
})

export default apiRoute;