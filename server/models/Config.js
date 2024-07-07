import mongoose from 'mongoose';

// Définir le schéma de configuration
const configSchema = new mongoose.Schema({
  // Ajoutez les champs de votre schéma ici
});

// Créer le modèle Config à partir du schéma
const Config = mongoose.model('Config', configSchema);

// Exporter le modèle Config par défaut
export default Config;