const express = require('express');
const app = express();
const PORT = 3000;

const movies = require('./moviesData');

const hbs = require('hbs');

// SET THE TEMPLATING ENGINE
app.set('view engine', 'hbs');

// SET THE DIRECTORY USED TO SERVE VIEWS
app.set('views', __dirname + '/views');

// SET THE DIRECTORY USED TO SERVE PARTIALS
hbs.registerPartials(__dirname + '/views/partials');


// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + '/public'));


// ROUTES
    // '/' GET
app.get('/', (req,res,next) => {
    console.log('indexView');
     
    res.render('index');
})

    // '/movies'' GET
app.get('/movies', (req,res, next) => {
    console.log('moviesView');
    
    const sliced40Movies = movies.slice(0,40);
    
    const data = {
        movies: sliced40Movies,
        // layout: false
    }

    res.render('movies', data)
})

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening to port: ${PORT}`))
