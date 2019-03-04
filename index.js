#!/usr/bin/env node

const chalk = require("chalk")
const figlet = require("figlet")
const repl = require("repl")

const parserCommand = require('./modules/parser')
const expression = require('./modules/expression')


const fonts = ["Digital", "Doom", "Italic", "LCD"]

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const init = () => {
    console.log(
        chalk.green(
        figlet.textSync("LISP-B", {
            font: fonts[getRandomInt(fonts.length)],
            horizontalLayout: "default",
            verticalLayout: "default"
        })
        )
    )
}

const evaluate = (cmd, context, filename, callback) => {
    cmd = cmd.replace(/(\n)/gm,"")
    if (expression.isValidExp(cmd)) {
        console.log(expression.calculateOneExp(cmd))
    } else {
        console.log("not valid exp notation")
    }

    callback(null)
}


init()

const r = repl.start({ prompt: `$ `, eval: evaluate })
