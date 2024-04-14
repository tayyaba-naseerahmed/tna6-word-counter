#!/usr/bin/env node
//shabang

 import inquirer from "inquirer"
 import chalk from "chalk"

 const answers:{
    sentence:string
 } = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Please input your sentence for word counting:"
    }
 ])

 const words = answers.sentence.trim().split(" ")

 console.log(`The word count of your sentence is${words.length}`);