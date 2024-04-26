#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt(
    [
        {
            name: "sentence",
            message: "Please enter a sentence or paragraph:",
            type: "input"

        }
    ]
);

const words = answer.sentence.trim().split(" ");

console.log(`Word Count: ${words.length}`);

