const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Saving Records', function(){

    // Create tests
    it("Saves a Record to the DB", function(){

        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });
});

// Drop the characters collection before each test

beforeEach(function(done){
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});

