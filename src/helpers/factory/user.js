import { Factory } from 'rosie';
import Chance from 'chance';

const chance = new Chance();

export default Factory.define('user')
  .sequence('id')
  .attr('firstName', chance.first())
  .attr('lastName', chance.last())
  .attr('username', chance.word(5))
  .attr('phone', chance.phone(12, { formatted: false }))
  .attr('password', 'chance.word(5)');
