const express = require('express')
const router = express.Router();

var Employee = require('../Models/employee')
var ObjectId = require('mongoose').Types.ObjectId

// Get All Employees
router.get('/',(req, res) => {
    Employee.find((err,docs) => {
        if (!err)
            res.send(docs)    
    })
})

// Save Employee
router.post('/', (req,res) => {
    var employeeData = new Employee({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    });
    employeeData.save((err, doc) => {
        if (!err) 
            res.send(doc)
        else  
            res.send('Data not saved')
    })
})

// Get Employee By Id
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id))
        Employee.findById(req.params.id, (err, doc) => {
            res.send(doc)
        })
    else
        res.send('Data Not Found')    
})

// Update Employee
router.put('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id)) 
        res.send('Data not found')
    else
        var employeeData = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile
        }
    Employee.findByIdAndUpdate(req.params.id, {$set: employeeData}, {new: true}, (err, doc) => {
        if(!err) 
            res.send(doc)
        else 
            res.send('Data not updated')
    });
})

// Delete Employee
router.delete('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id))
        Employee.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err)
                res.send(doc)
            else
                res.send('Data not deleted')    
        })    
})
module.exports = router