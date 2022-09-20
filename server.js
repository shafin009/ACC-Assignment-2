const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;



const app = require('./app')



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@tours-assignment.kwgjtmd.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});



app.listen(port, () => {
    console.log('server is running', port);
})