const details = {
    name: "dinesh",
    age :23,
    email : "dinesh@example.com",
    address : {
        city : "hyd",
        state : "telangana"
    }
}
console.log(details["name"])
console.log(details.address.city);
console.log(details["address"]["state"])

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//symbol
const uniqueKey = Symbol("key");
const obj = {
    [uniqueKey] : "value"

};
console.log(obj[uniqueKey]);

