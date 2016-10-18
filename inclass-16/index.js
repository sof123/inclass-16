
const express = require('express')
const bodyParser = require('body-parser')
var currentId = 3
var articles = { 'articles' : [ { id: 1, author: 'Scott', body:'A post' }, { id: 2, author: 'Scotty', body:'A posty' },
            { id: 3, author: 'Scottie', body:'A postie' }]}

const addArticle = (req, res) => {
     console.log('Payload received', req.body)
     articles.articles.push({id: currentId+1, author: 'Scotty', body: req.body.body});
     currentId++;
     //return articles.articles[currentId-1];

     res.send(req.body);
}

const hello = (req, res) => res.send({ hello: 'world' })

const getArticles = (req, res) => {
     console.log('Payload received', req.body)
    var payload;
    if (req.method == 'GET' && req.url == '/articles')
	  {
  		payload = articles;
	  }

    //res.setHeader('Content-Type', 'application/json')
    //res.statusCode = 200
    res.send(JSON.stringify(payload))
	  console.log(JSON.stringify(payload))
    //res.send(req.body)
}

const app = express()
app.use(bodyParser.json())
app.post('/article', addArticle)
app.get('/', hello)
app.get('/articles', getArticles)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})

function getArticleText(string)
{
  for (var i = 0; i < string.length;i++)
  {

  }

}
