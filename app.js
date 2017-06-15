'use strict';
// var AV = require('leancloud-storage');

module.exports = app => {
  app.beforeStart(function* () {
    // 应用会等待这个函数执行完成才启动
    // const { LeanCloud: { id, key } } = app.config;
    // AV.init({
    //   appId: id,
    //   appKey: key
    // });
    // app.AV = AV;
  });
};
