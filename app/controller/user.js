'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      const payload = ctx.request.body;
      const token = ctx.session.token;
      if (token) {
        const user = yield ctx.service.user.index(ctx.session.token);
        if (user.username) {
          ctx.body = {
            code: 0,
            msg: '',
            data: {
              username: user.username
            }
          };
        } else {
          ctx.body = {
            code: -1,
            msg: '',
            data: {}
          };
        }
      } else {
        ctx.body = {
          code: -1,
          msg: '',
          data: {}
        };
      }
    }
    * login() {
      const ctx = this.ctx;
      const payload = ctx.request.body;
      const user = yield ctx.service.user.login(payload);

      if (user.sessionToken) {
        ctx.session.token = user.sessionToken;
        ctx.body = {
          code: 0,
          msg: 'success',
          data: {
            username: user.username
          }
        };
      }else {
        ctx.body = {
          code: -1,
          msg: user.error,
          data: {}
        };
      }
    }
  }
  return UserController;
};