'use strict';

module.exports = app => {
  class UserService extends app.Service {
    * index(token) {
      // read config
      const { id, key } = this.app.config.LeanCloud;
      const { data } = yield this.ctx.curl(`https://api.leancloud.cn/1.1/users/me`, {
        headers: {
          'X-LC-Id': id,
          'X-LC-Key': key,
          'X-LC-Session': token
        },
        dataType: 'json'
      });
      return data;
    }
    * show(objectId) {
      const { id, key, url } = this.app.config.LeanCloud;
      const { data } = yield this.ctx.curl(`${url}/${objectId}`, {
        headers: {
          'X-LC-Id': id,
          'X-LC-Key': key
        },
        dataType: 'json'
      });
      return data;
    }
    * login(payload) {
      const { id, key, userUrl } = this.app.config.LeanCloud;
      const { data } = yield this.ctx.curl(`${userUrl}`, {
        method: 'POST',
        contentType: 'json',
        headers: {
          'X-LC-Id': id,
          'X-LC-Key': key
        },
        data: payload,
        dataType: 'json'
      });
      return data;
    }
    * update(objectId, payload) {
      const { id, key, url } = this.app.config.LeanCloud;
      const { data } = yield this.ctx.curl(`${url}/${objectId}`, {
        method: 'PUT',
        contentType: 'json',
        headers: {
          'X-LC-Id': id,
          'X-LC-Key': key
        },
        data: payload,
        dataType: 'json'
      });
      return data;
    }
    * destroy(objectId) {
      const { id, key, url } = this.app.config.LeanCloud;
      const { data } = yield this.ctx.curl(`${url}/${objectId}`, {
        method: 'DELETE',
        contentType: 'json',
        headers: {
          'X-LC-Id': id,
          'X-LC-Key': key
        },
        dataType: 'json'
      });
      return data;
    }
  }
  return UserService;
};
