const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary'); // your cloudinary.js config

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'json_uploads', // your desired folder name in Cloudinary
    resource_type: 'raw',   // VERY IMPORTANT for .json and non-image files
    format: async (req, file) => 'json', // optional but helpful
    public_id: (req, file) => `${Date.now()}-${file.originalname}`
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/json') {
      cb(null, true);
    } else {
      cb(new Error('Only JSON files are allowed'), false);
    }
  }
});

module.exports = upload;
