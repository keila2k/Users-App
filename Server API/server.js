var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var users = [
    {
        "id": 836454995,
        "name": "Barrera Hayes",
        "username": "barrera",
        "password": "hayes",
        "gender": "female",
        "email": "barrera@hayes.ca",
        "phone": "+1 (853) 487-2140",
        "address": "548 Clifford Place, Warsaw, Florida, 4459",
        "birthDate": "April 28, 2017",
        "habits": [
            {
                "title": "ea",
                "description": "Aute esse dolor incididunt adipisicing sit elit pariatur enim irure."
            },
            {
                "title": "et",
                "description": "Sit laborum eiusmod Lorem labore amet excepteur laboris et pariatur ea voluptate eiusmod et."
            },
            {
                "title": "enim",
                "description": "Esse ullamco laboris occaecat exercitation duis fugiat labore non ex magna culpa qui elit ut."
            },
            {
                "title": "adipisicing",
                "description": "Proident tempor mollit elit minim voluptate magna eiusmod exercitation adipisicing aliqua pariatur commodo."
            },
            {
                "title": "ad",
                "description": "Mollit consectetur consectetur aute fugiat nulla pariatur qui mollit proident dolor Lorem dolore qui ut."
            },
            {
                "title": "irure",
                "description": "Veniam ad cillum tempor est fugiat in aute consectetur dolore sint consequat sint."
            },
            {
                "title": "exercitation",
                "description": "Veniam officia labore esse labore amet aute non voluptate amet."
            }
        ],
        "admin": true
    },
    {
        "id": 269928101,
        "name": "Glenna Gonzalez",
        "username": "glenna",
        "password": "gonzalez",
        "gender": "female",
        "email": "glenna@gonzalez.tv",
        "phone": "+1 (845) 420-2070",
        "address": "684 Terrace Place, Taycheedah, Indiana, 7576",
        "birthDate": "March 24, 1995",
        "habits": [
            {
                "title": "eu",
                "description": "Aliquip deserunt ea do ut occaecat anim laborum dolor."
            },
            {
                "title": "non",
                "description": "Reprehenderit ea nostrud magna eiusmod."
            },
            {
                "title": "labore",
                "description": "Aliqua velit aliqua do consectetur esse ex enim excepteur duis nostrud ea."
            },
            {
                "title": "sit",
                "description": "Aute ut magna laborum minim et id anim pariatur."
            },
            {
                "title": "consectetur",
                "description": "Proident officia ut consequat incididunt nulla ut."
            },
            {
                "title": "aliquip",
                "description": "Ad do aliquip proident labore consectetur excepteur occaecat irure."
            },
            {
                "title": "nulla",
                "description": "Eu nostrud ex sunt non voluptate quis fugiat ex eu ut."
            }
        ],
        "admin": false
    },
    {
        "id": 849138680,
        "name": "Manning Scott",
        "username": "manning",
        "password": "scott",
        "gender": "male",
        "email": "manning@scott.co.uk",
        "phone": "+1 (805) 544-2736",
        "address": "220 Bokee Court, Glenbrook, South Carolina, 9738",
        "birthDate": "December 2, 2016",
        "habits": [
            {
                "title": "incididunt",
                "description": "Lorem commodo sint quis commodo."
            },
            {
                "title": "proident",
                "description": "Exercitation ullamco irure sit exercitation."
            },
            {
                "title": "aliqua",
                "description": "Do reprehenderit Lorem aliqua dolore in voluptate elit aliqua sit cillum exercitation sint."
            },
            {
                "title": "commodo",
                "description": "Veniam eiusmod commodo cillum culpa."
            },
            {
                "title": "minim",
                "description": "Et Lorem qui aute deserunt culpa minim officia nisi deserunt sit voluptate laborum."
            },
            {
                "title": "irure",
                "description": "Cillum officia velit laboris dolor adipisicing eiusmod veniam exercitation ut in ex eiusmod proident dolor."
            },
            {
                "title": "aliqua",
                "description": "Dolore ex irure nulla reprehenderit ut irure amet duis eiusmod eu cupidatat amet."
            }
        ],
        "admin": false
    },
    {
        "id": 110518038,
        "name": "Curry Wolf",
        "username": "curry",
        "password": "wolf",
        "gender": "female",
        "email": "curry@wolf.us",
        "phone": "+1 (826) 527-3313",
        "address": "215 Clinton Avenue, Kiskimere, New Jersey, 2947",
        "birthDate": "November 24, 2005",
        "habits": [
            {
                "title": "consectetur",
                "description": "Quis ex proident nostrud adipisicing ut dolor adipisicing qui veniam enim pariatur nostrud do culpa."
            },
            {
                "title": "consectetur",
                "description": "Eu magna sint ullamco incididunt velit fugiat enim."
            },
            {
                "title": "ipsum",
                "description": "In dolore officia cupidatat do qui in velit enim duis esse quis consectetur Lorem et."
            },
            {
                "title": "minim",
                "description": "Qui esse ipsum duis duis tempor."
            },
            {
                "title": "Lorem",
                "description": "Reprehenderit aliqua velit sint est Lorem aliquip ea cupidatat ea do ea."
            },
            {
                "title": "id",
                "description": "Aliqua cupidatat ex ullamco sit magna."
            },
            {
                "title": "fugiat",
                "description": "Ut esse dolor esse amet laborum dolore id in dolor nulla eu cupidatat sunt."
            }
        ],
        "admin": false
    },
    {
        "id": 871695731,
        "name": "Helen Cooke",
        "username": "helen",
        "password": "cooke",
        "gender": "male",
        "email": "helen@cooke.biz",
        "phone": "+1 (804) 460-2115",
        "address": "884 Nolans Lane, Diaperville, Texas, 527",
        "birthDate": "September 3, 2001",
        "habits": [
            {
                "title": "proident",
                "description": "Do labore in culpa ad aute laboris minim aute non duis."
            },
            {
                "title": "mollit",
                "description": "Proident incididunt aute in consectetur exercitation."
            },
            {
                "title": "officia",
                "description": "Dolore anim officia eiusmod mollit mollit non proident deserunt."
            },
            {
                "title": "ea",
                "description": "Tempor elit duis eu commodo nulla sit consectetur ut consectetur."
            },
            {
                "title": "ad",
                "description": "Ipsum cillum excepteur ea est eu occaecat do dolor incididunt eu nostrud enim."
            },
            {
                "title": "aliqua",
                "description": "Eu cillum ipsum consectetur pariatur laborum."
            },
            {
                "title": "aliquip",
                "description": "In laboris sit incididunt culpa aliquip et cillum eiusmod excepteur eu proident cupidatat."
            }
        ],
        "admin": false
    },
    {
        "id": 911134561,
        "name": "Henson Henson",
        "username": "henson",
        "password": "henson",
        "gender": "female",
        "email": "henson@henson.info",
        "phone": "+1 (858) 502-3804",
        "address": "699 Montrose Avenue, Duryea, Nevada, 4409",
        "birthDate": "September 15, 1999",
        "habits": [
            {
                "title": "consectetur",
                "description": "Dolor nisi eiusmod tempor cillum nisi ullamco minim consectetur nulla culpa qui deserunt."
            },
            {
                "title": "commodo",
                "description": "Minim sit mollit nulla ad commodo ipsum reprehenderit dolore dolore labore occaecat reprehenderit."
            },
            {
                "title": "dolore",
                "description": "Excepteur eiusmod dolore amet nostrud incididunt do culpa consequat esse aliquip minim."
            },
            {
                "title": "exercitation",
                "description": "Aliqua eiusmod proident ullamco esse eiusmod elit aliquip duis est cillum consectetur."
            },
            {
                "title": "velit",
                "description": "Sit eiusmod occaecat quis incididunt in excepteur."
            },
            {
                "title": "velit",
                "description": "Aute qui consequat eu officia officia ad enim aute laborum laborum quis esse sit."
            },
            {
                "title": "irure",
                "description": "Proident enim sint mollit nisi reprehenderit nisi consectetur tempor nisi."
            }
        ],
        "admin": false
    },
    {
        "id": 487603237,
        "name": "Cote Middleton",
        "username": "cote",
        "password": "middleton",
        "gender": "female",
        "email": "cote@middleton.me",
        "phone": "+1 (919) 565-3258",
        "address": "657 Beverley Road, Fairlee, Idaho, 6524",
        "birthDate": "September 25, 2003",
        "habits": [
            {
                "title": "ad",
                "description": "Minim quis aliquip minim incididunt velit voluptate tempor pariatur in ex quis labore do."
            },
            {
                "title": "qui",
                "description": "Deserunt enim ad eiusmod eu non."
            },
            {
                "title": "eu",
                "description": "Pariatur nostrud laborum mollit aliquip incididunt."
            },
            {
                "title": "cillum",
                "description": "Ex eiusmod duis tempor do."
            },
            {
                "title": "deserunt",
                "description": "Occaecat sint est magna quis adipisicing culpa."
            },
            {
                "title": "quis",
                "description": "Sit ex consectetur incididunt tempor labore anim nostrud excepteur."
            },
            {
                "title": "quis",
                "description": "Reprehenderit magna velit sit laboris laborum adipisicing."
            }
        ],
        "admin": false
    }
];
/*==================== GET ====================*/
// Get users
app.get('/api/users', function (req, res) {
    res.send(users);
});

