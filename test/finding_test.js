const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Saving Records', function(){

    var char;

    beforeEach(function(done){
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function(){
            done();
        });
    });
    // Create tests
    it("Finds one record from the database", function(){
        
        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        });

    });

    it("Finds one record by ID from the database", function(){
        
        MarioChar.findOne({_id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
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

