const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

let listsDO = [];

app.get('/', (req, res) => {
  res.render('home', { title: 'to-do-list', listsDO }); 
});

app.get('/note.ejs', (req, res) => {
  res.render('note');
});

app.post('/form', (req, res) => {
  const {notes} = req.body;


  const newItem = {
    name: notes
  };

  if (!newItem) {
    res.status(404).send('Not found');
  } else {
    listsDO.push(newItem); 
    console.log(listsDO);
  
    res.redirect('/');
  }
});
app.put('/formmodifier',(req,res)=>{
  const {notes} = req.body;


  const newItem = {
    name: notes
  };

  if (!newItem) {
    res.status(404).send('Not found');
  } else {
   name = req.body.name;
    console.log(listsDO);
  
    res.redirect('/');
  }

})

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
