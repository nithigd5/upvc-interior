import clientPromise from '../../models/ConnectToDB'

export default async function handler(req, res) {

    const client = await clientPromise

    // const isConnected = await client.

    res.status(200).json(req.body)

    
}
