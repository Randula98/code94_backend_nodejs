import UserRouter from './routes/User.route.js';

function routes(app) {
    app.use('/user', UserRouter);
}

export default routes;