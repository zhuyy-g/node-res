const fs = require("fs");
fs.readFile("./tt.txt","utf8",(error,data) => {
    console.log(error);
    console.log("-----------------------------------");
    console.log(data);
})