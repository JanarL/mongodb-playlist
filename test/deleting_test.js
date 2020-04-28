const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Deleting Records', function(){

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
    it("Deletes one record from the database", function(){
        
        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result === null);
                done();
            });
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

