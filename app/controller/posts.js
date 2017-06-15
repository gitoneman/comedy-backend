'use strict';

module.exports = app => {
  class PostController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      const query = ctx.query;
      const postsList = yield ctx.service.posts.index(query);
      ctx.body = {
        code: 0,
        msg: 'success',
        data: postsList.results
      };
    }
    * show() {
      const ctx = this.ctx;
      const { id } = ctx.params;
      const postDetail = yield ctx.service.posts.show(id);
      ctx.body = {
        code: 0,
        msg: 'success',
        data: postDetail
      };
    }
    * create() {
      const ctx = this.ctx;
      const payload = ctx.request.body;
      const post = yield ctx.service.posts.create(payload);
      ctx.body = {
        code: 0,
        msg: 'success',
        data: post
      };
    }
    * update() {
      const ctx = this.ctx;
      const { id } = ctx.params;
      const payload = ctx.request.body;
      const post = yield ctx.service.posts.update(id, payload);
      ctx.body = {
        code: 0,
        msg: 'success',
        data: post
      };
    }
  }
  return PostController;
};


