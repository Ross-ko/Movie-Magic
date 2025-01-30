import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import showRatingHelper from './helpers/rating-helper.js';
import mongoose from 'mongoose';

const app = express();

// db config
try {
    const uri = 'mongodb://127.0.0.1:27017/magic-movies'
    await mongoose.connect(uri);

    console.log('DB connected Successfully');
    
} catch (err) {
    console.log('Cannot connect to DB');
    console.error(err.message);
}

// handlebars config
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        showRating: showRatingHelper,
    }
}))

app.set('view engine', 'hbs');
app.set('views', './src/views');

// express config
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({extended: false})); //learn express to parse form data

// setup routes
app.use(routes);
app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));