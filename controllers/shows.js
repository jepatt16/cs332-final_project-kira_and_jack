const Shows = require('../models/shows.js')

module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'name'; // Default to sort by course

  Shows.find().sort(order)
    .then(names => response.render('shows/index', {names: names, order: order}))
    .catch(error => next(error));
};

module.exports.retrieve = function(request, response, next){
    response.send(`GET /shows/${request.params.date}`);
};
