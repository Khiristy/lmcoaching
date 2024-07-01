import mongoose from 'mongoose';

const dynamicImageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // Stockée en base64
  contentType: { type: String, required: true }
});

const DynamicImage = mongoose.model('DynamicImage', dynamicImageSchema);

export default DynamicImage;