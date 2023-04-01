// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';

const locations = [
    // {location: "Salem", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4639.383857427512!2d78.13686457585163!3d12.095629567797548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac17019b40fe1b%3A0x8f8e764d1cf9f8c2!2sDream%20interiors!5e0!3m2!1sen!2sin!4v1633851465422!5m2!1sen!2sin" },
    // {location: "Coimbatore", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250646.6813632879!2d76.8271455697486!3d11.012014523817228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1633852221669!5m2!1sen!2sin" },
]

export default function handler(req, res) {
  res.status(200).json(locations)
}
