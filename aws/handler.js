'use strict';

module.exports.hello = async event => {
  let a = `test-${event.message}`;

  return a;
};
