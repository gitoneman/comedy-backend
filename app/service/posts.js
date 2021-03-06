'use strict';

module.exports = app => {
  class PostsService extends app.Service {
    * index(token, query) {
      // read config
      // &where={"publish":{"$in":[false]}}
      const { id, key, url } = this.app.config.LeanCloud;
      let params = '&where={"publish":{"$in":[true]}}';
      if (token && query.type === 'all') {
        params = '';
      }
      const { data } = yield this.ctx.curl(`${url}`, {
        headers: {
          'X-LC-Id': id,
          'X-LC-Key': key
        },
        data: 'order=-updatedAt' + params,
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
    * create(payload) {
      const { id, key, url } = this.app.config.LeanCloud;
      const { data } = yield this.ctx.curl(`${url}`, {
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
  return PostsService;
};
