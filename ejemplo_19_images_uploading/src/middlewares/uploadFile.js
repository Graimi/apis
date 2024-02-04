const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Especificamos los parámetros a usar en cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'avatars',
    allowFormats: ['jpg', 'png', 'gif', 'jpeg'], // Formatos permitidos
  },
});

const uploadFile = multer({ storage });

module.exports = uploadFile;
