'use strict';

exports.schedule = {
  type: 'worker',
  interval: '1s',
  // interval: '1h',
  // immediate: true,
};

exports.task = function* () {
  // console.log(111);
};
