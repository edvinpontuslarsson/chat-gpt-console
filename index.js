"use strict";

console.log("How can I help you today?");

const stdin = process.openStdin();

// gets called on console input
stdin.addListener("data", (data) => {
  const input = data.toString().trim();
  console.log("You said", input);
});
