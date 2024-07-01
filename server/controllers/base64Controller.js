import DynamicImage from '../models/DynamicImage.js';

// Fonction pour stocker une image encodée en base64
export const storeDynamicImage = async (req, res) => {
  const { name, image, contentType } = req.body;

  try {
    const newImage = new DynamicImage({
      name,
      image,
      contentType
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Fonction pour récupérer une image par son nom
export const getDynamicImage = async (req, res) => {
  try {
    const image = await DynamicImage.findOne({ name: req.params.name });
    if (!image) {
      return res.status(404).json({ msg: 'Image not found' });
    }
    res.json(image);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
