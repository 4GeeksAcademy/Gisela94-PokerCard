/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  let cards = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  function myClickFunction() {
    function generateRandomNumbers() {
      let singleNumbers = numbers[Math.floor(Math.random() * numbers.length)];
      return singleNumbers;
    }

    function generateRandomSuits() {
      let singleCard = cards[Math.floor(Math.random() * cards.length)];
      return singleCard;
    }

    let randomSuit = generateRandomSuits();

    document.querySelector(".number").innerHTML = generateRandomNumbers();
    document.querySelector(".suit").innerHTML = randomSuit;
    document.querySelector(".suit-inverted").innerHTML = randomSuit;

    if (randomSuit === "♦" || randomSuit === "♥") {
      document.querySelector(".suit").style.color = "red";
      document.querySelector(".suit-inverted").style.color = "red";
    }
  }
  setInterval(myClickFunction, 10000);

  document
    .getElementById("myButton")
    .addEventListener("click", myClickFunction);
};
