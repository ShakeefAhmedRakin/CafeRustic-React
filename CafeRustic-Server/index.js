const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iixzvov.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const menuCollection = client
      .db("CafeRusticDB")
      .collection("menuCollection");

    const foodCartCollection = client
      .db("CafeRusticDB")
      .collection("foodCartCollection");

    // FOOD ITEM RELATED API
    // GET ALL FOOD ITEMS
    app.get("/menuitems", async (req, res) => {
      const cursor = menuCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // FOOD CART RELATED API

    // FOOD CART GET ALL API
    app.get("/foodcart", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await foodCartCollection.find(query).toArray();
      res.send(result);
    });

    // FOOD CART POST API
    app.post("/foodcart", async (req, res) => {
      const foodItem = req.body;
      const result = await foodCartCollection.insertOne(foodItem);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
