import axios from 'axios';

const uploadImages = async (files) => {
  const formData = new FormData();
  files.forEach(file => formData.append('files', file));

  try {
    const response = await axios.post('/api/images/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de l\'upload des images');
  }
};

const downloadImage = async (name) => {
  try {
    const response = await axios.get(`/api/images/download/${name}`, {
      responseType: 'blob',
    });
    return URL.createObjectURL(response.data);
  } catch (error) {
    throw new Error('Erreur lors du téléchargement de l\'image');
  }
};

const fetchAllImages = async () => {
  try {
    const response = await axios.get('/api/images/images');
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des images');
  }
};

export { uploadImages, downloadImage, fetchAllImages };