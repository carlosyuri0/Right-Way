var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

let indexRouter = require('./routes');
let usersRouter = require('./routes/users');
let contatoRouter = require('./routes/contato');
let cursoRouter = require('./routes/curso');
let depoiRouter = require('./routes/depoimento');
let vestiRouter = require('./routes/vestibular');
let enemRouter = require('./routes/enem');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));

//
app.use((req, res, next) => {
  // se está logado, disponibiliza para usar nas views
  if (req.session.usuario) {
    res.locals.usuario = req.session.usuario;
  }
  next();
});

app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/contato', contatoRouter);
app.use('/curso', cursoRouter);
app.use('/depoimentos', depoiRouter);
app.use('/vestibulares', vestiRouter);
app.use('/enem', enemRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
