const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const sassMiddleware = require('node-sass-middleware');

const filesRouter = require('./routes/files');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const meRouter = require('./routes/me');
const pricingRouter = require('./routes/pricing');
const privacyRouter = require('./routes/privacy');
const termsRouter = require('./routes/termsOfService');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(sassMiddleware({
	src: path.join(__dirname, 'public/stylesheets/sass'),
	dest: path.join(__dirname, 'public/stylesheets/css'),
	debug: true,
	// outputStyle: 'expanded',
	prefix: '/stylesheets/css'
}));

app.use('/api', filesRouter);
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/me', meRouter);
app.use('/pricing', pricingRouter);
app.use('/privacy', privacyRouter);
app.use('/terms-of-service', termsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
