import mongoose from 'mongoose';

const dynamicStringSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true }
});

const DynamicString = mongoose.model('DynamicString', dynamicStringSchema);

export default DynamicString;
