var angle1 = 60;
var angle2 = 60;
var angle3 = 30;

if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
  console.log("Error: All angles must be positive and non-zero.");
} else {
  if (angle1 + angle2 + angle3 === 180) {
    console.log("Congratulations, we have a triangle.");
  } else {
    console.log("What a shame!! Try again because we still don't have a triangle.");
  }
}