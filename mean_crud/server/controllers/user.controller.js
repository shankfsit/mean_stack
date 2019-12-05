const mongoose = require('mongoose');
const _ = require('lodash');
var ObjectId = require('mongoose').Types.ObjectId;

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.allusers = (req, res, next)=>{
    User.find((err, result)=>{
        if(!err)
            res.send(result);
        else
            return next(err);    
    });
}

module.exports.userone = (req, res, next)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Record found with id : $(req.params.id)');

    User.findById(req.params.id, (err, result)=>{
        if(!err)
            res.send(result);
        else
            return next(err);   
    });
} 

module.exports.useredit = (req, res, next)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Record found with id : $(req.params.id)');

        var user = {
            fullName:req.body.fullName,
            email:req.body.email,
            password: req.body.password
        };
    
    User.findByIdAndUpdate(req.params.id,{$set: user}, {new:true}, (err, result)=>{
        if(!err)
            res.send(result);
        else
            return next(err);   
    });
} 

module.exports.userdelete = (req, res, next)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Record found with id : $(req.params.id)');

    User.findByIdAndRemove(req.params.id, (err, result)=>{
        if(!err)
            res.send(result);
        else
            return next(err);   
    });    
}