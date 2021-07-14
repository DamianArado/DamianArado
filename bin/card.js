#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Mohammad Humayun Khan /'),
  handle: chalk.cyan('@DamianArado'),
  work: chalk.white('Developer by day, Coder by night.'),
  twitter: chalk.cyan('https://twitter.com/@Mohamma14338427'),
  github: chalk.cyan('https://github.com/DamianArado'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/mohammad-humayun-khan-b16973147/'),
  web: chalk.cyan('https://damianarado.github.io/iamhumayun'),
  npx: chalk.white('npx damianarado'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding


console.log(chalk.green(boxen(output, options)))
