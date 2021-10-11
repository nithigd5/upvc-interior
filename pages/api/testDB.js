import clientPromise from '../../models/ConnectToDB'

export default async function handler(req, res) {

    const client = await clientPromise

    const isConnected = await client.isConnected()

    res.status(200).json({ isConnected })
  }