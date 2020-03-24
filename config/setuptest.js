// Setup enzyme's react adapter
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const moment=require('moment')
Enzyme.configure({ adapter: new EnzymeAdapter() });

// mock current date for tests
var MockDate = require('mockdate')
MockDate.set(moment('2000-11-22'));
