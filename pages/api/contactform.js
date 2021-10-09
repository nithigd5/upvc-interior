import sendContactMail from '../../models/sendMail'

export default async function handler(req, res) {
  console.log(req.setCokkie)
  const data = req.body
  await sendContactMail("Thank You for Contacting us | Dream Interiors", data, data.email)
    .catch(err=>res.status(500).json({'response':'error'}))
  res.status(201).json({"response":'success'})
}
  
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}