const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req,res,cb){
        cb(null, path.join(__dirname, './uploads'));
    },
    filename: function (req,file,cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null,filename + "-" + uniqueSuffix + ".png");
    },
});

exports.upload = multer({storage: storage});