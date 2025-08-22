const fs = require("fs");

fs.rmdir("Javascript", (error) => {
  if (error) {
    console.log("Failed to Remove Folder", error);
  } else {
    console.log("Folder Removed");
  }
});

// fs.mkdir("Javascript", (error) => {
//   if (error) {
//     console.log("Failed to create Folder");
//   } else {
//     console.log("Folder Created");
//   }
// });
