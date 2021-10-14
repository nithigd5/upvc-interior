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
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}

async function login({ username, password }) {

  const client = await clientPromise
  const db = client.db("pvcInterior")
  const users = db.collection("users")
  const user = await users.findOne({ username: username })
  if (user && user.username===username && await bcrypt.compare(password,user.password) ) {
    return true
  } else {
    return false
  }
}

apiRoute.use((req, res, next) => {
  next()
})


apiRoute.post( async (req, res) => {
  const { auth } = req.query

  switch (auth[0]) {

    case "login":
      const isLoginSuccess = await login({ ...JSON.parse(req.body) })

      if(isLoginSuccess){
        res.json({result: "success", accessToken: "" })
      }else{
        res.status(402).json({result: "failed",msg: "username or password is Incorrect." })
      }

      break;
    case "logout":
      res.end(`Post: LoggedOut `)
      break;

    default:
      res.status(502).end("Default")
  }
})

export default apiRoute;