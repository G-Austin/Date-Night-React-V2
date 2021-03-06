'use strict';

var request = require('request');

module.exports = function (app) {
    app.post("/api/search", function (req, res, next) {
        console.log('req.body', req.body);
        var body = req.body;
        var genre = body.genre,
            foodType = body.foodType,
            zipcode = body.zipcode;

        var options = {
            url: 'https://api.yelp.com/v3/businesses/search?term=restaurant&location=' + zipcode + '&categories=' + foodType,
            headers: {
                'Authorization': 'Bearer S7Iu9qp-LWQHVALB4GweWmd0ngVavSMAcMatDXn6PFk6tXIFDWBa4uNxhawNkJllDGo5c5-JvrIjIBvf-581Y4jxpPpsQZKExlOMEtEgyC-4g4wq0zjxutTqeZY0WnYx'
            }
        };

        request(options, function (err, response, resbody) {
            //   console.log('error', err);
            //   console.log('res', response);
            //   console.log('body', resbody);
            res.send(resbody);
        });
    });
};
//# sourceMappingURL=search.js.map