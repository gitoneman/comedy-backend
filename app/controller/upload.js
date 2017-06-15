'use strict';

// const fs = require('fs');
// const path = require('path');

// function saveStream(stream, filepath) {
//   return new Promise((resolve, reject) => {
//     const ws = fs.createWriteStream(filepath);
//     stream.pipe(ws);
//     ws.on('error', reject);
//     ws.on('finish', resolve);
//   });
// }
const moment = require('moment');

module.exports = app => {
  class UploadController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      const stream = yield ctx.getFileStream();
      const object = yield ctx.oss.put(moment(Date.now()).format('YYYY-MM-DD') + '/' + stream.filename, stream);
      // var png = { base64: stream.read().toString('base64') };
      // var file = new app.AV.File(stream.filename, png);
      // yield file.save();
      ctx.body = {
        code: 0,
        msg: 'success',
        data: object
      };
      // 上传到本地
      // const filepath = path.join(__dirname, '../../upload', stream.filename);
      // yield saveStream(stream, filepath);
    }
  }
  return UploadController;
};
