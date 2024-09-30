
const express = require('express')
const app = express()
const port = 3000

// the below code used for: "Static files are served from the 'public' folder."
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
  res.send('Hello About')
})


app.get('/contact', (req, res) => {
  res.send('Hello Contact')
})

app.get('/blog/:slug', (req, res) => {
  //logic to fetch {slug} from DB
  // For URL http://localhost:3000/blog/intro-to-pardesi?mode=dark&region=pak
  console.log(req.params); //will output { slug: 'intro-to-pardesi' }
  console.log(req.query); //will output { mode: 'dark', region: 'pak' }


  res.send(`Hello ${req.params.slug}`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
