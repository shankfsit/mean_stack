const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MEANStackDB', (err)=>{
    if(!err){
        console.log('database connected!!');
    }
    else{
        console.log('Error in database connection ' + JSON.stringify(err, undefined, 2));
    }
});

require('./user.model');