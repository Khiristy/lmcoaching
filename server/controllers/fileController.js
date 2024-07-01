import DynamicImage from '../models/DynamicImage.js';

// Supprimer une image par nom
export const deleteDynamicImage = async (req, res) => {
  try {
    // Trouver et supprimer l'image par son nom
    const image = await DynamicImage.findOneAndDelete({ name: req.params.name });
    // Vérifier si l'image existe
    if (!image) {
      return res.status(404).json({ msg: 'Image non trouvée' });
    }
    // Répondre avec un message de succès
    res.status(200).json({ msg: 'Image supprimée avec succès' });
  } catch (err) {
    console.error(err.message);
    // Répondre avec une erreur de serveur
    res.status(500).send('Erreur du serveur');
  }
};

