function greeting (name)
{
console.log('Hello' + name);
}

function getUserInput (callback)
{
  var name = prompt("Enter your name");
  callback(name);
}

getUserInput(greeting);