// Get user
app.get('/api/users/:id', function (req, res) {
    var id = Number(req.params.id);
    for( var i = 0; i < users.length; i++){
        if(id === users[i].id){
            res.status(200).send(users[i]);
            return;
        }
    }
    res.status(500).send({error: "Request Failed"});
});

// Get user habits
app.get('/api/users/:id/habits', function (req, res) {
    var id = Number(req.params.id);
    for( var i = 0; i < users.length; i++){
        if(id === users[i].id){
            res.status(200).send(users[i].habits);
            return;
        }
    }
    res.status(500).send({error: "Request Failed"});
});

/*==================== Delete ====================*/

// Delete habit from user
app.delete('/api/users/:id/habits/:name', function (req, res) {
    var id = Number(req.params.id);
    var habitTitle = req.params.name;
    var found = false;
    for( var i = 0; i < users.length; i++){
        var currUser = users[i];
        if(id === currUser.id){
            var newHabits = currUser.habits.filter(habit => habit.title !== habitTitle);
            if (newHabits.length !== currUser.habits.length){
                found = true;
                currUser.habits = newHabits;
            }
        }
    }
    if(found){
        res.status(200).send(newHabits);
    }
    else {
        res.status(500).send({error: "Request Failed"});
    }
});

// Delete user
app.delete('/api/users/:id', function (req, res) {
    var id = Number(req.params.id);
    var found = false;
    var newUsers = users.filter(user => user.id !== id)
    if( users.length !== newUsers.length){
        found = true;
        users = newUsers;
    }
    if(found){
        res.status(200).send(users);
    }
    else {
        res.status(500).send({error: "Request Failed"});
    }
});


