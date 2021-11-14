const path = require("path");
module.exports={
    entry:"./src/main.js",
    output:{
        filename:"build.js",
        path:path.join(__dirname,"dist"),
    },
    mode:"development"
}