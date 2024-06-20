const mongoose = require('mongoose');
const fs = require('fs');
const Logo = require('../models/Logo'); // Assurez-vous d'utiliser le bon chemin

// Fonction pour convertir un fichier en Base64
const encodeImageToBase64 = (filePath) => {
  return fs.readFileSync(filePath, { encoding: 'base64' });
};

// Fonction pour stocker plusieurs images en Base64
const storeBase64Images = async (files) => {
  const logos = files.map(file => {
    const base64Image = encodeImageToBase64(file.path);
    return {
      name: file.name,
      image: base64Image,
      contentType: file.contentType
    };
  });

  await Logo.insertMany(logos);
  console.log('Images stockées avec succès en Base64');
};

// Fonction pour récupérer une image en Base64
const retrieveBase64Image = async (name, outputPath) => {
  const doc = await Logo.findOne({ name });

  if (doc) {
    const base64Image = doc.image;
    const buffer = Buffer.from(base64Image, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log('Image récupérée et sauvegardée comme fichier');
  } else {
    console.log('Document non trouvé');
  }
};

// Fonction pour récupérer toutes les images en Base64
const retrieveAllBase64Images = async () => {
  const docs = await Logo.find();

  return docs.map(doc => ({
    name: doc.name,
    image: doc.image,
    contentType: doc.contentType
  }));
};

module.exports = {
  storeBase64Images,
  retrieveBase64Image,
  retrieveAllBase64Images,
};
