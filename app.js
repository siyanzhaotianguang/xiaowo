let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')
let session = require("express-session")
let MongoStore = require("connect-mongo")(session)
let history = require('connect-history-api-fallback')
const {MONGODB_URL} = require('./config/serverConfig')

let indexRouter = require('./routes/index')
let usersRouter = require('./routes/users')
let loginRouter = require('./routes/login')
let loginoutRouter = require('./routes/loginout')
let registerRouter = require('./routes/register')
let postsRouter = require('./routes/posts')
let uploadRouter = require('./routes/upload')

let {StartDB} = require('./data/db')

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(session({
    secret: 'dfsgd332s',
    name: 'w.id',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24    /*过期时间*/

    }, /* secure:true  https这样的情况才可以访问cookie */
    rolling: true,
    store: new MongoStore({
        url: MONGODB_URL,  //数据库的地址  student是数据库名
        touchAfter: 24 * 3600    //time period in seconds
    })
}))


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use(history({
    rewrites: [
        {from: /#(\.*)$/, to: '/dist/index.html'}
    ]
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/#', express.static(path.resolve(__dirname, 'public/dist')))

app.use(function (req, res, next) {
    if (req.headers.origin === 'http://47.99.82.242' || req.headers.origin === 'http://localhost:8080'||req.headers.origin==='http://www.syztg.cn') {
        res.header('Access-Control-Allow-Origin', req.headers.origin)
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        res.header('Access-Control-Allow-Headers', 'Content-Type')
        res.header('Access-Control-Allow-Credentials', 'true')
    }
    next()
})

StartDB()

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/loginout', loginoutRouter)
app.use('/register', registerRouter)
app.use('/posts', postsRouter)
app.use('/upload', uploadRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
