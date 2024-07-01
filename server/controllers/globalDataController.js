import Config from '../models/Config.js';

// Créer des données globales
export const createGlobalData = async (req, res) => {
  try {
    const config = new Config(req.body);
    await config.save();
    res.status(201).json(config);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obtenir toutes les données globales
export const getGlobalData = async (req, res) => {
  try {
    const configs = await Config.find();
    res.status(200).json(configs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtenir des données globales par ID
export const getGlobalDataById = async (req, res) => {
  try {
    const config = await Config.findById(req.params.id);
    if (!config) return res.status(404).json({ message: 'Données globales non trouvées' });
    res.status(200).json(config);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour des données globales par ID
export const updateGlobalData = async (req, res) => {
  try {
    const config = await Config.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!config) return res.status(404).json({ message: 'Données globales non trouvées' });
    res.status(200).json(config);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer des données globales par ID
export const deleteGlobalData = async (req, res) => {
  try {
    const config = await Config.findByIdAndDelete(req.params.id);
    if (!config) return res.status(404).json({ message: 'Données globales non trouvées' });
    res.status(200).json({ message: 'Données globales supprimées' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

