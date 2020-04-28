const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe tests

describe('Nesting records', function(){


    beforeEach(function(){
        mongoose.connection.collections.authors.drop(function(){
            done();
        });
    });
    //Create tests
    it('Creates an author with sub-documents',function(done){
        var pat = new Author({
            name: 'Patrich Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(){
                assert(record.books.lenght === 1);
                done();
            });
        });
    });
    it('Adds book to an author', function(done){
        var pat = new Author({
            name: 'Patrich Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });
        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                // add a book to the array
                record.books.push({title: "Wise Man's Fear", pages: 500});
                record.save().then(function(){
                    Author.findOne({name:'Patrick Rothfuss'}).then(function(result){
                        assert(result.books.lenght === 2);
                        done();
                    });
                });
            });
        });
    });
});