const express = require('express');
const { postData, getData } = require('../controller/admin.controller');
const upload = require('../utils/multer');
const router = express.Router();

router.post('/upload-data', upload.any(), postData);

router.get('/get-data', getData);

module.exports = router;