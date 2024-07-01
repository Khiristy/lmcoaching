const mongoose = require('mongoose');

const dynamicStringSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true }
});

module.exports = mongoose.model('DynamicString', dynamicStringSchema);