<h1> Blog-Post-Api</h1>

[Node.js](https://nodejs.org/en/)

<strong>Building RESTFul-Api with Node.js:</strong>

![Alt](img/javascript-icon-clipart-3.jpg)<br>

<strong>Using npm:</strong>

![Alt](img/Npm-logo.svg)<br>

<em>Node packages menager</em> command for installing packages: </p>

1. [Express](https://www.npmjs.com/package/express)<br>
2. [Cors](https://www.npmjs.com/package/cors)<br>
3. [Body-Parser](https://www.npmjs.com/package/body-parser)<br>
4. [Mongoose](https://www.npmjs.com/package/mongoose)

<ul>

<li>With mongoose we're conected to a database<br></li>

<li>CORS is "Cross-origin resource sharing" and provide Connect/Express middleware that can be used.</li>

<li>Express is web framework for</li>

		1. Robust routing
		2. HTTP helpers
		3. Super-high test coverage

<li>Body-parser is for parsing incoming reques bodies in a middleware before your handlers.</li>
</ul>

>Ways to install packages:
>><em>npm install express -g </em> <br> <em>npm install body-parser</em>

Some templates for using Express:</p>

```javascript
const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Just example for using express')
})

app.listen(8080)
```
Connecting to a database via Mongoose:

```javascript
//At first we need to:
const mongoose = require('mongoose');

//Second is to connect to MongoDB:
mongoose.connect(process.env.DB_CONNECTION ,
      { useNewUrlParser: true },
      () => console.log('connected'));

//Third is defining a Model through Schema interface:
const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
	username: String,
	title: String
})
module.exports = mongoose.model('Posts' , PostSchema);

//Fourth is acessing a Modal:
const Post = require('../models/Post')
```
<strong>Using Makefile on [Ubuntu](https://ubuntu.com/) :</strong>
<ul>
	<li>Using Fakefile, universal Makefile for JS proxies to your npm scripts
</ul>

>Installing Fakefile package:
>> <em>npm install --save --exact fakefile</em>
