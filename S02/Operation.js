var keyName = "username";

var user = {
  username: "Kabir",
  id: 101,
  gender: "male",
  city: "pune",
};
console.log(user);
console.log("-------------------------------------------------------");

//Insert New Property
// .  or []
// objectname.New-key-name = new value  or  objectName["new key-name"] = new value

user.state = "MH";
user["phone"] = 99999999999;
// console.log(user);

//Read
// object-name.key-name or objectName["keyname"]

var value = user.keyName;

var newValue = user[keyName];

// console.log(value, newValue);

//update
// object-name.key-name = updated value
//objectName["key-name"] = updated value

user.city = "hyderabad";
user["username"] = "Rohan";
// console.log(user);

//Remove
// delete object-name.key-name
// delete objectName["key-name"]

delete user.gender;
delete user["id"];

console.log(user);
