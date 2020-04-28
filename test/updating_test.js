const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Updating Records', function(){

    var char;

    beforeEach(function(done){
        var char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        char.save().then(function(){
            done();
        });
    });
    // Create tests
    it("Updates one record from the database", function(){
        
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === 'Luigi');
                done();
            })
        });
    });

    it("Increments the weight by 1", function(){
        
        MarioChar.update({}, {$inc: {weight: 1}}).then(function(){
                MarioChar.findOne({name: 'Mario'}).then(function(record){
                    assert(record.weight === 51);
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

