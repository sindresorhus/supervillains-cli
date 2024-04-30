#!/usr/bin/env node
import meow from 'meow';
import supervillains, {randomSupervillain} from 'supervillains';

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
`, {
	importMeta: import.meta,
});

console.log(cli.flags.all ? supervillains.all.join('\n') : randomSupervillain());
