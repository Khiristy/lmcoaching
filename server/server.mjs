import express from 'express';
import { storeFile, retrieveFile } from './controllers/fileController.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Endpoint pour stocker un fichier
app.post('/upload', async (req, res) => {
  const filePath = 'path/to/your/logo.png'; // Remplacez par le chemin réel
  try {
    const message = await storeFile(filePath);
    res.status(200).send(message);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint pour récupérer un fichier
app.get('/download/:filename', async (req, res) => {
  const filename = req.params.filename;
  const outputPath = `./downloads/${filename}`; // Chemin où le fichier sera sauvegardé

  try {
    const message = await retrieveFile(filename, outputPath);
    res.status(200).send(message);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
