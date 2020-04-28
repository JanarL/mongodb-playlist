const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the DB before tests run
before(function(done){
    
    //Connection
    mongoose.connect('mongodb://localhost/testaroo', {useNewUrlParser: true, useUnifiedTopology: true});

    mongoose.connection.once('open', function(){
        console.log('Connection has been made..');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });
});
