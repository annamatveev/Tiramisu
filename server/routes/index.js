var path = require('path');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/getJsonCV', function(req, res, next) {
    var CV_JSON = {
        name: "Anna",
        description: "This is my description",
        contact: {
            phone: "052235226",
            email: "abra.kadabra@gmail.com",
            linkedin: "http://abc.com",
            github: "def.com"
        },
        experiences: [
            {
                title: "IBM",
                period: {
                    start: 'August 2011',
                    end: 'August 2017'
                },
                location: "New York",
                description: "Did some stuff"
            }
        ],
        projects: [
            {
                title: "Social Network Platform",
                location: "IBM",
                description: "Did some stuff too"
            }
        ],
        education: [
            {
                date: "July 2011",
                specialty: "B.Sc in Rocket Science",
                institute: "MIT"
            }
        ]
    }
    res.set('Content-Type', 'application/json')
    res.send(CV_JSON);
});


module.exports = router;
