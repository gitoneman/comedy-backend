'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/news', 'news.list');
  app.post('/upload', 'upload.index');
  app.resources('posts', '/api/posts', 'posts');
};
