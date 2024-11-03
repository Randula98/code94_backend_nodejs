import UserRouter from './routes/User.route.js';
import ProductRouter from './routes/Product.route.js';
import UploadRouter from './routes/Upload.route.js';

function routes(app) {
    app.use('/user', UserRouter);
    app.use('/product', ProductRouter);
    app.use('/upload', UploadRouter);
}

export default routes;