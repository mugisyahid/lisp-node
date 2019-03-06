#!/usr/bin/env node

const chalk = require("chalk")
const figlet = require("figlet")
const repl = require("repl")

const parser = require('./modules/parser')
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
    let listoflist = parser(cmd.replace(/(\n)/gm,""))
    if (listoflist) {
        console.log(expression.calculate(listoflist))
    } else {
        console.log('not valid lisp command')
    }
    callback(null)
}


init()

const r = repl.start({ prompt: `$ `, eval: evaluate })
