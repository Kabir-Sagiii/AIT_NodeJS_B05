var fs = require("fs");

fs.rename("home.css", "profile.css", function (error) {
  if (error) {
    console.log("Failed to rename");
  } else {
    console.log("Successfully file Name Changed");
  }
});
