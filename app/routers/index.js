import UserRouter from './routes/User.route.js';
import ProductRouter from './routes/Product.route.js';

function routes(app) {
    app.use('/user', UserRouter);
    app.use('/product', ProductRouter);
}

export default routes;