const path = require('path');
const multer = require('multer');

const imageconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "..", "/uploads"));
    },
    filename: (req, file, callback) => {
        var ext = file.originalname.substring(file.originalname.indexOf("."));
        callback(null, `image_${Date.now()}.${file.originalname}`);
    }
})

const isimage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(new Error("only image is alloewd"));
    }
}

const upload = multer({
    storage: imageconfig,
    fileFilter: isimage
})

module.exports = {
    upload
}