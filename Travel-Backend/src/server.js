const dotenv = require('dotenv');
// Load env vars
dotenv.config();

const connectDB = require('./config/db');
const app = require('./app');

const startServer = async () => {
    await connectDB();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
};

startServer().catch((error) => {
    console.error(`Unable to start server: ${error.message}`);
    process.exitCode = 1;
});