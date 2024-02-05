const accountId = 183947;
let accountEmail = "vaibhavchitransh@gmail.com";
var accountPassword = "12857";
accountCity = "Jaipur";
let accountState;

// accountId = 23;  // Value of const can't be changed

console.log(accountId);

accountEmail = "beetel@gmail.com";
accountPassword = "12345";
accountCity = "Hyderabad";

console.table([accountEmail, accountPassword, accountCity, accountState]);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/