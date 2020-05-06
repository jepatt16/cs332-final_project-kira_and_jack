const SignUp = require('../models/signups.js')
const OpenMic = require('../models/open_mics')

module.exports.index = function(request, response, next) {
    queries = [
        OpenMic.distinct('date'),
        SignUp.find()
    ];
    Promise.all(queries)
        .then(function(results){
            response.render('signups/index', {events:results[0], signups:results[1]})
        })
        .catch(error => next(error));
};
// new signup request
module.exports.create = function (request, response, next) {
  SignUp.create(request.body)
    .then(data => response.status(201).send(data))
    .catch(error => next(error));
};

//delete signup
module.exports.delete = function(request, response, next){
    SignUp.findByIdAndDelete(request.params.id)
        .then(suggestion => suggestion ? response.status(200).end() : next())
        .catch(error => next(error));
};
