// function f1(f1Callback) {
//   console.log("f1 is called");
//   f1Callback(function (f3Callback) {
//     console.log("callback-2");
//     f3Callback(function () {
//       console.log("callback - 4");
//     });
//   });
// }

// f1(function (f2Callback) {
//   console.log("callback-1");
//   f2Callback(function (f4Callback) {
//     console.log("callback - 3");
//     f4Callback();
//   });
// });

function f1(callback) {
  console.log("f1 is called");
  callback();
}
function f2(callback) {
  console.log("f2 is called");
  callback();
}
function f3(callback) {
  console.log("f3 is called");
  callback();
}
function f4() {
  console.log("f4 is called");
}

f1(function () {
  f2(function () {
    f3(function () {
      f4();
    });
  });
});
