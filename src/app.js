/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  const pronoun = ["A", "The"];
  const subject = ["jogger", "racoon", "dog", "driver", "clown", "pine cone"];
  const action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  const possession = ["homework", "toe", "car", "shoe"];
  const where = ["on the street", "in my house", "in my driveway"];

  const proIndx = Math.floor(Math.random() * pronoun.length);
  const subjIndx = Math.floor(Math.random() * subject.length);
  const actionIndx = Math.floor(Math.random() * action.length);
  const possesionIndx = Math.floor(Math.random() * possession.length);
  const whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndx] +
    " " +
    possession[possesionIndx] +
    " " +
    where[whereIndx]
  );
};
