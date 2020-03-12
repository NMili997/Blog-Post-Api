const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

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
app.get('/post.html', (req, res)=>{
  res.send('This is page with posts');

  req.console.log('data');
})
app.get('/postId/comments/:id', (req, res)=>{
  res.send('Here we are on page with comments for cliked postId');
})

app.listen(port,() => console.log(`Listening on ${port} !`));
