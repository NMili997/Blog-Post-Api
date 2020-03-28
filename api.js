const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');


const app = express();
const port = 8080;
app.use(bodyParser.json());

//importing routes
const postsRoute = require('./Routes/posts');
app.use('/posts', postsRoute);

const commentsRoute = require('./Routes/comments');
app.use('/comments' , commentsRoute);

mongoose.connect(//process.env.DB_CONNECTION ,
  'mongodb+srv://sudoCamp:Sudocamp123@cluster0-gzhog.gcp.mongodb.net/test?retryWrites=true&w=majority' ,
      { useNewUrlParser: true },
      () => console.log('connected'));

app.use(cors());


/*express.static will use later, when we want to connect with
static file on client side
app.use(express.static('client'));*/

app.post('/', (req, res) => {
  console.log(req.body);
  const data = req.body;

  res.json({
    status: "success",
  })
})
app.get('/', (req, res)=>{
  res.send('This is mainpage');
})

app.listen(port,() => console.log(`Listening on ${port} !`));
