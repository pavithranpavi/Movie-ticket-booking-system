var express=require('express');
var bodyParser = require('body-parser');

var app=express();

app.use(express.static('dist'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/',getIndexFile);


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ticketBooking');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));
db.once('open', function() {
    console.log('MongoDB Connection Success:');

    var movies = mongoose.Schema({
        id:Number,
        title: String,
        content: String,
        url: String,
        review: String
    });

    var bookMovies = mongoose.Schema({
        quantity:Number,
        date: Date,
        movieName: String,
        movieId:Number
    });

    var moviesModel = mongoose.model('movies', movies);
    var bookMoviesModel = mongoose.model('ticketBook', bookMovies);

    var moviesList = [
        {
            id:1,
            title: 'AVATAR',
            content: 'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still ...',
            url: '/assets/images/Avatar-Teaser-Poster.jpg',
            review:'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth\'s energy crisis. Because Pandora\'s atmosphere is toxic, they have created the Avatar Program, in which human drivers have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na\'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na\'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na\'vi female, Neytiri, saves Jake\'s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake\'s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na\'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)'
        },
        {
            id:2,
            title: 'GODZILLA (I)',
            content: 'Godzilla does Manhattan in this variation on the Japanese A-bomb monster movie classic....',
            url: '/assets/images/Godzilla_1998_Movie_Poster.jpg',
            review:'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth\'s energy crisis. Because Pandora\'s atmosphere is toxic, they have created the Avatar Program, in which human drivers have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na\'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na\'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na\'vi female, Neytiri, saves Jake\'s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake\'s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na\'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)'
        },
        {
            id:3,
            title: 'HOLLOW MAN',
            content: 'A government scientist (Bacon) discovers how to make people invisible. After a freak accident that...',
            url: '/assets/images/Poster_Hollow_Man.jpg',
            review:'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth\'s energy crisis. Because Pandora\'s atmosphere is toxic, they have created the Avatar Program, in which human drivers have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na\'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na\'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na\'vi female, Neytiri, saves Jake\'s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake\'s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na\'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)'
        },
        {
            id:4,
            title: 'IRON MAN',
            content: 'Tony Stark is a billionaire industrialist and genius inventor who is kidnapped and forced to build ...',
            url: '/assets/images/Link_to_Iron_Man_bleeding_edge.jpg',
            review:'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth\'s energy crisis. Because Pandora\'s atmosphere is toxic, they have created the Avatar Program, in which human drivers have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na\'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na\'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na\'vi female, Neytiri, saves Jake\'s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake\'s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na\'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)'
        },
        {
            id:5,
            title: 'JURASSIC PARK',
            content: 'Featuring incredible special effects and action - packed drama, Jurassic Park takes you to a remote...',
            url: '/assets/images/Jurassic_Park_poster.jpg',
            review:'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth\'s energy crisis. Because Pandora\'s atmosphere is toxic, they have created the Avatar Program, in which human drivers have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na\'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na\'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na\'vi female, Neytiri, saves Jake\'s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake\'s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na\'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)'
        },
        {
            id:6,
            title: 'ROBOCOP',
            content: 'The year is 2028 and multinational conglomerate OmniCorp is at the center of robot technology. Ove...',
            url: '/assets/images/Robocop_poster.jpg',
            review:'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth\'s energy crisis. Because Pandora\'s atmosphere is toxic, they have created the Avatar Program, in which human drivers have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na\'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na\'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na\'vi female, Neytiri, saves Jake\'s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake\'s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na\'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)'
        },
        {
            id:7,
            title: 'INCREDIBLE HULK',
            content: 'The Incredible Hulk kicks off an all-new, explosive and action-packed epic of one of the most popu...',
            url: '/assets/images/Avatar-Teaser-Poster.jpg',
            review:'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth\'s energy crisis. Because Pandora\'s atmosphere is toxic, they have created the Avatar Program, in which human drivers have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na\'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na\'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na\'vi female, Neytiri, saves Jake\'s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake\'s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na\'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)'
        },
        {
            id:8,
            title: 'TRANSFORMERS',
            content: 'Transformers: Dark of the Moon features Sam Witwicky taking his first tenuous steps into adulthood ...',
            url: '/assets/images/Avatar-Teaser-Poster.jpg',
            review:'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth\'s energy crisis. Because Pandora\'s atmosphere is toxic, they have created the Avatar Program, in which human drivers have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na\'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na\'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na\'vi female, Neytiri, saves Jake\'s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake\'s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na\'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)'
        },
        {
            id:9,
            title: 'X-MEN',
            content: 'Dr. Charles Xavier gathers children from all over the planet who were born with an added twist to ...',
            url: '/assets/images/Link_to_Iron_Man_bleeding_edge.jpg',
            review:'Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth\'s energy crisis. Because Pandora\'s atmosphere is toxic, they have created the Avatar Program, in which human drivers have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na\'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na\'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na\'vi female, Neytiri, saves Jake\'s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake\'s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na\'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)'
        }
    ];

    moviesList.forEach(function (doc) {
        var query = {'id':doc.id};
        moviesModel.findOneAndUpdate(query, doc, {upsert:true}, function(err, doc){
            if (err) {
                console.log('error',err);
                return
            }
            return console.log("succesfully saved");
        });
    });

    app.get('/getMoviesList',getMoviesList);
    app.post('/ticketBook',ticketBook);
    app.get('/getMovie/:id',getMovie);
    app.get('/getBookingList',getBookingList);

    function getMovie(req,res) {

        moviesModel.find({id:req.params.id}).then(function (success) {
            res.json(success);
        },function (error) {
            res.json(error);
        })
    }

    function getMoviesList(req,res) {

        moviesModel.find().then(function (success) {
            res.json(success);
        },function (error) {
            res.json(error);
        });
    }

    function ticketBook(req,res) {
        console.log('req',req.body);
        bookMoviesModel.create(req.body).then(function (success) {
            res.json(success);
        },function (error) {
            res.json(error);
        });
    }

    function getBookingList(req,res) {
        bookMoviesModel.find().then(function (success) {
            res.json(success);
        },function (error) {
            res.json(error);
        });
    }

});

app.listen(3000, function () {
    console.log('Ticket booking app running on 3000!')
});

function getIndexFile(req,res) {
    return res.sendFile(__dirname+'/dist/index.html');
}