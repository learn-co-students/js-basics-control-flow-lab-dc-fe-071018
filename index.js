// Write your code in this file!


function scuberGreetingForFeet (distance) {
  console.log("== scuberGreetingForFeet ==");
  if (distance <= 400) {
    return "This one is on me!";
  }
  if (distance > 2000 && distance < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  if (distance > 2500) {
    return "No can do.";
  }
}

scuberGreetingForFeet (199);

function ternaryCheckCity(city) {
  console.log("== ternaryCheckCity ==");
  let destination = (city === "NYC")
    ? 'Ok, sounds good.'
    : 'No go.';
  return destination;
}

ternaryCheckCity ("NYC");

function switchOnCharmFromTip(tip) {
  console.log("== switchOnCharmFromTip ==");

  switch(tip) {
      case "generous":
          return 'Thank you so much.'
          break;
      case "not as generous":
          return 'Thank you.'
          break;
      default:
          return 'Bye.'
  };
}

switchOnCharmFromTip("generous")
