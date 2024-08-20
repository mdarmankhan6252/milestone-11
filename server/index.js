const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 9000;


const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174']
}
app.use(cors(corsOptions))
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ewhtdrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const jobsCollection = client.db('SoloSphereCollection').collection('jobs')
    const bidsCollection = client.db('SoloSphereCollection').collection('bids')



    //get all jobs data
    app.get('/jobs', async (req, res) => {
      const result = await jobsCollection.find().toArray();
      res.send(result)

    })
    //get a job data
    app.get('/job/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await jobsCollection.findOne(query)
      res.send(result)
    })

    //save a bid data in db
    app.post('/bid', async (req, res) => {
      const bidData = req.body;
      console.log("bidData", bidData)
      const result = await bidsCollection.insertOne(bidData)
      res.send(result)
    })

    //save a job post in db
    app.post('/addJob', async (req, res) => {
      const jobData = req.body;
      console.log(jobData);
      const result = await jobsCollection.insertOne(jobData)
      res.send(result)
    })

    //get all jobs posted by spacific user

    app.get('/jobs/:email', async (req, res) => {
      const email = req.params.email;
      const query = { 'buyer.email': email }
      const result = await jobsCollection.find(query).toArray();
      res.send(result)
    })

    //delete
    app.delete('/job/:id', async(req, res) =>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)}
      const result = jobsCollection.deleteOne(query)
      res.send(result)
    })

    //update a job in db
    app.put('/job/:id', async(req, res) =>{
      const id = req.params.id;
      const jobData = req.body;
      const query = {_id : new ObjectId(id)}
      const options = {upsert : true}
      const updateDoc = {
        $set:{
          ...jobData,
        }
      }
      const result = await jobsCollection.updateOne(query, updateDoc, options)
      res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('My server is running....')
})


app.listen(port, () => {
  console.log('my server is running on port: ', port);
})