/*==================== Post ====================*/

// Add user
app.post('/api/users/:id', function (req, res) {
    var id = Number(req.params.id);
    const filteredUsers = users.filter( user => user.id === id);
    if(!filteredUsers.length){
        const newUser = req.body
        users.push(newUser);
        res.status(200).send(newUser)
    }
});

// Add habit to user
app.post('/api/users/:id/habits/:name', function (req, res) {
    var newHabit = req.body;
    var id = Number(req.params.id);
    var posted = false;
    if (!newHabit || newHabit.text == "") {
        res.status(500).send({
            error: "Your ingredient must have text"
        });
    } else {
        for( var i = 0; i < users.length; i++){
            var currUser = users[i];
            if(id === currUser.id){
                currUser.habits.push(newHabit);
                posted = true;
            }
        }
    }
    if(posted){
        res.status(200).send(newHabit);
    }
    else{
        res.status(500).send({error: "there was an error"});
    }
});

// Authenticate
app.post('/api/authenticate', function (req, res) {
    const filteredUsers = users.filter( value =>{
        return (value.email === req.body.email && value.password === req.body.password);
    });
    if(filteredUsers.length){
        const user = filteredUsers[0];
        const body = user;
        body.token = 'fake-token';
        res.status(200).send(body);
    }
    else{
        res.status(500).send('Email or password is incorrect');
    }
});


app.listen(3000, function () {
    console.log("Users App server running on port 3000!");
});
