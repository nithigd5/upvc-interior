import { v4 as uuidv4 } from 'uuid';

const galleryItems = [{
  title : 'Sample Data',
    items: [    
    { image: "/images/i (1).jpg", title: "UPVC Interior Gallery" },
    { image: "/images/i (2).jpg", title: "UPVC Interior Gallery" },
    { image: "/images/i (3).jpg", title: "UPVC Interior Gallery" },
    { image: "/images/i (4).jpg", title: "UPVC Interior Gallery" },
    { image: "/images/i (5).jpg", title: "UPVC Interior Gallery" },
],
    description: "We made a lots of Interior Designs in major cities in Tamil nadu with best modern design look, checkout our wonderfull gallery for a various extraordinary designs in different patterns. we are always ready to serve our service to your beautiful house, kindly don't heistate to call us."
}]

export default function handler(req, res) {
  res.status(200).json(galleryItems[0])
}
