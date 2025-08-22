const fs = require("fs");

fs.readFile("Home.html", "utf-8", function (error, data) {
  if (error) {
    console.log("Failed to read the content from the file");
  } else {
    console.log(data);
  }
});
