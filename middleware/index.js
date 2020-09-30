module.exports = function (app) {
  const express = require('express');
  const morgan = require('morgan');
  const session = require('express-session');
  const FileStore = require('session-file-store')(session);
  const path = require('path');
  const { setLocalsVariable } = require('./setLocalsVariable');

  app.use(express.static(path.join(__dirname, '..', 'public')));
console.log(path.join(__dirname, '..', 'public'));
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    session({
      store: new FileStore(),
      key: 'user_sid',
      secret: 'anything here',
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 6000000,
      },
    })
  );

  app.use(setLocalsVariable);

};
