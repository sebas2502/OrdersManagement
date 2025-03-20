const app = require('./config/app');
require('dotenv').config();
require('./config/db');
const port = process.env.PORT || 4000;

const ordersRouter = require('./src/routes/ordersRoutes');

app.use('/api/orders' , ordersRouter);



app.listen(port , () => {
    console.log("server running on port ",port);
})

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server close...');
        process.exit(0);
    });
});