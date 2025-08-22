const fs = require("fs");

fs.unlink("profile.html", (error) => {
  if (error) {
    console.log("Error while removing the file");
  } else {
    console.log("File Removed Successfully");
  }
});
