
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

app.use(express.json());



/* BEGIN - create routes here */
app.get('/users', (req, res) => {

  res.json(users)

})

app.get('/users/:id', (req, res) => {

  const user = users.find((user) => user._id == req.params.id)



  res.json(user);


})

// app.push('/users/:id', (req, res) => {

app.delete('/users/:id', (req, res) => {


  const user = users.findIndex((user) => user._id == req.params.id)


  if (user !== -1) {

    const deleteUser = users.splice(user, 1);

    res.json(deleteUser);

  }

  // new key value = isActive: False
  
  // res.send(deleted)


})

// })


app.post('/users', (req, res) => {

  console.log('req.body', req.body);

  users.push({

    ...req.body,

    _id: users.length + 1 

  })

  res.json({...req.body,

    _id: users.length})


})



app.put('/users/:id', (req, res) => {

  let user = users.find((user) => user._id == req.params.id);


  user = {
    ...user,
    ...req.body,
    _id: user._id
  }

  users[user._id -1] = user;

  console.log('users', users);

  res.send(user);



})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))