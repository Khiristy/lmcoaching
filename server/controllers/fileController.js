// const mongoose = require('mongoose');
// const Grid = require('gridfs-stream');
// const fs = require('fs');
// const path = require('path');

// // Configurer mongoose
// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/lmcoaching';
// const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// let gfs;
// conn.once('open', () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

// // Fonction pour stocker un fichier
// const storeFile = (filePath) => {
//   return new Promise((resolve, reject) => {
//     const writeStream = gfs.createWriteStream({ filename: path.basename(filePath) });
//     fs.createReadStream(filePath).pipe(writeStream);

//     writeStream.on('close', (file) => {
//       resolve(`Fichier stocké avec succès : ${file.filename}`);
//     });

//     writeStream.on('error', (err) => {
//       reject(err);
//     });
//   });
// };

// // Fonction pour récupérer un fichier
// const retrieveFile = (filename, outputPath) => {
//   return new Promise((resolve, reject) => {
//     const readStream = gfs.createReadStream({ filename });
//     const writeStream = fs.createWriteStream(outputPath);

//     readStream.pipe(writeStream);

//     readStream.on('end', () => {
//       resolve('Fichier récupéré et sauvegardé comme fichier');
//     });

//     readStream.on('error', (err) => {
//       reject(err);
//     });
//   });
// };

// module.exports = {
//   storeFile,
//   retrieveFile,
// };
