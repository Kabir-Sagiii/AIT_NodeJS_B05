function display(getId) {
  getId();
  console.log("display is called");
  getId();
}

display(function () {
  console.log("callback function is called");
});
console.log("-------------------------------------");
display(() => {
  console.log("Arrow Callback function");
});
console.log("-------------------------------------");
display(function f1() {
  console.log("Named function as a Callback");
});
