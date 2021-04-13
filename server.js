const { Router } = require('express')
const express = require('express')
const CustomerManager = require('./lib/CustomerManager.js')
const Customer = require('./lib/Customer.js')
const app = express()
const customerManager = new CustomerManager

 

app.get('/', function(req, res){
  res.render('index',{title:'page', anyArray:[1, 2, 3]});
});
app.get('/Customer', function(req, res){
  res.render('Customer',{output:})
} )
app.get('/Tables', function(req, res){
  const tables = customerManager.getTables()
  res.render('Tables',res.json(tables))
} )
app.get('/', function (req, res) {
  res.send('Hello World')
})

 app.get('/', function (req, res) {
     
 })
app.listen(3000)