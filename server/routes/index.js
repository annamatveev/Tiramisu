var path = require('path');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/getJsonCV', function(req, res, next) {
    var CV_JSON = {
        name: "Anna Matveev",
        short: "8200 Alumnus, Experienced Web Developer and Ambitious Team Leader",
        description: "Hello everyone, My name is Anna. I am Web Developer from Israel. " +
        "I started developing things about 6 years ago.",
        contact: {
            phone: "052235226",
            email: "abra.kadabra@gmail.com",
            linkedin: "http://abc.com",
            github: "def.com"
        },
        experiences: [
            {
                title: "Team Leader",
                period: {
                    start: 'June 2014',
                    end: 'August 2017'
                },
                location: "8200 (ISNU), IDF",
                description: "Led a team with 15 developers and QA, managed development cycles under high quality " +
                "standards, strict time frames and fast SLA, worked in collaboration with multiple teams (UX, DevOps, " +
                "Security and many more) across the organization, prioritized tasks and features along with the relevant " +
                "stake holders and product managers, managed operational tasks and customer support to end users. "
            },
            {
                title: "Full-Stack Developer ",
                period: {
                    start: 'April 2012',
                    end: 'June 2014'
                },
                location: "8200 (ISNU), IDF",
                description: "Developed various different features and services in multiple languages - client side and " +
                "backend services, and worked with numerous open source products such as elgg, MySQL, jQuery and more. " +
                "Designed and implemented features from scratch and analyzed various scale-related performance problems " +
                "on the client-side, server-side and databases. Performed DevOps tasks, code maintenance and building " +
                "operational tools for legacy applications and providing customer support to end users."
            },
            {
                title: "Full-Stack Developer ",
                period: {
                    start: 'November 2014',
                    end: 'August 2015'
                },
                location: "Magen 100 LTD",
                description: "Developed the first user interface for Magen cyber technologies. Designed and implemented " +
                "the application from scratch and integrated with the relevant information and API from Magen’s services."
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
