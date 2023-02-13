var R = require('ramda');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var Moment = require('moment');
var indexRouter = require('./routes/index');
var cors = require('cors');
var app = express();
const urlParse = require('url-parse');

var externalHosts;

(async () => {
  externalHosts = await require('./lib/models/ApiKeys').getExternalHosts();
})();

/**
 * session management
 */
const MongoStore = require('connect-mongo')(session);
var sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: Moment.duration(10, 'hours').asMilliseconds()
  },
  store: new MongoStore({
    url: process.env.MONGO_DB_URL
  })
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sess));

// view engine setup
app.set('views', path.join(process.env.ROOT_DIR, 'server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.env.ROOT_DIR, 'public')));
app.use(express.static(path.join(process.env.ROOT_DIR, 'dist')));

app.use(cors({
  allowedHeaders: ['Origin', 'Authorization', 'Access-Control-Allow-Headers', 'X-Requested-With', 'Content-Type', 'Accept'],
  credentials: true,
  origin: (origin, callback) => {
    if (R.isNil(origin)) return callback(null, true);
    const { host } = urlParse(origin);
    console.log(host, JSON.stringify(externalHosts));
    if (R.includes(host, externalHosts)) return callback(null, true);
    callback(new Error('unauthorized host'));
  }
}));

app.use(require('./lib/middlewares/user'));

const setRoutes = () => {
  app.use('/', indexRouter);
};

module.exports = {
  app,
  setRoutes
};
