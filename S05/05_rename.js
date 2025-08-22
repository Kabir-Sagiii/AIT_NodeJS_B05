const fs = require("fs");

fs.rename("Home.html", "Login.html", (error) => {
  if (error) {
    console.log("Failed to Rename the File");
  } else {
    console.log("File Successfully Renamed");
  }
});
