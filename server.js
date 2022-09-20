const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8710;



const app = require('./app')



mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log('data is on')
});

app.listen(PORT, () => {
    console.log('server is running', PORT);
})