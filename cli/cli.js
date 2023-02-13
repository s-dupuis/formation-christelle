#!/usr/bin/env node

require('dotenv').config({ path: '../.env' });
require('@babel/register');

// eslint-disable-next-line no-unused-expressions
require('yargs').commandDir('cmds').demandCommand().help().argv;
