// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';

const locations = [
    // {location: "Salem", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4639.383857427512!2d78.13686457585163!3d12.095629567797548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac17019b40fe1b%3A0x8f8e764d1cf9f8c2!2sDream%20interiors!5e0!3m2!1sen!2sin!4v1633851465422!5m2!1sen!2sin" },
    // {location: "Coimbatore", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250646.6813632879!2d76.8271455697486!3d11.012014523817228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1633852221669!5m2!1sen!2sin" },
    {location: "Dharmapuri", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.237267195659!2d78.13317073450371!3d12.095902836761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac17e3d50e8dd3%3A0xc87e8bf18fdcc635!2sDream%20Interiors!5e0!3m2!1sen!2sin!4v1634309140473!5m2!1sen!2sin" },
    {location: "Mettur", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31244.808703721326!2d77.78900237690151!3d11.793112774726643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba953186a385f89%3A0xfe84837515daa0ff!2sMettur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1634229219679!5m2!1sen!2sin" },
    {location: "Krishnagiri", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15579.370260938298!2d78.20620271674746!3d12.526586655390917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac34936b787041%3A0x8447c907029835db!2sKrishnagiri%2C%20Tamil%20Nadu%20635001!5e0!3m2!1sen!2sin!4v1634229258311!5m2!1sen!2sin" },
    {location: "Arur", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15661.151642447076!2d78.20939341655233!3d11.09190673069305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa34ba24ef7a83%3A0x770617475a024b84!2sArur%2C%20Tamil%20Nadu%20637020!5e0!3m2!1sen!2sin!4v1634229327433!5m2!1sen!2sin" },
    {location: "Hosur", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124531.93620866301!2d77.76268615311214!3d12.737999187544126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70c883f728a3%3A0xd71a6bc0275ac9be!2sHosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1634229291541!5m2!1sen!2sin" },
    {location: "Thirupatur", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.452628960556!2d78.57670051673993!3d12.475462960076168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac541ed3a9186d%3A0x9d184a98512f0405!2sTirupattur%2C%20Tamil%20Nadu%20635653!5e0!3m2!1sen!2sin!4v1634229368506!5m2!1sen!2sin" },
    {location: "Tiruvannamalai", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62385.734528554196!2d79.03423292854485!3d12.240938463815102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc0852cd3d6cd%3A0x74002b16e5bac856!2sTiruvannamalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1634229400064!5m2!1sen!2sin" },
    {location: "Kallakurichi", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31251.341045474557!2d78.9530698268702!3d11.735600735972037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab66e5dfc2508d%3A0xb773491d8d92cdff!2sKallakkurichi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1634229430247!5m2!1sen!2sin" },

]

export default function handler(req, res) {
  res.status(200).json(locations)
}
