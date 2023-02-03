function makeChange(cents) {
    let resultSet = new Set()
function recurse(quarters,dimes,nickels,pennies) {
    let totalCents = quarters * 25 + dimes * 10 + nickels * 5 + pennies;
    if(totalCents === n){
        resultSet.add([quarters, dimes, nickels, pennies]);
    } else if (totalCents <n) {
        // recurse for each possible coin type
      recurse(quarters + 1, dimes, nickels, pennies);
      recurse(quarters, dimes + 1, nickels, pennies);
      recurse(quarters, dimes, nickels + 1, pennies);
      recurse(quarters, dimes, nickels, pennies + 1);
    }
}  
  recurse(0,0,0,0);
  return resultSet;
  
}
