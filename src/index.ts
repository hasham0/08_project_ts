#! /usr/bin/env node
//import npm packages
import inquirer from "inquirer";

//making type for mcqs question
type check = {
  Question: string;
  Options: (string | number)[];
  Answer: string | number;
}[];

//declaring qustion,options and answer in array of objects
const questionAnswer: check = [
  {
    Question: `There are seven continents in the world. In terms of area, the largest continent is _____, and the smallest continent is _____.`,
    Options: [
      "Asia, Antarctica",
      "Asia, Australia",
      "Africa, Antarctica",
      "Africa, Australia ",
    ],
    Answer: "Asia, Australia",
  },
  {
    Question: `In terms of population, the largest continent is _____, and the smallest continent is _____.`,
    Options: [
      "Asia, Antarctica",
      "Asia, Australia",
      "Africa, Antarctica",
      "Africa, Australia ",
    ],
    Answer: "Asia, Australia",
  },
  {
    Question: `There are five oceans in the world. The largest ocean is _____, and the smallest ocean is _____.`,
    Options: [
      "Atlantic, Antarctic",
      "Atlantic, Arctic",
      "Pacific, Antarctic",
      "Pacific, Arctic",
    ],
    Answer: "Pacific, Arctic",
  },
  {
    Question: `United Nations was formed on 24 October _____ in the United States.`,
    Options: [1943, 1944, 1945, 1946],
    Answer: 1945,
  },
  {
    Question: `By area, the smallest continent is _______`,
    Options: ["Australia", "Antarctica", "Europe", "North America"],
    Answer: "Australia",
  },
  {
    Question: `Indonesia is the largest archipelagic country in the world. It has about _____ islands`,
    Options: [13000, 15000, 17000, 19000],
    Answer: 17000,
  },
  {
    Question: `Other than continents, the largest island in the world is _______`,
    Options: ["Iceland", "Greenland", "Sri Lanka", "New Zealand"],
    Answer: "Greenland",
  },
  {
    Question: `The longest international border between the two countries is the border between _______`,
    Options: [
      "Argentina and Chile",
      "China and Russia",
      "Kazakhstan and Russia",
      "Canada and United States",
    ],
    Answer: "Canada and United States",
  },
  {
    Question: `The World Wide Web (WWW) was invented by _______.`,
    Options: ["Tim Berners-Lee", "Bob Kahn", "Steve Jobs", "Bill Gates"],
    Answer: "Tim Berners-Lee",
  },
  {
    Question: `In our world, currently there are about _____ people.`,
    Options: ["6.8 billion", "7.8 billion", "8.8 billion", "9.8 billion"],
    Answer: "7.8 billion",
  },
];
const userGiveAnswer: (string | number)[] = [];

//quiz funtion
async function quizFunc() {
  //user bio input
  const userBio = await inquirer.prompt([
    {
      name: "userName",
      type: "input",
      message: "Enter your Name:",
    },
    {
      name: "ID",
      type: "number",
      message: "Enter your ID:",
    },
    {
      name: "section",
      type: "input",
      message: "Enter your Section:",
    },
    {
      name: "confirmation",
      type: "confirm",
      message: "should we start the quizz ?",
    },
  ]);
  let num;
  // taking confirmation
  if (userBio["confirmation"] === true) {
    for (const [key, val] of questionAnswer.entries()) {
      num = key + 1;
      const { Question, Options, Answer } = val;
      console.log("\n");
      console.log("\t", "Question:", num);
      console.log("\n");
      const userInput = await inquirer.prompt([
        {
          name: `Answers${num}`,
          choices: [...Options],
          type: "list",
          message: `${Question}`,
        },
      ]);
      //when user option matches the correct answer
      if (userInput[`Answers${num}`] === Answer) {
        userGiveAnswer.push(userInput[`Answers${num}`]);
      }
    }
  } else {
    console.log("have a nice day");
  }
}
await quizFunc();

//making result
const result = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(`Total correct answer:${userGiveAnswer.length}`);
    }, 3000);
  });
};

//display result
async function main() {
  console.log("\n");
  console.log("-----------Result--------------");
  console.log("\n");
  console.log("Total number of Question:", questionAnswer.length);
  console.log("\n");
  const check = await result();
  console.log(check);
  console.log("\n");
  console.log(
    `You Got ${userGiveAnswer.length} marks out of ${questionAnswer.length}`
  );
}
main();
