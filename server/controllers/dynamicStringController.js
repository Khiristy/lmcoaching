const DynamicString = require('../models/DynamicString');

// Fonction pour stocker une chaîne de caractères dynamique
const storeDynamicString = async (req, res) => {
  const { key, value } = req.body;

  try {
    const newString = new DynamicString({
      key,
      value
    });

    await newString.save();
    res.status(201).json(newString);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Fonction pour récupérer une chaîne de caractères par sa clé
const getDynamicString = async (req, res) => {
  try {
    const string = await DynamicString.findOne({ key: req.params.key });
    if (!string) {
      return res.status(404).json({ msg: 'String not found' });
    }
    res.json(string);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { storeDynamicString, getDynamicString };
