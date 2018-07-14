#!/usr/bin/env node
'use strict';
const meow = require('meow');
const supervillains = require('supervillains');

const cli = meow(`
	Examples
	  $ supervillains
	  Mud Pack

	  $ supervillains --all
	  Abattoir
	  Able Crown
	  ...

	Options
	  --all  Get all names instead of a random name
`);

console.log(cli.flags.all ? supervillains.all.join('\n') : supervillains.random());
