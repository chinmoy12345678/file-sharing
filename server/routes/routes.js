const express = require('express')
const uploadImage = require('../controller/image-controller');
const getImage = require('../controller/image-controller')
const upload = require('../utils/upload.js')

const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

module.exports = router;