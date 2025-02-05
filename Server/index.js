require('dotenv').config();
const express = require('express');
const cors = require('cors');


const port = process.env.PORT || 5000;

const app = express();


app.use(cors());
app.use(express.json());
// fafdadfs




app.get('/', (req, res) => {
    res.send('Hello from volunteer-management server ....')
  })
  app.listen(port, () => console.log(`server running on port : ${port}`))