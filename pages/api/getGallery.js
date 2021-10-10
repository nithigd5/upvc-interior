import { v4 as uuidv4 } from 'uuid';

const galleryItems = {
    items: [    
    { image: "/images/i (1).jpg", title: "UPVC Interior Gallery" },
    { image: "/images/i (2).jpg", title: "UPVC Interior Gallery" },
    { image: "/images/i (3).jpg", title: "UPVC Interior Gallery" },
    { image: "/images/i (4).jpg", title: "UPVC Interior Gallery" },
    { image: "/images/i (5).jpg", title: "UPVC Interior Gallery" },
],
    description: "Do you want to setup a PVC modular kitchen for your home? You have come to the right place. We have PVC modular kitchens for different customers. Our company has a lot of customers, especially salem head office branch office coimbatore, and all over tamil nadu."
}

export default function handler(req, res) {
  res.status(200).json(galleryItems)
}
