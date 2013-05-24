var mongo = require('mongoskin'),
    db = mongo.db('mongodb://neil:goober@alex.mongohq.com:10011/node3'),
    profiles = require('./profiles'),
    users = [{name: 'dave', pwd: 'expressrocks'},
            {name: "MrPage", pwd:'hellomynamesmrpage'}
            ];
db.collection('users').remove({});
db.collection('profiles').remove({});
db.collection('users').insert(users);
Object.keys(profiles).forEach(function(key){
   db.collection('profiles').insert(profiles[key]); 
});
db.close();