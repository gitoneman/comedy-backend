'use strict';

module.exports = app => {
  app.post('/api/upload', 'upload.index');
  app.post('/api/user/login', 'user.login');
  app.get('/api/user', 'user.index');
  app.resources('posts', '/api/posts', 'posts');
  app.get('*', 'home.index');
};
